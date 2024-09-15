import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import {
    createTheme,
    ThemeProvider,
    styled,
    PaletteMode,
} from '@mui/material/styles';
import { GoogleIcon, FacebookIcon } from '../components/CustomIcons';
import getMPTheme from '../theme/getMPTheme';
import ReblLogo from '../components/ReblLogo';
import { signUp } from "aws-amplify/auth"
import { Alert } from '@mui/material';
import { signInWithRedirect } from 'aws-amplify/auth';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
    height: 'auto',
    backgroundImage:
        'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('sm')]: {
        height: '100dvh',
    },
    ...theme.applyStyles('dark', {
        backgroundImage:
            'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
}));

export default function SignUpPage() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const [showCustomTheme] = React.useState(true);
    const defaultTheme = createTheme({ palette: { mode } });
    const SignUpTheme = createTheme(getMPTheme(mode));
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [verficiationRequired, setVerificationRequired] = React.useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username: data.get('email') as string,
            password: data.get('password') as string,
        });

        if (isSignUpComplete) {
            setVerificationRequired(false);
        } else {
            setVerificationRequired(true);
        }
    }

    // This code only runs on the client side, to determine the system color preference
    React.useEffect(() => {
        // Check if there is a preferred mode in localStorage
        const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
        if (savedMode) {
            setMode(savedMode);
        } else {
            // If no preference is found, it uses system preference
            const systemPrefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches;
            setMode(systemPrefersDark ? 'dark' : 'light');
        }
    }, []);

    const validatePassword = (password: string) => {
        // passwordPolicy: {
        //     minimumLength: 10,
        //     requireLowercase: true,
        //     requireNumbers: true,
        //     requireSymbols: true,
        //     requireUppercase: true,
        //   }

        const hasNumber = /\d/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasSymbol = /[^A-Za-z0-9]/.test(password);

        if (password.length < 10) {
            return 'La contraseña debe tener al menos 10 caracteres.';
        } else if (!hasNumber) {
            return 'La contraseña debe tener al menos un número.';
        } else if (!hasUpper) {
            return 'La contraseña debe tener al menos una mayúscula.';
        } else if (!hasLower) {
            return 'La contraseña debe tener al menos una minúscula.';
        } else if (!hasSymbol) {
            return 'La contraseña debe tener al menos un símbolo.';
        }
        return '';
    }

    const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
        // const name = document.getElementById('name') as HTMLInputElement;
        // const userName = document.getElementById('userName') as HTMLInputElement;

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Ingresa una dirección de correo válida.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        const passwordError = validatePassword(password.value);
        if (passwordError) {
            setPasswordError(true);
            setPasswordErrorMessage(passwordError);
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }
        return isValid;
    };

    const handleAuthProvider = async (provider: string) => {
        try {
            if (provider === 'Google') {
                await signInWithRedirect({ provider: 'Google' });
            } else if (provider === 'Facebook') {
                await signInWithRedirect({ provider: 'Facebook' });
            }
        } catch (error) {
            console.error('Error signing in with redirect', error);
        }
    };


    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         name: data.get('name'),
    //         lastName: data.get('lastName'),
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    // };

    return (
        <ThemeProvider theme={showCustomTheme ? SignUpTheme : defaultTheme}>
            <CssBaseline />
            <SignUpContainer direction="column" justifyContent="space-between">
                <Stack
                    sx={{
                        justifyContent: 'center',
                        height: '100dvh',
                        p: 2,
                    }}
                >
                    <Card variant="outlined">
                        <Stack direction={'row'} spacing={1} sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <ReblLogo />
                            <Typography
                                variant="h3"
                            >
                                Registrate
                            </Typography>
                        </Stack>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                        >
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    placeholder="tu@email.com"
                                    name="email"
                                    autoComplete="email"
                                    variant="outlined"
                                    error={emailError}
                                    helperText={emailErrorMessage}
                                    color={passwordError ? 'error' : 'primary'}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    placeholder="••••••"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    variant="outlined"
                                    error={passwordError}
                                    helperText={passwordErrorMessage}
                                    color={passwordError ? 'error' : 'primary'}
                                />
                            </FormControl>
                            {/* <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Quiero recibir noticias y ofertas de Rebl a este email."
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={validateInputs}
                            >
                                Registrarme
                            </Button>
                            {verficiationRequired && (
                                <Alert severity="success">
                                    Se ha enviado un correo de verificación a tu email.
                                </Alert>
                            )}
                            <Typography sx={{ textAlign: 'center' }}>
                                ¿Ya tienes una cuenta?{' '}
                                <span>
                                    <Link
                                        href="/material-ui/getting-started/templates/sign-in/"
                                        variant="body2"
                                        sx={{ alignSelf: 'center' }}
                                    >
                                        Inicia sesión
                                    </Link>
                                </span>
                            </Typography>
                        </Box>
                        <Divider>
                            <Typography sx={{ color: 'text.secondary' }}>o tambien</Typography>
                        </Divider>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                onClick={() => handleAuthProvider('Google')}
                                startIcon={<GoogleIcon />}
                            >
                                Inicia sesión con Google
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                onClick={() => handleAuthProvider('Facebook')}
                                startIcon={<FacebookIcon />}
                            >
                                Inicia sesión con Facebook
                            </Button>
                        </Box>
                    </Card>
                </Stack>
            </SignUpContainer>
        </ThemeProvider >
    );
}