import React from "react";
import DocumentStatus from "../documentsStatus/DocumentStatus";
import PatientData from "../patientData/PatientData";
import { PatientDemo } from "../patientData/PatientData";
import { DocStatus } from "../documentsStatus/DocumentStatus";
import './Patient.css'

interface PatientProps  {
    patientDemo: PatientDemo,
    patientDocStatus:DocStatus[]
}


const Patient: React.FC<PatientProps> = ({patientDemo, patientDocStatus}) => {
    return (
        <div className='patient_summary'>
            <PatientData patient={patientDemo}/>
            {patientDocStatus.map((status,idx) => {
            return <DocumentStatus status={status} key={idx} />
            })
        }
      </div>
    )
}
export default Patient