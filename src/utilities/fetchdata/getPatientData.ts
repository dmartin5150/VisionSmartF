
import { PatientSummary } from "../../App";
import { patSummary } from "../../App";

const getAllPatientInfo = async ()=> {
      const response = await fetch("http://localhost:5002/allPatientInfo", {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response) {
        const data: PatientSummary[] = await response.json();
        console.log('data', data)
        return data
      }
      return patSummary
  };

  export default getAllPatientInfo;