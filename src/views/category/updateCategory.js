import React, { useEffect, useRef, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { toast } from 'react-toastify';
import DemoIMG from "../Book/Image/Demo_product.jpg"
import {useAuth} from "../../components/context/auth";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const updateCategory = () => {
         const navigate=useNavigate()
         const [auth]=useAuth();
         const [error,setError]=useState('')
         const [loading ,setLoading]=useState(false);
         const [name,setName]=useState('')
  const [image,setImage]=useState(null)
       const [data,setData]=useState({})
        const [previewURL, setPreviewURL] = useState('');
        const [selectedImage, setSelectedImage] = useState(null);
        const fileInput = useRef(null);


        let { id } = useParams();



         useEffect(()=>{
          LoadCategoryData()
         },[])


const LoadCategoryData=async()=>{

     const {data}=await axios.get(`/categories/${id}`)
      setData(data);
     setImage(data?.photoUrl)


}




 const handleImageChange = (e) => {
             setSelectedImage(e.target.files[0]);
             const file = e.target.files[0];



             if (file) {
                  setImage(file);
                  const preview = URL.createObjectURL(file);
                  setPreviewURL(preview);

             }
        }



  const Submit = async (e) => {
             e.preventDefault();

             try {
                  if (!name) {
                       toast.error('Name is required');
                  }


                  else {
                        setLoading(true)
                    const formData = new FormData();
                    formData.append('name',name || data.name);
                    formData.append('photo', data.photoUrl);
                    if(auth?.token){
                      axios.put(`/category/${id}`,formData).then(data=>{
                         console.log(data)
                       if(data?.status===200){
                          setLoading(false)
                         toast.success("update successfully")
                         navigate('/all-category')
                         window.location.reload()
                       }else{
                         setLoading(false)
                         toast.error("this category already created or something wrong")
                       }
                      })
                    }
                  }



             } catch (err) {
                  console.log(err);
                  setLoading(false)
                  toast.error("something wrong")
             }
        }




        return (

               <div className="container">
                 {loading ? <div className="spinner-border" role="status">
                 </div> : ""}
                  <div className="row card p-3">
                       <h3 className='p-3 mt-2 mb-2 h4'> Update Category</h3>
                       <p className={'text-danger'}>{error}</p>

                       <div class="row align-items-start">
                            <div class="col">

                                 <form onSubmit={Submit} >
                                      <div className="col gap-3 d-flex">
                                           <div className="col-8">
                                                <input
                                                     type="text"
                                                     className="form-control p-2 mb-3"
                                                     placeholder="Enter a Category"
                                                     defaultValue={data.name}
                                                     onChange={(e) => setName(e.target.value)}
                                                />


                                                <div class="mb-3">
                                                     <label for="formFile" class="form-label">Category Image</label>

                                                     <input
                                                          type="file"
                                                          accept="image/*"
                                                          onChange={handleImageChange}

                                                          ref={fileInput}
                                                     />
                                                </div>

                                           </div>

                                      </div>


                                      <button disabled={loading}
                                      className="btn btn-primary mt-2 w-25" type='submit'>
                                           Submit
                                      </button>

                                 </form>



                            </div>
                            <div class="col">
                            <div className="col-4 align-self center">
                       {selectedImage ? (
           <img
           className='mx-auto d-block '



           style={{

             "height": "100%",
             "width": "100%",
             "background-color": "#bbb",
             "border-radius": "15px",
             "display": "inline-block"}}


           src={URL.createObjectURL(selectedImage)} alt="Selected Image"


           />
         ) : (
             <img
             className='mx-auto d-block'

             style={{

             "height": "90%",
             "width": "90%",
             "background-color": "#bbb",
             "border-radius": "15px",
             "display": "inline-block"}}


             src={image}


             />
         )}
                       </div>
                            </div>

                       </div>

                  </div>
             </div>

        );
   }

export default updateCategory
