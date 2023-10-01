import React from "react";
import DocumentStatus from "../documentsStatus/DocumentStatus";
import PatientData from "../patientData/PatientData";
import { PatientDemo } from "../patientData/PatientData";
import { DocStatus } from "../documentsStatus/DocumentStatus";
import './Patient.css'

interface PatientProps  {
    patientDemo: PatientDemo,
    patientDocStatus:DocStatus[],
    updateData:(FIN:string, docType:string,docStatus:string)=>void
}


const Patient: React.FC<PatientProps> = ({patientDemo, patientDocStatus, updateData}) => {
    return (
        <div className='patient_summary'>
            <PatientData patient={patientDemo}/>
            {patientDocStatus.map((status,idx) => {
            return <DocumentStatus FIN={patientDemo.FIN} status={status} key={idx} updateData={updateData}/>
            })
        }
      </div>
    )
}
export default Patient