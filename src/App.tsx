import React, {useEffect,useState} from 'react';
import './App.css';
import { PatientDemo } from './components/patientData/PatientData';
import { DocStatus } from './components/documentsStatus/DocumentStatus';
import Patient from './components/Patient/Patient';
import getAllPatientInfo from './utilities/fetchdata/getPatientData';
import setDocStatus from './utilities/sendData/setDocStatus';

const patientDemo: PatientDemo = {
  patientName:'Seamless Apple',
  FIN: '1111111',
  MRN: '1111111'
}

const patientDocStatus:DocStatus[] =[
  {docType:'Isolation',docStatus: 'Not Complete'},
  {docType:'Falls',docStatus: 'Complete'}
]


export type PatientSummary = {
  patDemo:PatientDemo,
  patStatus:DocStatus[]
}

export const patSummary:PatientSummary[] = [
  {patDemo:patientDemo, patStatus:patientDocStatus}
]

function App() {
  const [curData, setCurData] = useState<PatientSummary[]>()

  useEffect(() => {
    async function getAllPatientData() {
      const curPatientSummary:PatientSummary[] = await getAllPatientInfo()
      console.log(curPatientSummary)
      setCurData(curPatientSummary)
    }
    getAllPatientData()
  },[])


  const handleDataChanged = (FIN:string,docType:string,docStatus:string):void => {
    setDocStatus(FIN,docType,docStatus)
  }

  return (
    <div className="App">
    {curData && 
      curData.map((patient, idx) => {
        return <Patient 
        patientDemo={patient.patDemo} 
        patientDocStatus={patient.patStatus} 
        key={idx}
        updateData={handleDataChanged}
        />
      })
    }
    </div>
  );
}

export default App;
