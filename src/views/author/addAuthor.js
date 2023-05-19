import React, { useRef, useState } from 'react'
import {useNavigate}from 'react-router-dom'
import {useAuth} from "../../components/context/auth";
import axios from "axios";
import {toast} from "react-toastify";

const addAuthor = () => {
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  const [auth,setAuth]=useAuth()
  const [name, setName] = useState("")
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const fileInput = useRef(null);



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
    setLoading(true)
    const formData = new FormData();
    formData.append('authorName',name);
    formData.append('photo', image);
    formData.append('aboutAuthor',description);


    try {


      if (!name && !image) {
        setLoading(false)
        alert('Name or image required');
      }


      else {

       if(auth?.token){
         axios.post('/createAuthor',formData).then(data=> {
           if(data?.data?.data){
             setLoading(false)
             toast.success("create successfully")
             navigate('/all-author');
             window.location.reload()
           }else{
             setLoading(false)
             toast.error("cannot created")
           }
         }).catch(e=> {
           toast.error("failed")
           setLoading(false)
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
                  <div className="col-md-6">  <h5 >Add Author</h5></div>
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
                    <button disabled={loading} onClick={SaveChange} className="btn w-25 my-3 btn-primary">Save</button>
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

export default addAuthor
