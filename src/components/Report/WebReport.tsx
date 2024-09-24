import { IconButton, Stack, Typography } from '@mui/material';
import SimpleNumericStat from './SimpleNumericStat';
import FeedbackCard from './FeedbackCard';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import ProductOptionsMenu from '../ProductOptionsMenu';
import SyncIcon from '@mui/icons-material/Sync';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export interface WebReportProps {
    prodType: string,
    prodFam: string,
    reportNumber: number,
    interest: number,
    outstanding: number,
    current_rate: number,
    estimated_rate: number,
    current_payment: number,
    estimated_payment: number,
    prepayment_penalty: number,
    currency_symbol: string,
}

function formatCurrency(value: number, currency_symbol: string) {
    // add decimal places, thousands separator and currency symbol
    return currency_symbol + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export function WebReport(props: WebReportProps) {
    return (
        <Stack spacing={1}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{
                justifyContent: 'space-between',
                alignItems: { xs: 'center', sm: 'flex-start' }
            }}>
                <Typography variant="h4" gutterBottom>
                    Reporte {props.prodFam} N° {props.reportNumber}
                </Typography>
                <Stack direction={'row'} spacing={1} sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <IconButton size='small'>
                        <SyncIcon />
                    </IconButton>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Fechas disponibles"
                            format='DD/MM/YYYY'
                            slotProps={{ textField: { size: 'small' } }}
                        />
                    </LocalizationProvider>
                    <ProductOptionsMenu />
                </Stack>
            </Stack>
            <Typography variant="body1" gutterBottom>
                Aqui tienes un resumen de las condiciones actuales de tu prestamo y información relevante para que puedas tomar decisiones informadas.
            </Typography>

            <Stack spacing={1} sx={{
                maxWidth: '1000px',
                margin: '0 auto', // Center the stack horizontally
                alignSelf: 'center',
                py: 2,
            }}>

                <Stack spacing={1} direction={{ xs: 'column', md: 'row' }}>
                    <SimpleNumericStat
                        title={'Interes pendiente'}
                        subtitle={'Lo que te falta pagar por la tasa de interes hasta el vencimiento.'}
                        value={formatCurrency(props.interest, props.currency_symbol)}
                        withModal>
                        <Typography component="h2" variant="subtitle2" gutterBottom>
                            ¿Qué es el interes pendiente?
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            El interes pendiente es la cantidad de dinero que te falta pagar por la tasa de interes de tu prestamo.
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Es importante tener en cuenta que el interes se calcula sobre el capital pendiente, por lo que a medida que pagas el capital, el interes pendiente disminuye.
                        </Typography>
                    </SimpleNumericStat>

                    <SimpleNumericStat
                        title={'Capital pendiente'}
                        subtitle={'Lo que te falta pagar por lo que has pedido de financiamiento.'}
                        value={formatCurrency(props.outstanding, props.currency_symbol)}
                        withModal >
                        <Typography component="h2" variant="subtitle2" gutterBottom>
                            ¿Qué es el capital pendiente?
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            El capital pendiente es la cantidad de dinero que te falta pagar por el prestamo que solicitaste.
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            A medida que pagas el capital, el capital pendiente disminuye.
                        </Typography>
                    </SimpleNumericStat>
                    <FeedbackCard />
                </Stack>
                <Stack spacing={1} direction={'column'}>
                    {/* <InfoCard title="Interes pendiente" subtitle="Lo que has pagado por la tasa de interes">
                        <Typography variant="h5" gutterBottom sx={{
                            textAlign: 'right',
                        }}>
                            {props.currency_symbol}{props.interest}
                        </Typography>
                    </InfoCard>
                    <InfoCard title="Capital pendiente" subtitle="Lo que has pagado por lo que has pedido">
                        <Typography variant="h5" gutterBottom sx={{
                            textAlign: 'right',
                        }}>
                            {props.currency_symbol}{props.outstanding}
                        </Typography>
                    </InfoCard>
                    <InfoCard title="Tasas" subtitle="Que observamos en el mercado">
                        <Stack direction={'row'} sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Typography variant="body2" gutterBottom sx={{
                                textAlign: 'right',
                            }}>
                                Tu tasa actual
                            </Typography>
                            <Typography variant="h5" gutterBottom sx={{
                                textAlign: 'right',
                            }}>
                                {props.current_rate}%
                            </Typography>
                        </Stack>
                        <Stack direction={'row'} sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Typography variant="body2" gutterBottom sx={{
                                textAlign: 'right',
                            }}>
                                Tasa estimada
                            </Typography>
                            <Typography variant="h5" gutterBottom sx={{
                                textAlign: 'right',
                            }}>
                                {props.estimated_rate}%
                            </Typography>
                        </Stack>
                    </InfoCard>
                    <InfoCard title="Cuota" subtitle="Tu pago actual y como quedaria refinanciando">
                        <Stack direction={'row'} sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Typography variant="body2" gutterBottom sx={{
                                textAlign: 'right',
                            }}>
                                Actual
                            </Typography>
                            <Typography variant="h5" gutterBottom sx={{
                                textAlign: 'right',
                            }}>
                                {props.currency_symbol}{props.current_payment}
                            </Typography>
                        </Stack>
                        <Stack direction={'row'} sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Typography variant="body2" gutterBottom sx={{
                                textAlign: 'right',
                            }}>
                                Refinanciando
                            </Typography>
                            <Typography variant="h5" gutterBottom sx={{
                                textAlign: 'right',
                            }}>
                                {props.currency_symbol}{props.estimated_payment}
                            </Typography>
                        </Stack>
                    </InfoCard>
                    <InfoCard title="Comision de prepago" subtitle="Lo que te costaria refinanciar">
                        <Typography variant="h5" gutterBottom sx={{
                            textAlign: 'right',
                        }}>
                            +/-{props.currency_symbol}{props.prepayment_penalty}
                        </Typography>
                    </InfoCard> */}
                </Stack>
            </Stack>
        </Stack >

    );
}
