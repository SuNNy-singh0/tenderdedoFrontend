import React from 'react'
import Menubar from './Menubar'
import Footer from './Footer'

function About() {
  return (
    <>
    <Menubar>
    </Menubar>
     <section className='Aboutus'>
     <h1 className='head'>what we do</h1>
        <div className='ab'>
           
            <p className='tex'>"In today's fast-paced world, individuals across various professions and lifestyles encounter the need for renovation, repair, or construction services amidst their busy schedules. 
                While minor tasks can often be addressed by local laborers, larger projects or those requiring specialized expertise pose significant challenges. Existing options, such as approaching construction
                 firms, are often ineffective as they prioritize larger projects, leading to delays and uncertainty. Additionally, reliance on local vendors for medium-sized projects results in inconsistent service quality 
                 and lack of accountability, both during and after the completion of the task."
                  
            This problem statement highlights the key pain points faced by individuals seeking renovation or construction services and sets the stage for proposing a solution that addresses these challenges.
</p>
        </div>
        <h1 className='head'>TenderDedo</h1>
        <div className='ab'>
            
            <p className='tex'>TenderDedo is a platform where we provide the right or desired service to the user . at the initial stage , we will provide middle segment service like renovation , repairment, also small level construction .
We will provide them all the available and suitable options to the users on which theycan rely for work .The user get service timely and when required . 
The service provider are also verifiedby the platform .For big deals we act as a medium for coordinating and matching user and service provider demands .
In which the platform is responsible for the development of relations with them not take charge to complete the work done ourself.
</p>
        </div>
     </section>
    <Footer></Footer>
    </>
  )
}

export default About