import React from 'react'

function Footer() {
  return (
    <>
    <section className='foot'>
      <div className='logo'>
        <img  src='images/logo4.png'></img>
      </div>
      <div className='contact'>
       <h3>Contact : 7827734990,943857220</h3>
       <h4>Address : Olympus A, mohan Estate,
         Ghodbunder Road, Patliputra, Thane East -
          400608, Maharashtra</h4>
      </div>
      <div className='condition'>
        <ul>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>CopyRight</a></li>
          <li><a href='#'>Terms & Condition</a></li>
          <li><a href='#'>Legal Policy</a></li>
        </ul>
      </div>
      <div className='socialmedia'>
      <ul>
          <li><a href='#'><img className='socialicon' src='images/youtube.png'></img></a></li>
          <li><a href='#'><img className='socialicon' src='images/twitter.png'></img></a></li>
          <li><a href='#'><img className='socialicon' src='images/instagram.png'></img></a></li>
          <li><a href='#'><img className='socialicon' src='images/facebook.png'></img></a></li>
        </ul>
      </div>
    </section>
    <div className='copyright'>
      2020-2050 @ All Copyright reserved
    </div>
    </>
  )
}

export default Footer