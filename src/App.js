import React from "react";
import "./App.css";

import { AgGridReact } from "ag-grid-react";
import MoodEditor from "./moodEditor.jsx";
import MoodRenderer from "./moodRenderer.jsx";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

function App() {
  const [columnDefs] = React.useState([
    {
      headerName: "Make",
      field: "make"
    },
    {
      headerName: "Model",
      field: "model"
    },
    {
      headerName: "Price",
      field: "price"
    },
    {
      headerName: "Mood",
      field: "mood",
      cellEditor: "moodEditor",
      cellRenderer: "moodRenderer",
      editable: true
    }
  ]);

  const [rowData] = React.useState([
    {
      make: "Toyota",
      model: "Celica",
      price: 35000,
      mood: "Happy"
    },
    {
      make: "Ford",
      model: "Mondeo",
      price: 32000,
      mood: ""
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000,
      mood: ""
    }
  ]);

  const [frameworkComponents] = React.useState({
    moodRenderer: MoodRenderer,
    moodEditor: MoodEditor
  });

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "300px",
        width: "800px"
      }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        frameworkComponents={frameworkComponents}
      ></AgGridReact>
    </div>
  );
}

export default App;
