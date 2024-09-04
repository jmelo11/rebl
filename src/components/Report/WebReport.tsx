import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import DeltaNumericStatProps from './DeltaNumericStat';
import SimpleNumericStat from './SimpleNumericStat';
import CardAlert from './CardAlert';
import FeedbackCard from './FeedbackCard';

interface InfoCardProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

function InfoCard(props: InfoCardProps) {
    return (
        <Card
            variant="outlined"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
            }}
        >
            <CardHeader
                title={props.title}
                subheader={props.subtitle}
            />
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    );
}


export interface WebReportProps {
    interest: string,
    outstanding: string,
    current_rate: string,
    estimated_rate: string,
    current_payment: string,
    estimated_payment: string,
    prepayment_penalty: string,
    currency_symbol: string,
}

export function WebReport(props: WebReportProps) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}> */}
            <Stack spacing={2} sx={{ py: { xs: 2, sm: 2 } }}>
                <Typography variant="h4" gutterBottom>
                    Reporte n° 123456
                </Typography>
                <Typography variant="caption" gutterBottom>
                    12 de octubre de 2021
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Aqui tienes un resumen de las condiciones actuales de tu prestamo y información relevante para que puedas tomar decisiones informadas.
                </Typography>
                <Stack spacing={1} direction={{ xs: 'column', md: 'row' }}>
                    <SimpleNumericStat
                        title={'Interes pendiente'}
                        subtitle={'Lo que te falta pagar por la tasa de interes hasta el vencimiento.'}
                        value='$100.000'
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
                        value='$100.000'
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
                    <InfoCard title="Interes pendiente" subtitle="Lo que has pagado por la tasa de interes">
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
                    </InfoCard>
                </Stack>
            </Stack>
            {/* </Stack> */}
        </Box>
    );
}
