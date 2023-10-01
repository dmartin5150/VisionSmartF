

const setDocStatus = async (FIN:string,docType:string, docStatus: string)=> {
      const response = await fetch("http://localhost:5002/updateDocs", {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({'FIN': FIN, 'docType': docType, 'docStatus':docStatus})
      });
  };

  export default setDocStatus;






