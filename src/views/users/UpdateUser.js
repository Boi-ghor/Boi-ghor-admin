import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from 'src/components/context/auth'
import Swal from 'sweetalert2'

const UpdateUser = () => {

     const [auth]=useAuth();
     const [loading,setLoading]=useState(false);
     const [firstName,setFirstName]=useState();
     const [lastName,setLastName]=useState()
     const [email,setEmail]=useState()
     const [role,setRole]=useState()
     const navigate=useNavigate()

     const {id}=useParams()

     useEffect(()=>{
          LoadData()
         },[])



const MakeAdmin=(id)=>{



  return  Swal.fire({
    title: 'Are you sure?',
    text: "Make him admin !",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
}).then((result) => {
    if (result.isConfirmed) {
       
     

     if(auth?.token){
       axios.put("/updateRole/"+id)
         .then(data=>{
         // console.log(data)
          

          if(data.status==200){

            toast.success("He is admin Now")
            navigate('/all-user')
          }else{
              toast.error("something wrong")
          }
         })
         .catch(e=> toast(e.message))
     }





    }
})

 }        


const LoadData=async()=>{
    
               const { data } = await axios.get(`/getProfile/${id}`);
                   
               setFirstName(data["0"]["firstName"])
               setLastName(data["0"]["lastName"])
               setEmail(data["0"]["email"])
               setRole(data["0"]["role"])
           
         }
   
         


const SaveChange=(e)=>{
console.log (e)
}



  return (
   <>
   
<div className="container-fluid">
  {loading ? <div className="spinner-border" role="status">
  </div> : ""}
  <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <div className="row ">
            <div className="col-md-6">  <h5 >Update User</h5></div>
          

            <hr className="bg-light" />


            <div className="col-5 p-3">
              <label className="form-label">First Name</label>
              <input
                className="form-control form-control-sm" type="text"
                defaultValue={firstName}
                onChange={(e) => setName(e.target.value)}

              />
            </div>
            <div className="col-5 p-3">
              <label className="form-label">Last Name</label>
              <input
                className="form-control form-control-sm" type="text"
                defaultValue={lastName}
                onChange={(e) => setLastName(e.target.value)}

              />
            </div>
            <div className="col-5 p-3">
              <label className="form-label">Email</label>
              <input
                className="form-control form-control-sm" type="text"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="col-5 p-3">
              <label> Role</label>
              <div>
           {role === 1 ? (
            <button className='btn btn-success fw-medium p-1 m-2 text-light' disabled>Already admin Now</button>
             
            ) : (
            <button
             className='btn btn-danger fw-medium p-1 m-2 text-light'
             onClick={() => MakeAdmin(id)}
             >Make him admin</button>
           )}
    </div>


              

            </div>

           
          
          </div>
          <div className="row">
            <div className="col-4 p-2">
              <button disabled={loading} onClick={SaveChange} 
              className="btn w-25 my-3 btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
   </>
  )
}

export default UpdateUser
