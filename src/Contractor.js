import React, { useEffect, useState } from 'react'
import Menubar from './Menubar'
import tenderapi from './service/tenderapi';
import Contractorfrom from './Contractorfrom';
import { upload } from '@testing-library/user-event/dist/upload';
function Contractor() {
    const [data, setdata] = useState([])
    const [loged,setloged] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await tenderapi.getTender2();
        setdata(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const Upload = ()=>{
    setloged(true);
  }
  if(loged){
    return <Contractorfrom/>
  }
  return (
    <>
    <Menubar></Menubar>
    <section>
        <h1 >Tender Data</h1>
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
              <th>option1</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, num) => (
              <tr key={num}>
                <td>{num+1}</td>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.description}</td>
                <td>{e.projectamount}</td>
                <td>{e.duration}</td>
                <td>{e.location}</td>
                <td>  <a href={e.filepath} target="_blank"
                    rel="noreferrer">Open PDF</a></td>
                <td><button onClick={Upload}>Upload</button></td>
              </tr>
            ))}
          </tbody>

        </table>
      </section>
    </>
  )
}

export default Contractor