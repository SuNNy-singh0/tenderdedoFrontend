import React, { useEffect, useState } from 'react'
import Menubar from './Menubar';
import tenderapi from './service/tenderapi';
function Legalcheck() {
  const [id,setid] = useState('');
  const [data, setdata] = useState({})
  const [data2,setdata2] = useState([])
  const [backup,setbackup] = useState({
    tenderid:'',
    contractorid:'',
    username:'',
    contractorname:'',
    userphoneno:'',
    contractorphoneno:'',
    budget:'',
    userfile:'',
    contractorfile:'',
    contractorgst:''
  })
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
          const res = await tenderapi.getlegal();
          setdata2(res.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }, []);
    const submit2 = async (e)=>{
      e.preventDefault();
      if (id2) {
          try {
            const res = await tenderapi.getlegalbyid(id2);
            setdata2(res.data);
          } catch (error) {
            console.log(error);
          }
        }
      }
      const reject = async (contractorId, email, tenderId) => {
        try {
          const [legalResponse, tenderResponse] = await Promise.all([
            tenderapi.getlegalbycontractorid(contractorId),
            tenderapi.getTenderbyid(tenderId)
          ]);
      
          const { data: legalData } = legalResponse;
          const { data: tenderData } = tenderResponse;
          console.log(legalResponse);
          const temp = tenderData.id;
          const Contract = legalData.contractorid;
          const uname = tenderData.name;
          const cname = legalData.name;
          console.log(uname);
          await setbackup({
            tenderid: temp,
            contractorid: Contract,
            username: uname,
            contractorname: cname,
            userphoneno: tenderData.phoneno,
            contractorphoneno: legalData.phoneno,
            budget: tenderData.projectamount,
            userfile: tenderData.filepath,
            contractorfile: legalData.filepath,
            contractorgst: legalData.gstno // Assuming Contractorgst should be from legalData
          });
          console.log(backup);
          await tenderapi.createbackup(backup)
          
        } catch (error) {
          alert(error);
        }
      };
  return (
    <>
    <Menubar></Menubar>
    <h1 className='head'>legal Work Bench </h1>
    <form onSubmit={submit} className='tender'>
        <label>enter TenderId</label>
        <input type='number' onChange={handlechange} value={id}></input>
        <button type='submit' className='btn5 btn6'>getTender</button>
    </form>
    {/* <section> */}
    {/* <table className='table'>
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
    <form onSubmit={submit2} className='tender' >
        <label>enter id</label>
        <input type='number' onChange={handlechange2} value={id2}></input>
        <button className='btn5 btn6'>Sortby Tenderid</button>
    </form>
    </section>
    <section>
        <h2 className='head'>Contractor perposal list</h2>
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
              <th>Close the Case</th>
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
              
                <td><button onClick={()=>reject(e.contractorid,e.emailid,e.tenderid)}>Close File</button></td>
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

export default Legalcheck