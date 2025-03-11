import React from "react";



function Tablecompo() {
  const records = {
    body: (callback) => [
    
    ].map(callback)
  };
  
  return (
    <div className="container">
        <div className="AllStudents">
            <h1>All Students Details</h1>
            <table className="table-border">
                <thead>
                    <tr>Firstname</tr>
                    <tr>Lastname</tr>
                    <tr>Gender</tr>
                    <tr>Action</tr>
                </thead>

                <tbody>
                    {records.body((r, i) =>(
                        <tr key={i}>
                            <td>{r.firstname}</td>
                            <td>{r.lastname}</td>
                            <td>{r.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
    </div>
  );
}

export default Tablecompo;
