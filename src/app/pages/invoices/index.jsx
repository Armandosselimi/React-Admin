import React from 'react';
import {Box, useTheme, Typography} from "@mui/material";
import {tokens} from "../../../theme";
import Header from "../../components/Header";
import {DataGrid,} from "@mui/x-data-grid";
import {mockDataInvoices} from "../../../data/mockData";

const Invoices = () => {
    const columns = [
        {field: 'id', headerName: 'ID', flex: 0.5},
        {field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell'},
        {field: 'email', headerName: 'Email', flex: 1},
        {
            field: 'cost',
            headerName: 'Cost',
            flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>)
        },
        {field: 'phone', headerName: 'Phone', flex: 1},
        {field: 'date', headerName: 'Date', flex: 1},


    ]
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box m='20px'>
            <Header title='Contacts' subtitle='List of Contacts'/>
            <Box m='40px 0 0 0 ' high='75vh' sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },


            }}>
                <DataGrid
                    checkboxSelection
                    columns={columns}
                    rows={mockDataInvoices}
                />
            </Box>
        </Box>
    );
};

export default Invoices;