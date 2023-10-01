import React from 'react';
import './App.css';
import { PatientDemo } from './components/patientData/PatientData';
import { DocStatus } from './components/documentsStatus/DocumentStatus';
import Patient from './components/Patient/Patient';

const patientDemo: PatientDemo = {
  patientName:'Seamless Apple',
  FIN: '1111111',
  MRN: '1111111'
}

const patientDocStatus:DocStatus[] =[
  {docType:'Isolation',docStatus: 'Not Complete'},
  {docType:'Falls',docStatus: 'Complete'}
]


type PatientSummary = {
  patDemo:PatientDemo,
  patStatus:DocStatus[]
}

const patSummary:PatientSummary[] = [
  {patDemo:patientDemo, patStatus:patientDocStatus}
]

function App() {
  return (
    <div className="App">
    {
      patSummary.map((patient, idx) => {
        return <Patient patientDemo={patient.patDemo} patientDocStatus={patient.patStatus} key={idx}/>
      })
    }
    </div>
  );
}

export default App;
