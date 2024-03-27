import React from 'react'

function Footer() {
  return (
    <>
    <section className='foot'>
      <div className='logo'>
        <img  src='images/Annotation_2024-02-09_170909-removebg-preview.png'></img>
      </div>
      <div className='contact'>
       <h3>Contact : 7827734990,943857220</h3>
       <h4>Address:Olympus A, Hiranandani Estate,
         Ghodbunder Road, Patlipada, Thane West -
          400607, Maharashtra</h4>
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