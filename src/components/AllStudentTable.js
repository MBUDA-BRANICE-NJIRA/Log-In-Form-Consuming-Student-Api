function Tablecompo() {
    const records = {
      body: (callback) => [
        // your data here
      ].map(callback)
    };
  
    const handleEdit = (id) => {
      // your edit logic here
      console.log(`Edit button clicked for id: ${id}`);
    };
  
    const handleDelete = (id) => {
      // your delete logic here
      console.log(`Delete button clicked for id: ${id}`);
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
  
  export default Tablecompo;