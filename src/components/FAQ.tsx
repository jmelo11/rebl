import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="faq"
      sx={{
        py: { xs: 16, sm: 16 },
        // pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Preguntas frecuentes
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              ¿Qué tan acertada es la informaciòn que ustedes entregan?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { xs: '100%' } }}
            >
              {/* You can reach our customer support team by emailing
              <Link> support@email.com </Link>
              or calling our toll-free number. We&apos;re here to assist you
              promptly. */}
              Nuestras estimaciones se construyen con dos fuentes de información principales: la que tu nos provees
              sobre tu crédito (tasa, monto, inicio, entre otros) y la información que existe publica en la CMF. Dado
              que aun no tenemos información de bancos, es posible que existan diferencias entre nuestra información y lo
              que te ofrescan estos ultimos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
              No cuento con toda la información que me solicitan en el formulario. ¿Qué puedo hacer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              {/* Absolutely! We offer a hassle-free return policy. If you&apos;re not
              completely satisfied, you can return the product within [number of
              days] days for a full refund or exchange. */}
              Dado que apuntas a realizar una estimación de tus condiciones financieras, información aproximada que puedas tener
              puede ser suficiente para tener una idea general. Si lo que te interesa es contar con la maxima precisicion posible,
              te recomendamos acudir a tu ejecutivo, ellos tienen la información que necesitas.

            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              What makes your product stand out from others in the market?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Our product distinguishes itself through its adaptability, durability,
              and innovative features. We prioritize user satisfaction and
              continually strive to exceed expectations in every aspect.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Is there a warranty on the product, and what does it cover?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Yes, our product comes with a [length of warranty] warranty. It covers
              defects in materials and workmanship. If you encounter any issues
              covered by the warranty, please contact our customer support for
              assistance.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </Box>
    </Container>
  );
}
