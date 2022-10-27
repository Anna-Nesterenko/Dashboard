import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

const Contacts = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
      flex: 0.8,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellCalssName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.5,
    },
    {
      field: "phone",
      headerName: "Phone number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1.5,
    },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "ZipCode", flex: 0.5 },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Referance"
      />
      <Box
        m="30px 0 0 0"
        height="100vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
