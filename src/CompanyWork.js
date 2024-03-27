import React from 'react'
import WorkVerifier from './WorkVerifier';
import { useState } from 'react';
import Menubar from './Menubar';
import Check1 from './Check1';
import Check2 from './Check2';
import Check3 from './Check3';
import Legalcheck from './Legalcheck';
import Footer from './Footer';
import Slider from 'react-slick';
import Admin from './Admin';
function CompanyWork() {
  const [data, setdata] = useState({
    name: "",
    password: ""
  })
  const [data2, setdata2] = useState({
    name: "",
    password: ""
  })
  const [data3, setdata3] = useState({
    name: "",
    password: ""
  })
  const [data4, setdata4] = useState({
    name: "",
    password: ""
  })
  const [data5, setdata5] = useState({
    name: "",
    password: ""
  })
  const [data6, setdata6] = useState({
    name: "",
    password: ""
  })
  const [logged6, setlogged6] = useState(false);
  const [logged, setlogged] = useState(false);
  const [logged2, setlogged2] = useState(false);
  const [logged3, setlogged3] = useState(false);
  const [logged4, setlogged4] = useState(false);
  const [logged5, setlogged5] = useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const handlechange2 = (e) => {
    const { name, value } = e.target;
    setdata2({ ...data2, [name]: value });
  };
  const handlechange3 = (e) => {
    const { name, value } = e.target;
    setdata3({ ...data3, [name]: value });
  };
  const handlechange4 = (e) => {
    const { name, value } = e.target;
    setdata4({ ...data4, [name]: value });
  };
  const handlechange5 = (e) => {
    const { name, value } = e.target;
    setdata5({ ...data5, [name]: value });
  };
  const handlechange6 = (e) => {
    const { name, value } = e.target;
    setdata6({ ...data6, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    const lowername = data.name.toLowerCase();
    const lowerpassword = data.password.toLowerCase();
    if (lowername === 'sanjaykumar' && lowerpassword === 'neeraj420') {
      setlogged(true);
    }
    else {
      alert("wrong name or password check it again")
    }
  }
  const submit2 = (e) => {
    e.preventDefault();
    const lowername = data2.name.toLowerCase();
    const lowerpassword = data2.password.toLowerCase();

    if (lowername === 'rahul' && lowerpassword === 'tiger1234') {
      setlogged2(true);
    }
    else {
      alert("wrong name or password check it again")
    }
  }

  const submit3 = (e) => {
    e.preventDefault();
    const lowername = data3.name.toLowerCase();
    const lowerpassword = data3.password.toLowerCase();

    if (lowername === 'indumati' && lowerpassword === 'rashmi') {
      setlogged3(true);
    }
    else {
      alert("wrong name or password check it again")
    }
  }
  const submit4 = (e) => {
    e.preventDefault();
    const lowername = data4.name.toLowerCase();
    const lowerpassword = data4.password.toLowerCase();

    if (lowername === 'sonal' && lowerpassword === '987654') {
      setlogged4(true);
    }
    else {
      alert("wrong name or password check it again")
    }
  }
  const submit5 = (e) => {
    e.preventDefault();
    const lowername = data5.name.toLowerCase();
    const lowerpassword = data5.password.toLowerCase();

    if (lowername === 'deepak' && lowerpassword === 'coder') {
      setlogged5(true);
    }
    else {
      alert("wrong name or password check it again")
    }
  }
  const submit6 = (e) => {
    e.preventDefault();
    const lowername = data6.name.toLowerCase();
    const lowerpassword = data6.password.toLowerCase();

    if (lowername === 'imperialx' && lowerpassword === 'bloodyfang') {
      setlogged6(true);
    }
    else {
      alert("wrong name or password check it again")
    }
  }
  if (logged6) {
    return <Admin />
  }
  if (logged) {
    return <WorkVerifier />
  }
  if (logged2) {
    return <Check1 />
  }
  if (logged3) {
    return <Check2 />
  }
  if (logged4) {
    return <Check3></Check3>
  }
  if (logged5) {
    return <Legalcheck />
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} id='next' onClick={onClick}>
        Next
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} id='prev' onClick={onClick}>
        Prev
      </div>
    );
  }
  return (
    <>
      <Menubar />
       <Slider {...settings} className='slidebox'>
        
        <section>
          <h4 className='head'>Login for Tender verify</h4>
          <form onSubmit={submit} className='tender'>
            <label>Enter the name:</label>
            <input type='text' name='name' value={data.name} onChange={handlechange}></input>
            <br></br>
            <label>Enter the password:</label>
            <input type='password' name='password' value={data.password} onChange={handlechange}></input>
            <br></br>
            <button type='submit' className='btn5'>Login</button>
          </form>
        </section>
        <section>
        <h4 className='head'>Login for Contractor proposal checker phase1</h4>
          <form onSubmit={submit2} className='tender'>
            <label>Enter the name</label>
            <input type='text' name='name' value={data2.name} onChange={handlechange2}></input>
            <br></br>
            <label>Enter the password</label>
            <input type='password' name='password' value={data2.password} onChange={handlechange2}></input>
            <br></br>
            <button type='submit' className='btn5'>Login</button>
          </form>
        </section>
      
      <section>
      <h4 className='head'>Login for Contractor proposal checker phase2</h4>
        <form onSubmit={submit3} className='tender'>
          <label>Enter the name</label>
          <input type='text' name='name' value={data3.name} onChange={handlechange3}></input>
          <br></br>
          <label>Enter the password</label>
          <input type='password' name='password' value={data3.password} onChange={handlechange3}></input>
          <br></br>
          <button type='submit' className='btn5'>Login</button>
        </form>
      </section>
      
      <section>
      <h4 className='head'>Login for Contractor proposal checker phase3</h4>
        <form onSubmit={submit4} className='tender'>
          <label>Enter the name</label>
          <input type='text' name='name' value={data4.name} onChange={handlechange4}></input>
          <br></br>
          <label>Enter the password</label>
          <input type='password' name='password' value={data4.password} onChange={handlechange4}></input>
          <br></br>
          <button type='submit' className='btn5'>Login</button>
        </form>
      </section>
     
      <section>
      <h4 className='head'>Login for legal Contractor checker</h4>
        <form onSubmit={submit5} className='tender'>
          <label>Enter the name</label>
          <input type='text' name='name' value={data5.name} onChange={handlechange5}></input>
          <br></br>
          <label>Enter the password</label>
          <input type='password' name='password' value={data5.password} onChange={handlechange5}></input>
          <br></br>
          <button type='submit' className='btn5'>Login</button>
        </form>
      </section>
      <section>
          <h4 className='head'>Login for Admin Panel</h4>
          <form onSubmit={submit6} className='tender'>
            <label>Enter the name</label>
            <input type='text' name='name' value={data6.name} onChange={handlechange6}></input>
            <br></br>
            <label>Enter the password</label>
            <input type='password' name='password' value={data6.password} onChange={handlechange6}></input>
            <br></br>
            <button type='submit' className='btn5'>Login</button>
          </form>
        </section>
      </Slider>
      <section>
        <Footer />
      </section>

    </>

  )
}

export default CompanyWork