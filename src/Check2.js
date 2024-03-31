import React, { useEffect, useState } from 'react'
import Menubar from './Menubar'
import tenderapi from './service/tenderapi';
function Check2() {
  const [id, setid] = useState('');
  const [data, setdata] = useState({})
  const [data2, setdata2] = useState([])
  const handlechange = (e) => {
    const { value } = e.target;
    setid(value);
  };
  const [id2, setid2] = useState('');
  const handlechange2 = (e) => {
    const { value } = e.target;
    setid2(value);
  };
  const submit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        const res = await tenderapi.getTenderbyid(id);
        setdata(res.data);
        console.log(data.filepath);
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
        const res = await tenderapi.getphase2();
        setdata2(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const Forward = async (id, contractorId, emailid) => {
    try {
      const selectedTender = data2.find((tender) => tender.tenderid === id && tender.contractorid == contractorId);
      if (!selectedTender) {
        console.error('Selected tender not found:', id);
        return;
      }
      const { tenderid, contractorid, name, emailid, phoneno, gstno, filepath, experience } = selectedTender;
      const requestBody = { tenderid, contractorid, name, emailid, phoneno, gstno, filepath, experience };
      await tenderapi.createphase3(requestBody);
      const body = `I am pleased to inform you that you have successfully passed Technical Round 2 for the applied project with Tenderdekho.
          
          Your expertise and proficiency demonstrated throughout the evaluation process have been commendable. Your commitment to delivering high-quality work aligns perfectly with our project requirements and expectations.
          
          We are excited about the prospect of collaborating with you further and are confident that your skills and experience will greatly contribute to the success of the project.
          
           Our team will be in touch shortly to provide you with detailed instructions and information regarding the upcoming phases of the project.
          
          Once again, congratulations on this achievement, and we look forward to a fruitful collaboration ahead.
          
          Best regards,`
      tenderapi.send(emailid, body)
      console.log('Tender forwarded successfully');
      alert("Your tender forwarded successfully");
    } catch (error) {
      console.error('Error forwarding tender:', error);
      alert("An error occurred while forwarding the tender. Please check the console for details.");
    }
  };
  const submit2 = async (e) => {
    e.preventDefault();
    if (id2) {
      try {
        const res = await tenderapi.getphase2byid(id2);
        setdata2(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  const reject = async (tenderId, email) => {
    try {
      const response = await tenderapi.deletephase2(tenderId);
      alert("deleted SucessFully");
      const updatedContractors = await tenderapi.getphase2();
      const body = `I hope this email finds you well.

          I regret to inform you that after careful evaluation, your proposal has not advanced past the technical round following the successful completion of the initial round in our selection process.
          
          While your proposal demonstrated certain strengths and merits during the initial round, the technical evaluation highlighted specific areas where it did not meet our project requirements or standards. As a result, we are unable to proceed further with your proposal at this time.
          
          We understand that this news may be disappointing, and we sincerely appreciate the effort and time you dedicated to preparing and submitting your proposal. Your interest in collaborating with us is valued, and we encourage you to continue exploring future opportunities with Tenderdekho.
          
          If you would like further feedback or clarification on the evaluation of your proposal, please do not hesitate to reach out to us. We are more than willing to provide detailed insights to assist you in enhancing future submissions.`
      tenderapi.send(email, body)
      // Update state with the new list of contractors
      setdata2(updatedContractors.data);
    }
    catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <Menubar></Menubar>
      <h1 className='head'>proposal check work bench phase 2: technical round</h1>
      <form onSubmit={submit} className='tender' >
        <label>enter Tender Id:</label>
        <input type='number' onChange={handlechange} value={id}></input>
        <button type='submit' className='btn5 btn6'>getTender</button>
      </form>
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
              <td>
    {data.filepath && <a href={data.filepath.substring(3)} target="_blank">see file</a>}
  </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <form onSubmit={submit2} className='tender' >
          <label>enter TenderId:</label>
          <input type='number' onChange={handlechange2} value={id2}></input>
          <button className='btn5 btn6'>Sort it</button>
        </form>
      </section>
      <section>
        <h2>Contractor perposal list</h2>
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
                <td>{num + 1}</td>
                <td>{e.tenderid}</td>
                <td>{e.contractorid}</td>
                <td>{e.name}</td>
                <td>{e.emailid}</td>
                <td>{e.phoneno}</td>
                <td>{e.gstno}</td>
                <td>{e.experience}</td>
                <td>
  {e.filepath && <a href={e.filepath.substring(3)} target="_blank">Download file</a>}
</td>
                <td><button onClick={() => Forward(e.tenderid, e.contractorid, e.emailid)}>Forward</button></td>
                <td><button onClick={() => reject(e.contractorid, e.emailid)}>Reject</button></td>
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

export default Check2