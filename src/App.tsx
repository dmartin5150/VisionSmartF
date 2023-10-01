import React from 'react';
import PatientData from './components/patientData/PatientData';
import DocumentStatus from './components/documentsStatus/DocumentStatus';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='patient_summary'>
        <PatientData />
        <DocumentStatus />
      </div>
    </div>
  );
}

export default App;
