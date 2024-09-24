import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export type StatCardProps = {
    title: string;
    subtitle: string;
    value: string;
    trend: 'up' | 'down' | 'neutral';
    children?: React.ReactNode;
};

export default function StatCard({
    title,
    value,
    subtitle,
    trend,
    children,
}: StatCardProps) {

    const labelColors = {
        up: 'success' as const,
        down: 'error' as const,
        neutral: 'default' as const,
    };

    const color = labelColors[trend];
    const trendValues = { up: '+25%', down: '-25%', neutral: '+5%' };

    return (
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    {title}
                </Typography>
                <Stack
                    direction="column"
                    sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}
                >
                    <Stack sx={{ justifyContent: 'space-between' }}>
                        <Stack
                            direction="row"
                            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                        >
                            <Typography variant="h4" component="p">
                                {value}
                            </Typography>
                            <Chip size="small" color={color} label={trendValues[trend]} />
                        </Stack>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {subtitle}
                        </Typography>
                    </Stack>
                    <Box sx={{ width: '100%' }}>

                        {children}
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}