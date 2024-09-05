import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function FeedbackCard() {
    return (
        <Card variant="outlined" sx={{ flexGrow: 1, width: '100%' }}>
            <CardContent>
                <AutoAwesomeRoundedIcon fontSize="small" />
                <Typography gutterBottom sx={{ fontWeight: 600 }}>
                    Tu opinión es importante para nosotros
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                    ¿Tienes alguna métrica que te gustaria ver en el reporte?
                </Typography>
                <Button variant="contained" size="small" fullWidth href='/feedback'>
                    Feedback
                </Button>
            </CardContent>
        </Card>
    );
}