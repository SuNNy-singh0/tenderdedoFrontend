import React, { useState } from 'react'
import Menubar from './Menubar'
import tenderapi from './service/tenderapi';
import Tenderform from './Tenderform';
import Contractor from './Contractor';
import ReactModal from 'react-modal';
import Modal from 'react-modal'
import Modal2 from 'react-modal'
import Footer from './Footer';
import Review from './Review';
function Mainpage() {
    const [content, setcontent] = useState({
        name: "",
        password: "",
        emailid: "",
        phoneno: "",
        type: "user"
    });
    const [loged, setloged] = useState(false);
    const [loged2, setloged2] = useState(false);
    const [login, setlogin] = useState({
        name: "",
        password: ""
    });
    const [modelopen, setmodelopen] = useState(false);
    const [model, setmodel] = useState(false);
    const [model2, setmodel2] = useState(false);
    const handlechange2 = (e) => {
        const { name, value } = e.target;
        setlogin({ ...login, [name]: value });
    }
    const submitContent = (e) => {
        e.preventDefault();
        tenderapi.createuser(content).then((res) => {
            alert('Content added successfully');
        }).catch((error) => {
            console.log(error)
        })
    }
    const handlechange = (e) => {
        const { name, value } = e.target;
        setcontent({ ...content, [name]: value });
    }
    const submitContent2 = (e) => {
        e.preventDefault();
        console.log(login.name + "" + login.password)
        tenderapi.checkName(login.name, login.password)
            .then((res) => {
                if (res.data === "found Sucessfully") {
                    setloged(true);
                }
                else {
                    console.log(login.name + "" + login.password)
                    alert("wrong password and name")
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
    const submitContent3 = (e) => {
        e.preventDefault();
        tenderapi.checkName(login.name, login.password)
            .then((res) => {
                if (res.data === "found Sucessfully") {
                    setloged2(true);
                }
                else {
                    alert("wrong password and name")
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
    if (loged) {
        return <Tenderform />
    }
    if (loged2) {
        return <Contractor />
    }
    const openReactModal = () => {
        setmodelopen(true);
    }
    const clostReactModal = () => {
        setmodelopen(false);
    }
    const openModal = () => {
        setmodel(true)
    }
    const closeModer = () => {
        setmodel(false)
    }
    const openModal2 = () => {
        setmodel2(true)
    }
    const closeModer2 = () => {
        setmodel2(false)
    }
    const signup1 = () => {
        clostReactModal();
        openModal2();
    }
    const signup2 = () => {
        closeModer();
        openModal2();
    }
    const Subcribe = (e) => {
        e.preventDefault();
        alert("Subcribed SucessFully")
    }

    return (
        <>
            <Menubar />
            <section className='intro'>
                <p>Welcome to <br></br><span>Tender Dekho</span>
                    <br></br>
                    <button className='btn' onClick={openReactModal}>User</button>
                    <button className='btn' onClick={openModal}>Contractor</button>
                </p>

            </section>
            <Modal2
                isOpen={model2}
                onRequestClose={closeModer2}
                contentLabel="Signup"
                style={{
                    content: {
                        width: '40%',
                        height: '70%',
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'left',
                        textAlign: 'center',
                        border: '2px solid black'// Optional: Align items vertically
                    }
                }}
            >
                <section className='loginuser'>
                    <h1>Registration for User/Contractor</h1>
                    
                    <form className='selection' onSubmit={(e) => submitContent(e)} >
                        
                        <input type='text' name='name'  placeholder="Enter  Name" value={content.name} onChange={(e) => handlechange(e)}></input>
                        <br></br>
                        
                        <input type='password' name='password' placeholder='Create Password' value={content.password} onChange={(e) => handlechange(e)}></input>
                        <br></br>
                        
                        <input type='text' name='emailid' placeholder='Enter Email-id' value={content.emailid} onChange={(e) => handlechange(e)}></input>
                        <br></br>
                        
                        <input type='text' name='phoneno' placeholder='Enter Phone-No' value={content.phoneno} onChange={(e) => handlechange(e)}></input>
                        <br>
                        </br>
                        <label>Type:</label>
                        <select id='sel' name="type" value={content.type} onChange={(e) => handlechange(e)}>
                            <option value="user" selected>User</option>
                            <option value="contractor">Contractor</option>
                        </select>
                        <br></br>
                        <button type='submit' className='btn2'>Submit</button>
                    </form>
                    <button onClick={closeModer2} className='btn7 close'></button>
                </section>
            </Modal2>

            <ReactModal isOpen={modelopen}
                onRequestClose={clostReactModal}
                contentLabel="User Registration Modal"
                style={{
                    content: {
                        width: '44%',
                        height: '70%',
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        border: '2px solid black'// Optional: Align items vertically
                    }
                }}
            >
                <section className='loginuser'>
                    <h1>Login For User</h1>
                    <form className='login' onSubmit={(e) => submitContent2(e)}>



                        <input type='text' name='name' value={login.name} placeholder="Username" onChange={(e) => handlechange2(e)}></input>
                        <br></br>
                        {/*                         
                        <label>Password:</label> */}


                        <input type='password' name='password' value={login.password} placeholder='password' onChange={(e) => handlechange2(e)}></input>
                        <br></br>
                        <button type='submit' className='btn2'>Sign-in</button>
                        <p>or</p>
                        <button className='btn2' onClick={signup1}>Signup</button>

                    </form>
                    <button onClick={clostReactModal} className='btn3 close'></button>
                </section>
            </ReactModal>

            <Modal
                isOpen={model}
                onRequestClose={closeModer}
                contentLabel="Contractor Login Modal"
                style={{
                    content: {
                        width: '40%',
                        height: '70%',
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        border: '2px solid black'// Optional: Align items vertically
                    }
                }}
            >
                <section className='loginuser'>
                    <h1>Login form for Contractor</h1>

                    <form className='login' onSubmit={submitContent3}>
                       
                        
                        <input type='text' name='name' value={login.name} placeholder='Name' onChange={(e) => handlechange2(e)}></input>
                        <br></br>
                        

                        <input type='password' value={login.password} placeholder='Password' onChange={(e) => handlechange2(e)} name='password'></input>
                        <br></br>
                        <button type='submit' className='btn2'>Sign-in</button>
                        <p>Or</p>
                        <button className='btn2' onClick={signup2}>Signup</button>

                    </form>
                    <button className='btn4 close' onClick={closeModer}></button>
                </section>
            </Modal>
            <section className='phase'>
                <h1>Few Easy Steps</h1>
                <ul>
                    <li>
                        <img src='images/submit.png'></img>
                        <p>1.Fill Application Form</p>
                    </li>
                    <li>
                        <img src='images/done.png'></img>
                        <p>2.Verification Process</p>
                    </li>
                    <li>
                        <img src='images/recruitment.png'></img>
                        <p>3.Get Best Contractor</p>
                    </li>
                    <li>
                        <img src='./images/agreement.png'></img>
                        <p>4.Documentation</p>
                    </li>
                </ul>
            </section>
            <section className='introduction'>
                <div className='left'>
                    <img src='images/1684305492_Interior_Designers_in_Rajouri_Garden.jpg'></img>
                </div>
                <div className='Right'>
                    <p>
                        "At TenderDekho, we revolutionize the way projects are tendered and contracted.
                        Our advanced ATS (Applicant Tracking System) platform seamlessly connects project owners with top-tier contractors,
                        simplifying the entire process from tender submission to contractor selection.
                        With a focus on efficiency, transparency, and legal compliance, TenderDekho ensures that every project is matched with the best-suited contractor,
                        supported by robust legal agreements. Say goodbye to the complexities of project procurement and hello to streamlined success with TenderDekho."
                    </p>
                    <button className='btn btn3' onClick={openModal}>Get Started</button>
                </div>
            </section>
            <section className='facility'>
                <h1>Why Choose us ?</h1>
                <div className='container'>
                    <div className='card'>
                        <img src='./images/on-time.png'></img>
                        <p>work on time</p>
                    </div>
                    <div className='card'>
                        <img src='./images/budget.png'></img>
                        <p>Reasonable fess</p>
                    </div>
                    <div className='card'>
                        <img src='images/quality.png'></img>
                        <p>Quality Assurance</p>
                    </div>
                    <div className='card'>
                        <img src='./images/compliance.png'></img>
                        <p>Documentation Assistance</p>
                    </div>
                </div>
            </section>
            <section className='fourth'>
                <div className='noti'>
                    <h1>Contractors Get Notification for new Tender</h1>
                    <br></br>
                    <form onSubmit={Subcribe}>
                        <input type='email' placeholder='Enter your email' required></input>
                        <button type='submit'> Subscribe</button>
                    </form>
                </div>
            </section>
            <section >
                <h1 className='hello'>What our client Say..?</h1>
                <Review />
            </section>
            <section className='foots'>
                <Footer /></section>
        </>
    )
}

export default Mainpage