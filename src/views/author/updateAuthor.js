import React, { useEffect, useRef, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { toast } from 'react-toastify';
import DemoIMG from "../Book/Image/Demo_product.jpg"
import {useAuth} from "../../components/context/auth";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const updateAuthor = () => {
  const navigate=useNavigate()
  const [auth,setAuth]=useAuth();
  const [loading ,setLoading]=useState(false);
  const [data,setData]=useState({})
  const [name, setName] = useState("")
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const fileInput = useRef(null);

  let { id } = useParams();


  useEffect(()=>{
    LoadAuthorData()
   },[])


const LoadAuthorData=async()=>{


const {data}=await axios.get(`/authors/${id}`)
setData(data.data)

setPreviewURL(data.data.photoURL);
setImage(data.data.photoURL);


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
    setLoading(true)
    e.preventDefault()
    const formData = new FormData();
    formData.append('authorName',name || data.authorName);
    formData.append('photo',data.photoURL);
    formData.append('aboutAuthor',description || data.aboutAuthor);


    try {


      if (!name && !image) {
        toast.error('Name or image required');
        setLoading(false)
      }


      else {

       if(auth?.token){
         axios.post(`/updateAuthor/${id}`,formData).then(data=> {
           if(data?.data?.data){
             setLoading(false)
             toast.success("update successfully")
             navigate('/all-author')
           }else{
             setLoading(false);
             toast.error("failed")
           }
         }).catch(e=> {
           setLoading(false);
           toast.error("failed")
         })
       }

      }

    }
    catch (error) {
      setLoading(false)
      toast.error("failed")
    }

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
                  <div className="col-md-6">  <h5 >Update Author</h5></div>
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
                    <label className="form-label">Author Name</label>
                    <input
                      className="form-control form-control-sm" type="text"
                     defaultValue={data?.authorName}
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
                              defaultValue={data?.aboutAuthor}
                      onChange={(e) => setDescription(e.target.value)}

                      rows={4} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 p-2">
                    <button
                      disabled={loading}
                    onClick={SaveChange}
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

export default updateAuthor
