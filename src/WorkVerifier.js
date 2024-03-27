import React, { useEffect, useState } from 'react'
import Menubar from './Menubar'
import tenderapi from './service/tenderapi'
function WorkVerifier() {
  const [data, setdata] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await tenderapi.getTender();
        setdata(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const Forward = async (tenderId,emailid) => {
    try {
      const selectedTender = data.find((tender) => tender.id === tenderId);
      if (!selectedTender) return;
      const { id, name, description, duration, location, file ,projectamount} = selectedTender;
      const requestBody = { id, name, description, duration, location, filepath : file, projectamount };
      await tenderapi.createVerifiedTender(requestBody);
      const body = `I am delighted to inform you that your work upload request has been successfully accepted by Tenderdekho, our esteemed company.

      We greatly appreciate your initiative and effort in submitting your work for consideration.
      Should you have any questions or require further assistance regarding the upload process or any other matter, please feel free to reach out to us. We are here to support you every step of the way.
      Once again, congratulations on the acceptance of your work upload request`
      tenderapi.send(emailid,body)
      alert("Your tender forwarded successfully");
    } catch (error) {
      console.error('Error creating tender:', error);
    }
  };
  const reject = async (tenderId,emailid)=>{
    try{
      const response = await tenderapi.deletetender(tenderId);
      const body = `
      I hope this email finds you well.
      
      I regret to inform you that we are unable to proceed with your tender uploading request at this time. After careful consideration and review, we have determined that there are certain reasons that prevent us from accepting your tender.
      
      For detailed information regarding the reasons for the rejection, please do not hesitate to contact us directly. Our team will be more than happy to provide you with the necessary clarification and address any concerns you may have`
       tenderapi.send(emailid,body)
      alert("deleted SucessFully");
      
    setdata(prevData => prevData.filter(tender => tender.id !== tenderId));
    }
    catch(error){
      alert(error);
    }
  }
  return (
    <>
      <Menubar></Menubar>
      <section>
        <h1 >Tender Data</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Tender id</th>
              <th>name</th>
              <th>description</th>
              <th>projectamount</th>
              <th>duration</th>
              <th>email</th>
              <th>Location</th>
              <th>File</th>
              <th>option1</th>
              <th>option2</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, num) => (
              <tr key={num}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.description}</td>
                <td>{e.projectamount}</td>
                <td>{e.duration}</td>
                <td>{e.emailid}</td>
                <td>{e.location}</td>
                <td>  <a href={e.filepath} target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                <td><button onClick={()=>reject(e.id,e.emailid)}>Reject</button></td>
                <td><button onClick={()=>Forward(e.id,e.emailid)}>Forward</button></td>
              </tr>
            ))}
          </tbody>

        </table>
      </section>
    </>
  )
}

export default WorkVerifier