import React, { useState } from 'react'
import Menubar from './Menubar'
import tenderapi from './service/tenderapi';
import Footer from './Footer';
function Tenderform() {
  const [data, setdata] = useState({
    name: "",
    emailid: "",
    projectamount: "",
    duration: "",
    description: "",
    phoneno: "",
    location: "",
  });
  const [filedata, setfiledata] = useState(null);
  const inputchange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const handlefile = (e) => {
    setfiledata(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('name', data.name);
    formdata.append('emailid', data.emailid);
    formdata.append('projectamount', data.projectamount);
    formdata.append('description', data.description)
    formdata.append('phoneno', data.phoneno)
    formdata.append('duration', data.duration);
    formdata.append('location', data.location)
    formdata.append('file', filedata)
    
    const jsonData = JSON.stringify(data);
    formdata.append('Data', jsonData);
    console.log(formdata)
   
    try {
      
      const response = await tenderapi.createTender(formdata);
      alert("your tender work upload Sucessfully goes for approval")
    } catch (error) {
      console.error('Error creating tender:', error);
    }
  };
  return (
    <>
      <Menubar />
      <section className='formwork'>
        <h1>Tender Uploading Form</h1>
        <form className='tender'  onSubmit={handleSubmit}>
          <label>enter  name :</label>
          <input type='text'  name='name'required value={data.name} onChange={inputchange}></input>
          <br></br>
          <label>Enter emailid :</label>
          <input type='email' name='emailid' required  value={data.emailid} onChange={inputchange}></input>
          <br></br>
          <label>Enter  project amount :</label>
          <input type='text' name='projectamount' required value = {data.projectamount} onChange={inputchange}></input>
          <br></br>
          <label>Enter  duration :</label>
          <input type='text' name='duration' required value={data.duration} onChange={inputchange}></input>
          <br>
          </br>
          <label>Enter  description :</label>
          <textarea value={data.description} required name='description' onChange={inputchange}></textarea>
          <br></br>
          <label>Enter  phoneno :</label>
          <input type='number' value={data.phoneno} required name='phoneno' onChange={inputchange}></input>
          <br></br>
          <label>Enter  Location :</label>
          <input type='text' value={data.location} required name='location' onChange={inputchange}></input>
          <br></br>
          <label>Upload project Requirement file : </label>
          <input type='file' onChange={handlefile} required></input>
          <br></br>
          <button type='submit' className='btn5'>Submit</button>
        </form>
      </section>
      <section>
      <Footer/>
      </section>
    </>
  )
}

export default Tenderform
