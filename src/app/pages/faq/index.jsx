import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../../../theme";
import Header from "../../components/Header";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently asked question'/>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Semper viverra nam libero?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Massa tincidunt dui ut?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Elit ut aliquam purus?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Ac orci phasellus egestas?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Vitae tortor condimentum lacinia?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Convallis aenean et tortor?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique.
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Aenean et tortor at risus?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>




        </Box>
    );
};

export default FAQ;