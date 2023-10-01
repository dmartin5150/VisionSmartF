import React, {useState,useEffect} from "react";
import "./DocumentStatus.css"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'



const options = [
    'Complete', 'Not Complete'
  ];
  const defaultOption = options[0];

export type DocStatus = {
    docType:string;
    docStatus:string
}

interface DocumentStatusProps  {
    status: DocStatus
}



const DocumentStatus: React.FC<DocumentStatusProps> = ({status}) => {
    const [curOption,setcurOption] = useState('Complete')
    const {docType, docStatus} = status


    useEffect(() => {
        setcurOption(docStatus)
    },[])


    const onSelect = (option:any) => {
        setcurOption(option.value)
    }


    return (
        <div className='doc-summary'>
            <div className='doc-status'>{docType}:</div>
            <div className='doc-dropdown'>
                <Dropdown options={options} onChange={onSelect} value={curOption} placeholder="Select an option" />
            </div>

        </div>
    )
}
export default DocumentStatus