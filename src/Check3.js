import React, { useEffect, useState } from 'react'
import tenderapi from './service/tenderapi';
import Menubar from './Menubar';

function Check3() {
  const [id,setid] = useState('');
  const [data, setdata] = useState({})
  const [data2,setdata2] = useState([])
  const handlechange =(e)=>{
    const {value}=e.target;
    setid(value);
  };
  const [id2,setid2] = useState('');
  const handlechange2 =(e)=>{
    const {value}=e.target;
    setid2(value);
  };
  const submit = async (e)=>{
    e.preventDefault();
    if (id) {
        try {
          const res = await tenderapi.getTenderbyid(id);
          setdata(res.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    useEffect((id) => {
      async function fetchData(id) {
        try {
          const res = await tenderapi.getTenderbyid(id);
          setdata(res.data);
        } catch (error) {
          console.log(error);
        }
      }
      if (id) {
          fetchData();
        }
    }, [id]);
    useEffect(() => {
      async function fetchData() {
        try {
          const res = await tenderapi.getphase3();
          setdata2(res.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }, []);
    const Forward = async (id, contractorId, Emailid) => {
      try {
          const selectedTender = data2.find((tender) => tender.tenderid === id && tender.contractorid == contractorId);
          if (!selectedTender) {
            console.error('Selected tender not found:', id);
            return;
          }
          const { tenderid, contractorid, name, emailid, phoneno, gstno, filepath, experience } = selectedTender;
          const requestBody = { tenderid, contractorid, name, emailid, phoneno, gstno, filepath, experience };
          await tenderapi.createlegal(requestBody);
          const body = `We are pleased to inform you that your proposal for the recently applied tender has been selected by Tenderdedo Firm. Congratulations on this significant achievement!

          Your proposal stood out among the submissions we received, demonstrating your expertise, commitment, and understanding of the project requirements. We are confident that your capabilities will contribute greatly to the success of the project.
          
          As the next step, our legal team will be contacting you shortly to initiate the necessary contractual procedures. They will provide you with all the details and guide you through the process to ensure a smooth and efficient collaboration.
          
          We are excited about the opportunity to work with you and are looking forward to a productive partnership. Should you have any questions or require further information, please do not hesitate to reach out to us.
          
          Once again, congratulations on your successful proposal. We anticipate a fruitful collaboration ahead.
          
          Best regards,`
          tenderapi.send(Emailid,body);
          alert("Your tender forwarded successfully");
        } catch (error) {
          alert("An error occurred while forwarding the tender. Please check the console for details.");
        }
    };
    const submit2 = async (e)=>{
      e.preventDefault();
      if (id2) {
          try {
            const res = await tenderapi.getphase3byid(id2);
            setdata2(res.data);
          } catch (error) {
            console.log(error);
          }
        }
      }
      const reject = async (tenderId,email)=>{
        try{
          const response = await tenderapi.deletephase3(tenderId);
          alert("deleted SucessFully");
          const updatedContractors = await tenderapi.getphase3();
          const body = `I hope this email finds you well.

          I regret to inform you that after careful evaluation, your proposal has not advanced past the technical round following the successful completion of the initial round in our selection process.
          
          While your proposal demonstrated certain strengths and merits during the initial round, the technical evaluation highlighted specific areas where it did not meet our project requirements or standards. As a result, we are unable to proceed further with your proposal at this time.
          
          We understand that this news may be disappointing, and we sincerely appreciate the effort and time you dedicated to preparing and submitting your proposal. Your interest in collaborating with us is valued, and we encourage you to continue exploring future opportunities with Tenderdekho.
          
          If you would like further feedback or clarification on the evaluation of your proposal, please do not hesitate to reach out to us. We are more than willing to provide detailed insights to assist you in enhancing future submissions.`
          tenderapi.send(email,body)
          // Update state with the new list of contractors
          setdata2(updatedContractors.data);
         }
        catch(error){
          alert(error);
        }
      }
  return (
    <>
    <Menubar></Menubar>
    <h1 className='head'>proposal check work bench phase 3: Selection Round</h1>
    <form onSubmit={submit} className='tender'>
        <label>enter Tender Id:</label>
        <input type='number' onChange={handlechange} value={id}></input>
        <button type='submit' className='btn5 btn6' >getTender</button>
    </form>
    {/* <section>
    <table className='table'>
          <thead>
            <tr>
            <th>S.no</th>
              <th>Tender id</th>
              <th>name</th>
              <th>description</th>
              <th>projectamount</th>
              <th>duration</th>
              <th>Location</th>
              <th>File</th>
              
            </tr>
          </thead>
          <tbody>
               <tr>
                <td>{1}</td>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.projectamount}</td>
                <td>{data.duration}</td>
                <td>{data.location}</td>
                <td>  <a href={`/api/files/${data.filepath}`} target="_blank" rel="noopener noreferrer">Open PDF</a></td>
              </tr>
          </tbody>

        </table>
    </section> */}
    <section className='tenderbox'>
    <table className='table'>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Columm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tenderid</td>
            <td>{data.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{data.description}</td>
          </tr>
          <tr>
            <td>ProjectAmount</td>
            <td>{data.projectamount}</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>{data.duration}year</td>
          </tr>
          <tr>
            <td>Project Location</td>
            <td>{data.location}</td>
          </tr>
          <tr>
            <td>Work File</td>
            <td><a href={data.filepath}>See File</a></td>
          </tr>
        </tbody>
        </table> 
    </section>
 
    <section>
    <form onSubmit={submit2} className='tender'>
        <label>enter id</label>
        <input type='number' onChange={handlechange2} value={id2}></input>
        <button className='btn5 btn6'>Sort it</button>
    </form>
    </section>
    <section>
        <h2 className='head'>Contractor Selection list</h2>
        <table className='table'>
        <thead>
            <tr>
            <th>S.no</th>
              <th>Tender id</th>
              <th>Contractor id</th>
              <th>name</th>
              <th>emailid</th>
              <th>phoneno</th>
              <th>gstno</th>
              <th>experience</th>
              <th>File</th>
              <th>Forward</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((e, num) => (
              <tr key={num}>
                <td>{num+1}</td>
                <td>{e.tenderid}</td>
                <td>{e.contractorid}</td>
                <td>{e.name}</td>
                <td>{e.emailid}</td>
                <td>{e.phoneno}</td>
                <td>{e.gstno}</td>
                <td>{e.experience}</td>
                <td>  <a href={`/api/files/${e.filepath}`} target="_blank" rel="noopener noreferrer">Open PDF</a></td>
                <td><button onClick={() =>Forward(e.tenderid,e.contractorid,e.emailid)}>Forward</button></td>
                <td><button onClick={()=>reject(e.contractorid,e.emailid)}>Reject</button></td>
              </tr>
            ))}
          </tbody>
          </table>
    </section>
    <section>
    <div className='copyright2'>
     All right reserved to tender dedo
    </div>
    </section>
    </>
  )
}

export default Check3