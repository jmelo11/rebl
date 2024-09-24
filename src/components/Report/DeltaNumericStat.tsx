import { Card, CardContent, Chip, Stack, Typography } from '@mui/material'


type DeltaNumericStatProps = {
    title: string;
    subtitle: string | 'Example';
    trend: 'up' | 'down' | 'neutral';
    trendValue: string;
    value: string;
}

export default function DeltaNumericStat(props: DeltaNumericStatProps) {

    const labelColors = {
        up: 'success' as const,
        down: 'error' as const,
        neutral: 'default' as const,
    };

    const color = labelColors[props.trend];
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
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    {props.title}
                </Typography>
                <Stack sx={{ justifyContent: 'space-between' }}>
                    <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                    >
                        <Typography variant="h4" component="p">
                            {props.value}
                        </Typography>
                        <Chip size="small" color={color} label={props.trendValue} />
                    </Stack>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {props.subtitle}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
