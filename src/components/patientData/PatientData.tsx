import React from "react";
import './PatientData.css'

export type PatientDemo = {
    patientName:string;
    FIN:string;
    MRN:string
}

interface PatientDataProps {
    patient:PatientDemo
}


const PatientData:React.FC<PatientDataProps> = ({patient}) => {
    const {patientName,FIN,MRN} = patient
    return (
        <div>
            <div>
                <div>Name - {patientName}</div>
                <div>FIN - {FIN}</div>
                <div>MRN - {MRN}</div>
            </div>
        </div>
    )
}
export default PatientData