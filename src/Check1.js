import React, { useEffect, useState } from 'react'
import Menubar from './Menubar'
import tenderapi from './service/tenderapi';
import Footer from './Footer';
import PdfViewer from './PdfViewer';
function Check1() {
  const [id, setid] = useState('');
  const handlechange = (e) => {
    const { value } = e.target;
    setid(value);
  };
  const [id2, setid2] = useState('');
  const handlechange2 = (e) => {
    const { value } = e.target;
    setid2(value);
  };

  const [data, setdata] = useState({})
  const [data2, setdata2] = useState([])
  useEffect(() => {
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
        const res = await tenderapi.getContractor();
        setdata2(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const submit2 = async (e) => {
    e.preventDefault();
    if (id2) {
      try {
        const res = await tenderapi.getContractorbyid(id2);
        setdata2(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  const submit = async (e) => {
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
  const Forward = async (id, contractorId, emailid) => {
    try {
      const selectedTender = data2.find((tender) => tender.tenderid === id && tender.contractorid === contractorId);
      if (!selectedTender) {
        console.error('Selected tender not found:', id);
        return;
      }
      const { tenderid, contractorid, name, emailid, phoneno, gstno, filepath, experience } = selectedTender;
      const requestBody = { tenderid, contractorid, name, emailid, phoneno, gstno, filepath, experience };
      console.log('Request Body:', requestBody);
      await tenderapi.createphase2(requestBody);
      const body = `I hope this email finds you well.

            I am pleased to inform you that your profile has successfully passed the initial verification round with Tenderdekho. Congratulations on reaching this milestone!
            
            Your credentials and qualifications have met our standards, demonstrating your capability to potentially collaborate with us on upcoming projects. We appreciate the effort you have put into completing the verification process and providing the necessary documentation.
            
            Moving forward, we will keep your profile in consideration for future project opportunities. Should there be any further steps required or updates regarding potential projects, we will reach out to you promptly.
            
            Thank you for your interest in working with Tenderdekho. We value your partnership and look forward to the possibility of collaborating with you in the future.
            
            If you have any questions or require additional information, please feel free to contact us at any time.`
      tenderapi.send(emailid, body)
      console.log('Tender forwarded successfully');
      alert("Your tender forwarded successfully");
    } catch (error) {
      console.error('Error forwarding tender:', error);
      alert("An error occurred while forwarding the tender. Please check the console for details.");
    }
  };
  const reject = async (tenderId, emailid) => {
    try {
      const response = await tenderapi.deletecontractorbyid(tenderId);
      alert("deleted SucessFully");
      const body = `I hope this email finds you well.

          I regret to inform you that after careful consideration and evaluation of all submitted proposals, your proposal for your interest project has been regrettably rejected by Tenderdekho.
          
          Please know that this decision was not made lightly, and our team thoroughly reviewed each proposal against the project requirements and evaluation criteria. While your proposal showed promise, we ultimately selected another submission that better aligned with our project objectives and criteria.
          
          We genuinely appreciate the time, effort, and resources you invested in preparing and submitting your proposal. Your interest in collaborating with us is valued, and we encourage you to continue exploring future opportunities with Tenderdekho.
          
          Should you require any feedback or further clarification regarding the rejection, please do not hesitate to reach out to us. We are more than willing to provide insights to help you improve future proposals.
          
          Thank you once again for your interest in working with Tenderdekho. We wish you the best of luck with your future endeavors, and we hope to have the opportunity to collaborate with you on other projects in the future.
          
          Best regards`;
      tenderapi.send(emailid, body)
      const updatedContractors = await tenderapi.getContractor();

      // Update state with the new list of contractors
      setdata2(updatedContractors.data);

    }
    catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <Menubar />
      <h1 className='head'>Propsal Check work Bench 1</h1>

      <form onSubmit={submit} className='tender'>
        <label>enter Tenderid:</label>
        <input type='number' onChange={handlechange} value={id}></input>
        <button type='submit' className='btn5 btn6'>getTender</button>
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
              <td>
                {data.filepath && <a href={data.filepath.substring(3)} target="_blank">see file</a>}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <form onSubmit={submit2} className='tender' >
          <label>enter id</label>
          <input type='number' onChange={handlechange2} value={id2}></input>
          <button className='btn5 btn6'>Sort it</button>
        </form>

      </section>

      <section>
        <h2 className='head'>Contractor Request</h2>
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
                  {e.filepath && (
                    <a href={e.filepath.substring(3)} target="_blank">
                      See File
                    </a>
                  )}
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

export default Check1