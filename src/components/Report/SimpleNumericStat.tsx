import { Box, Card, CardContent, Chip, Modal, Stack, Typography, useTheme } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import {
    createTheme,
    ThemeProvider,
    styled,
    PaletteMode,
} from '@mui/material/styles';
import getMPTheme from '../../theme/getMPTheme';

type SimpleNumericStatProps = {
    title: string;
    subtitle: string | 'Example';
    value: string;
    withModal?: boolean;
    children?: React.ReactNode;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: string;
}

export default function SimpleNumericStat(props: SimpleNumericStatProps) {
    const [mode, setMode] = React.useState<PaletteMode>('light');

    const labelColors = {
        up: 'success' as const,
        down: 'error' as const,
        neutral: 'default' as const,
    };


    const BaseTheme = createTheme(getMPTheme(mode));
    const InfoButton = styled(IconButton)(({ theme }) => ({
        border: 'none',
        color: theme.palette.info.main,
    })
    );

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open, setOpen] = React.useState(false);

    return (
        <Card variant="outlined" sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1, width: '100%'
        }}>
            < CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                minHeight: 100,
            }}>
                {/* <Stack spacing={1}> */}
                <Stack direction="column">
                    <Stack spacing={1} direction="row" sx={{
                        alignItems: 'center'
                    }} >
                        <Typography component="h2" variant="subtitle2" gutterBottom>
                            {props.title}
                        </Typography>
                        {
                            props.withModal &&
                            <ThemeProvider theme={BaseTheme}>
                                <InfoButton aria-label="info" color="info" size='small' onClick={handleOpen}>
                                    <InfoIcon />
                                </InfoButton>
                            </ThemeProvider>
                        }

                    </Stack>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {props.subtitle}
                    </Typography>


                </Stack>
                <Stack spacing={1} direction={'row'} sx={{
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    {props.trend ? <Chip size="small" color={labelColors[props.trend]} label={props.trendValue} /> :
                        null
                    }
                    <Typography variant="h3" component="p" sx={{ textAlign: 'right' }}>
                        {props.value}
                    </Typography>
                </Stack>
                {/* </Stack> */}
            </CardContent >
            {
                props.withModal && <Modal open={open} onClose={handleClose}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        boxShadow: 24,
                        p: 4,
                    }}>
                        {props.children}
                    </Box>
                </Modal>
            }
        </Card >
    )
}
