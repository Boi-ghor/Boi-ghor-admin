import React, { useRef, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { toast } from 'react-toastify';
import DemoIMG from "../Book/Image/Demo_product.jpg"



const Category = () => {

     const [name, setName] = useState("")
     const [image, setImage] = useState(null);
     const [previewURL, setPreviewURL] = useState('');
     const [selectedImage, setSelectedImage] = useState(null);
     const fileInput = useRef(null);

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
                    alert('Name is required');
               }


               else {
                    alert('success')
                    console.log(name, image)
               }



          } catch (err) {
               console.log(err);
               toast.error("Product create failed. Try again.");
          }
     }

     return (

            <div className="container">
               <div className="row card p-3">
                    <h3 className='p-3 mt-2 mb-2 h4'> Add Category</h3>

                    <div class="row align-items-start">
                         <div class="col">

                              <form onSubmit={Submit} >
                                   <div className="col gap-3 d-flex">
                                        <div className="col-8">
                                             <input
                                                  type="text"
                                                  className="form-control p-2 mb-3"
                                                  placeholder="Enter a Category"
                                                  value={name}
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


                                   <button className="btn btn-primary mt-2 w-25" type='submit'>
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
          
          
          src={DemoIMG} 
          
          
          />
      )}
                    </div>
                         </div>

                    </div>

               </div>
          </div>

     );
}




export default Category

// hellow 