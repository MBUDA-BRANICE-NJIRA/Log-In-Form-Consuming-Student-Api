import axios from "axios";
import React ,{useEffect, useState} from "react";

export default function AllStudentTable() {
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(false); // 👈 Add refresh state

  useEffect(() => {
    fetchStudents();
  }, [refresh]); // 👈 Fetch students when refresh changes

  const fetchStudents = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:4000/api/students/getAllStudent", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudents(response.data);
    } catch (error) {
      toast.error("Failed to fetch students", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // Function to refresh student list
  const handleUpdate = () => {
    setRefresh(prev => !prev); // 👈 Trigger a re-fetch
  };


  
    return (
      <div className="container">
        <h1>All Students Details</h1>
        <table className="table-border">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
  
          <tbody>
          {/* This the records body section */}
          
            {records.body((r, i) => (
              <tr key={i}>
                <td>{r.firstname}</td>
                <td>{r.lastname}</td>
                <td>{r.gender}</td>
                
                <td className="action-column">
                  <button className="edit-button" onClick={() => handleEdit(r.id)}>
                    Edit
                  </button>

                  <button className="delete-button" onClick={() => handleDelete(r.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
