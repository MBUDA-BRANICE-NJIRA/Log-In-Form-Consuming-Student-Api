import React from "react";
import DataTable from "react-data-table-component";

function Table() {
  const columns = [
    {
      FirstName: "Name",
      selector: (row) => row.Name,
    },
    {
      LastName: "lastName",
      selector: (row) => row.lastName,
    },
    {
      Gender: "Gender",
      selector: (row) => row.Gender,
    },
    {
      Action: "Action",
      selector: (row) => row.Action,
    },
  ];
  const data = [
    {
      id: 1,
      Name: "",
      lastName: "",
      Gender: "",
      Action: "",
    },
  ];
  return (
    <div className="container">
      <DataTable columns={columns}
                 data={data}></DataTable>
    </div>
  );
}

export default Table;
