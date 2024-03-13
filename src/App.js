import { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './App.css';
 
function App() {
 
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=12')
      .then(res => res.json())
      .then(result => setRowData(result.data));
  }, []);

   
    
    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
      { field: "email" },
      { field: "first_name" },
      { field: "last_name" },
      { field: "electric" }
    ]);


  //
 
 /* useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=12')
      .then(res => res.json())
      .then(result => setRowData(result.data));
  }, []);*/
 
  const avatarFormatter = ({ value }) => {
    return <img src={value} width="50px" height="50px" alt="images"/>
  }
 
  return (
 
    <div className="App">
         
      <h2>ReactJS AG Grid fetch json</h2>
      <div className="ag-theme-alpine ag-style">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
      />
      </div>
    </div>
  );
}
 
export default App;