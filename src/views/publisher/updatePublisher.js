import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from 'src/components/context/auth';


const updatePublisher = () => {
  const [auth]=useAuth();
     const [name, setName] = useState("")
     const [description, setDescription] = useState('')
     const [image, setImage] = useState(null);
     const [previewURL, setPreviewURL] = useState('');
     const fileInput = useRef(null);
     const navigate=useNavigate()
     const {id}=useParams()

     useEffect(()=>{
      LoadData()
     },[])
     const LoadData=async()=>{

     
          try{
              
               const { data } = await axios.get(`/publishers/${id}`);

               setName(data.data.publisherName);
               setDescription(data.data.aboutPublisher);
               setPreviewURL(data.data.photoURL);
               setImage(data.data.photoURL);


          }
          catch(error){


          }
     }

    

   
     const handleImageChange = (event) => {
       const file = event.target.files[0];
       if (file) {
         setImage(file);
         const preview = URL.createObjectURL(file);
         setPreviewURL(preview);
       }
     }
   
   
  const SaveChange = async (e) => {
      
      e.preventDefault()
      const formData = new FormData();
      formData.append('publisherName',name);
      formData.append('photo',image);
      formData.append('aboutPublisher',description);
  
  
      try {
  
  
        if (!name && !image) {
          toast.error('Name or image required');
        }
        else{

          if(auth?.token){
            const {data}=await axios.post(`/updatePublisher/${id}`,formData)
        
            if(data.success==true){
              toast.success("Publisher Update Sucess")
              navigate("/all-publishers")
            }
            
          }
          else{
            toast.error("SomeThing Went Wrong")
          }
         

        }
  
  
      
  
      }
      catch (error) { }
   
     }
   
     return (
       <>
   
   
         <div className="container-fluid">
           <div className="row">
             <div className="col-12">
               <div className="card">
                 <div className="card-body">
                   <div className="row ">
                     <div className="col-md-6">  <h5 >Update Publisher</h5></div>
                     <div className="col-md-6 ">  
                     
                     {previewURL && (
                       <img src={previewURL}
                       className="float-end m-2"
                       alt="Preview" style={{
                         "height": "55px",
                         "width": "55px",
                         "background-color": "#bbb",
                         "border-radius": "50%",
                         "display": "inline-block"
                       }} />
                     )}
                     </div>
   
                     <hr className="bg-light" />
   
   
                     <div className="col-6 p-2">
                       <label className="form-label">Publisher Name</label>
                       <input
                         className="form-control form-control-sm" type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
   
                       />
                     </div>
   
                     <div className="col-4">
                       <div class="mb-3">
                         <label for="formFile" class="form-label">Your Image</label>
   
   
   
                         <input
                           type="file"
                           accept="image/*"
                           onChange={handleImageChange}
   
                           ref={fileInput}
                         />
   
   
   
                       </div>
   
   
   
   
   
                     </div>
   
                     <div className="col-12 p-2">
                       <label className="form-label">Description</label>
                       <textarea className="form-control form-control-sm"
                         value={description}
                         onChange={(e) => setDescription(e.target.value)}
   
                         rows={4} />
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-4 p-2">
                       <button onClick={SaveChange} className="btn btn-sm my-3 btn-success">Save</button>
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
export default updatePublisher