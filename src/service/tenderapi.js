import axios from "axios";
const base = "http://localhost:8080"

class tenderapi {
  createuser(content){
    return  axios.post(base+"/createuser",content)
  }
  checkName(name,password){
    const str = base + "/check/" + name+"/"+password; // Encode the name to handle special characters
    return axios.get(str);
  }
  createTender(content){
    return axios.post(base+'/createtender',content)
  }
  getTender(){
    return axios.get(base+'/gettender')
  }
  createVerifiedTender(content){
    return axios.post(base+'/createverifiedtender',content)
  }
  deletetender(content){
  return axios.delete(base+'/deletetender/'+content);
  }
  getTender2(){
    return axios.get(base+'/getverifiedtender')
  }
  createContractor(content){
    return axios.post(base+'/createContractor',content)
  }
  getTenderbyid(id){
    return axios.get(base+'/getverifiedTenderByid/'+id)
  }
  getContractor(){
    return axios.get(base+'/getcontractor')
  }
  getContractorbyid(id){
    return axios.get(base+'/getcontractor/'+id)
  }
  createphase2(content){
    return axios.post(base+'/phase2',content)
  }
  getphase2(content){
    return axios.get(base+'/getphase2')
  }
  createphase3(content){
    return axios.post(base+'/phase3',content)
  }
  deletecontractorbyid(content){
    return axios.delete(base+'/deletecontractor/'+content)
  }
  getphase2byid(content){
    return axios.get(base+'/getphase2byid/'+content)
  }
  deletephase2(content){
    return axios.delete(base+'/deletephase2/'+content)
  }
  getphase3(){
    return axios.get(base+'/getphase3')
  }
  getphase3byid(content){
    return axios.get(base+'/getphase3byid/'+content)
  }
  deletephase3(content){
    return axios.delete(base+'/deletephase3/'+content)
  }
  createlegal(content){
    return axios.post(base+'/legal',content)
  }
  getlegal(){
    return axios.get(base+'/getlegal')
  }
  getlegalbyid(content){
    return axios.get(base+'/getlegalbyid/'+content)
  }
  getlegalbycontractorid(content){
    return axios.get(base+'/getlegalbyContractor/'+content)
  }
  deletelegal(content){
    return axios.delete(base+'/deletelegal/'+content)
  }
  createbackup(content){
    return axios.post(base+'/backup',content)
  }
  getBackup(){
    return axios.get(base+'/getbackup')
  }
  getregdetail(){
    return axios.get(base+'/getregdetail')
  }
  send(id,body){
    return axios.post(base+'/send?id='+id+'&body='+body)
  }
}

export default new tenderapi();
