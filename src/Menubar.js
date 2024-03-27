import React from 'react'
import { NavLink } from 'react-router-dom';
function Menubar() {
  const handleCompanyLogin = () => {
    const uniqueId = prompt('Please enter your unique ID:');
    // Check if uniqueId is not null or empty
    if (uniqueId=='xcvb1234') {
      // Navigate to the Company page with the provided uniqueId
      window.location.href = `/company?id=${uniqueId}`;
    }
    else{
      alert("you Do Not  acess this page")
    }
  };
  return (
    <>
    <header>
<section id="header">
        
            <nav>
            <img src='./images/Annotation_2024-02-09_170909-removebg-preview.png' className='logoimg'></img>
           
                <ul id="navbar">
                 
                <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/tender'>Tender</NavLink></li>
            {/* <li><NavLink to='/company'>Company Login</NavLink></li> */}
            <li><a href='#' onClick={handleCompanyLogin}>Company Login</a></li>
            <li><NavLink to='/about'>About us</NavLink></li>
                </ul>

            </nav>
    </section>  

</header>
 
    </>
  )
}

export default Menubar