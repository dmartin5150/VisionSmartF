import React from 'react';
import PatientData from './components/patientData/PatientData';
import DocumentStatus from './components/documentsStatus/DocumentStatus';
import './App.css';
import { PatientDemo } from './components/patientData/PatientData';
import { DocStatus } from './components/documentsStatus/DocumentStatus';

const patientDemo: PatientDemo = {
  patientName:'Seamless Apple',
  FIN: '1111111',
  MRN: '1111111'
}

const patientDocStatus:DocStatus[] =[
  {docType:'Isolation',docStatus: 'Not Complete'},
  {docType:'Falls',docStatus: 'Complete'}
]





function App() {
  return (
    <div className="App">
      <div className='patient_summary'>
        <PatientData patient={patientDemo}/>
        {patientDocStatus.map((status,idx) => {
          return <DocumentStatus status={status} key={idx} />
        })
      }
      </div>
    </div>
  );
}

export default App;
