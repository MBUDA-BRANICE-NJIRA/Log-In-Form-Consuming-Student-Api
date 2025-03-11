// import React from "react";
// import { Table } from "react-bootstrap";
// // import DataTable from "react-data-table-component";

// function Tablecompo() {
//   // const columns = [
//   //   {
//   //     name: "Name",
//   //     selector: (row) => row.Name,
//   //   },
//   //   {
//   //     name: "lastName",
//   //     selector: (row) => row.lastName,
//   //   },
//   //   {
//   //     name: "Gender",
//   //     selector: (row) => row.Gender,
//   //   },
//   //   {
//   //     name: "Action",
//   //     selector: (row) => row.Action,
//   //   },
//   // ];
//   const data = [
//     {
//       id: 1,
//       Name: "edwi",
//       lastName: "Kimani",
//       Gender: "Malwe",
//       Action: "Esit",
//     },
//   ];
//   return (
//     <div className="container">
//      {data.map(items=>{
//       return(
//         <Table>
//           <thead>
//           <tr>
//             <th>id</th>
//             <th>Name</th>
//             <th>Lastname</th>
//             <th>Gender</th>
//             <th>action</th>
//           </tr>
//           </thead>
//           <tbody>
//           <tr>
//             <td>{items.id}</td>
//             <td>{items.Name}</td>
//             <td>{items.lastName}</td>
//             <td>{items.Gender}</td>
//             <td>{items.Action}</td>
//           </tr>
//           </tbody>
//         </Table>
//       );
//      })}
//     </div>
//   );
// }

// export default Tablecompo;
