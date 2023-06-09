import axios from "axios";
import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "src/components/context/auth";



const Publisher = () => {

  const navigate=useNavigate()
  const [auth,setAuth]=useAuth();
  const [loading ,setLoading]=useState(false)
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

setLoading(true)
    e.preventDefault()
    const formData = new FormData();
    formData.append('publisherName',name);
    formData.append('photo', image);
    formData.append('aboutPublisher',description);

  try {


    if (!name && !image && !description) {
      toast.error('Name , image and description required');
    }


    else {

      if(auth?.token){
        const {data}=await axios.post("/createPublisher",formData)

        if(data.success==true){
          setLoading(false)
          toast.success("Publisher Create Sucess")
          navigate("/all-publishers");
          window.location.reload()
        }

      }
      else{
        toast.error("cannot created")
        setLoading(false)
      }




    }

  }
  catch (error) {
    setLoading(false)
    toast.error(error.message) }

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
                  <div className="col-md-6">  <h5 >Add Publisher</h5></div>
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
                    <button disabled={loading} onClick={SaveChange} className="btn btn-primary mt-2 w-25">Save</button>
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

export default Publisher
