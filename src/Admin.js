import React, { useEffect, useState } from 'react'
import tenderapi from './service/tenderapi';
import Menubar from './Menubar';
function Admin() {
    const [data2,setdata2] = useState([])
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await tenderapi.getregdetail();
            setdata2(res.data);
          } catch (error) {
            console.log(error);
          }
        }
    
        fetchData(); // Invoke fetchData here
      }, []);
      const [data,setdata] = useState([])
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await tenderapi.getBackup();
            setdata(res.data);
          } catch (error) {
            console.log(error);
          }
        }
    
        fetchData(); // Invoke fetchData here
      }, []);
  return (
  <>
  <Menubar/>
  <section>
    <h1 className='head'>
        Detail of user and contractor
    </h1>
    <section>
        <h2>Contractor perposal list</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>name</th>
              <th>password</th>
              
              <th>emailid</th>
              <th>phoneno</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((e, num) => (
              <tr key={num}>
             <td>{num + 1}</td>
             <td>{e.name}</td>
             <td>{e.password}</td>
                <td>{e.emailid}</td>
                <td>{e.phoneno}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </section>
  </section>
  <section>
    <h1 className='head'>
        Backup detail
    </h1>
    <section>
        <h2>Contractor perposal list</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Contractorname</th>
              <th>TenderId</th>
              <th>ContractorId</th>
              <th>Budget</th>
              <th>Contractorphoneno</th>
              <th>ContractorGst</th>
              <th>UserFile</th>
              <th>contractorfile</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, num) => (
              <tr key={num}>
             <td>{num + 1}</td>
             <td>{e.username}</td>
                <td>{e.contractorname}</td>
                <td>{e.tenderid}</td>
                <td>{e.contractorid}</td>
                <td>{e.budget}</td>
                <td>{e.contractorphoneno}</td>
                <td>{e.contractorgst}</td>
                <td>
  {e.userfile && <a href={e.userfile.substring(3)} target="_blank">Download file</a>}
</td>
<td>
  {e.contractorfile && <a href={e.contractorfile.substring(3)} target="_blank">Download file</a>}
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
  </section>
  </>
  )
}

export default Admin