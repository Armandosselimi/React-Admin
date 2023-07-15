import React from 'react';
import {Box, useTheme,} from "@mui/material";
import {tokens} from "../../../theme";
import Header from "../../components/Header";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {mockDataContacts} from "../../../data/mockData";

const Contacts = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns = [
        {field: 'id', headerName: 'ID', flex: 0.5},
        {field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell'},
        {field: 'email', headerName: 'Email', flex: 1},
        {field: 'age', headerName: 'Age', headerAlign: 'left', align: 'left'},
        {field: 'phone', headerName: 'Phone', flex: 1},
        {field: "address", headerName: "Address", flex: 1},
        {field: "city", headerName: "City", flex: 1},
        {field: "zipCode", headerName: "Zip Code", flex: 1},
        {field: "registrarId", headerName: "Registrar ID"},
    ]

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
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                },
            }}>
                <DataGrid
                    columns={columns}
                    rows={mockDataContacts}
                    slots={{toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    );
};

export default Contacts;