import React, { useState } from 'react'
import Menubar from './Menubar'
import tenderapi from './service/tenderapi';
import Footer from './Footer';
function Contractorfrom() {
  const[contract,setcontract]=useState({
    tenderid:"",
    name:"",
    emailid:"",
    gstno:"",
    phoneno:"",
    experience:"",
  })
  const [filedata, setfiledata] = useState(null);
  const inputchange = (e) => {
    const { name, value } = e.target;
    setcontract({ ...contract, [name]: value });
  };
  const handlefile = (e) => {
    setfiledata(e.target.files[0]);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', contract.name);
    formdata.append('emailid', contract.emailid);
    formdata.append('phoneno', contract.phoneno);
    formdata.append('tenderid',contract.tenderid);
    formdata.append('gstno',contract.gstno)
    formdata.append('experience',contract.experience)
    formdata.append('file', filedata)
    
    const jsonData = JSON.stringify(contract);
    formdata.append('Data', jsonData);
    console.log(formdata)
    try {
      
      const response = await tenderapi.createContractor(formdata);
      alert("your proposal for tenderwork upload sucessfully and goes for verification")
    } catch (error) {
      console.error('Error creating tender:', error);
    }
  };
  return (
    <>
    <Menubar></Menubar>
    <section className='formwork'>
        <h1>Contractor Form</h1>
    <form onSubmit={handleSubmit} className='tender'>
        <label>Enter the Tenderid:</label>
        <input type='text' name='tenderid' value={contract.tenderid} onChange={inputchange}></input>
        <br></br>
        <label>Enter the name:</label>
        <input type='text' name='name' value={contract.name} onChange={inputchange}></input>
        <br></br>
        <label>Enter the emailid:</label>
        <input type='text' name='emailid' value={contract.emailid} onChange={inputchange}></input>
        <br></br>
        <label>Enter the gstno:</label>
        <input type='text' name='gstno' value={contract.gstno} onChange={inputchange}></input>
        <br></br>
        <label>Enter the Phone no:</label>
        <input type='number' name='phoneno' value={contract.phoneno} onChange={inputchange}></input>
        <br></br>
        <label>Enter the experience:</label>
        <input type='text' name='experience' value={contract.experience} onChange={inputchange}></input>
        <br></br>
        <label>Upload Proposal File:</label>
        <input type='file' onChange={handlefile}></input>
        <br></br>
        <button type='Submit' className='btn5'>Submit</button>
    </form>
    </section>
    <section>
      <Footer></Footer>
    </section>
    </>
  )
}

export default Contractorfrom