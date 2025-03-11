function Tablecompo() {
    const records = {
      body: (callback) => [
        // your data here
      ].map(callback)
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
                  {/* your action buttons here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Tablecompo;