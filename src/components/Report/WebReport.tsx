import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';

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
    interest: number,
    outstanding: number,
    current_rate: number,
    estimated_rate: number,
    current_payment: number,
    estimated_payment: number,
    prepayment_penalty: number,
    currency_symbol: string,
}

export function WebReport(props: WebReportProps) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
                <Stack spacing={2} sx={{ py: { xs: 2, sm: 2 } }}>
                    <Typography variant="h4" gutterBottom>
                        Tu reporte esta listo
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Aqui tienes un resumen de las condiciones actuales de tu prestamo y información relevante para que puedas tomar decisiones informadas.
                    </Typography>
                    <Stack spacing={2} sx={{ flexGrow: 1 }}>
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
            </Stack>
        </Box>
    );
}
