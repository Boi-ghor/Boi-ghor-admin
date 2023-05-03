import React, { useRef, useState } from 'react'
import DemoIMG from "../Book/Image/Demo_product.jpg"
import { Select } from 'antd';

const addBook = () => {



     const [image, setImage] = useState(null);
     const [previewURL, setPreviewURL] = useState('');
     const [selectedImage, setSelectedImage] = useState(null);
     const fileInput = useRef(null);

     const [name,setName]=useState("") 
     const [price,setPrice]=useState("") 
     const [quantity,setQuantity]=useState("")
     const [author,setAuthor]=useState("")
     const [publisher,setPublisher]=useState("")
     const [category ,setCategory]=useState("")

     
     

     const handleImageChange = (e) => {
          e.preventDefault();
          const file = e.target.files[0];
          setSelectedImage(e.target.files[0]);

          if (file) {
               setImage(file);
               const preview = URL.createObjectURL(file);
               setPreviewURL(preview);
          }
     }


     const Submit=(e)=>{
          e.preventDefault();
          try {
               if (!name) {
                    alert('Name is required');
               }


               else if (!price){
                    alert('price is required');
               }
               else if (!quantity){
                    alert('quantity is required');
               }
               else if (!author){
                    alert('author is required');
               }
               else if (!publisher){
                    alert('publisher is required');
               }

               else if (!quantity){
                    alert('quantity is required');
               }

                else if (!category){
                    alert('category is required');
               }
               else{
                    console.log();
               }



          } catch (err) {
               console.log(err);
              
          }
     }

     return (
          <div className='container'>
               <div className="row">




                    <div className="col-4 p-3 mt-3">
                         {selectedImage ? (
                              <img
                                   className='mx-auto d-block '



                                   style={{

                                        "height": "90%",
                                        "width": "90%",
                                        "background-color": "#bbb",
                                        "border-radius": "15px",
                                        "display": "inline-block"
                                   }}


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
                                        "display": "inline-block"
                                   }}


                                   src={DemoIMG}


                              />
                         )}
                    </div>
                    <div className="col-8">
                         <form onSubmit={Submit}>
                              <div className="col-md-12 d-flex">
                                   <div class=" col-6 m-2">
                                        <label for="exampleFormControlInput1" class="form-label">Book Name</label>
                                        <input type="text" class="form-control"
                                             id="exampleFormControlInput1"
                                             placeholder="Enter Your Book Name"
                                             value={name}
                                             onChange={(e) => setName(e.target.value)}

                                        />
                                   </div>
                          
                                   <div class=" col-6 m-2">
                                        <label class="form-label">Price</label>
                                        <input type="number"
                                             min="1"
                                             class="form-control"

                                             id="exampleFormControlInput1"
                                             placeholder="Enter Book Price" 
                                             onChange={(e) => setPrice(e.target.value)}
                                             />
                                   </div>
                                  
                              </div>

                              <div className="col-md-12 d-flex">

                              <div class=" col-6 m-2">
                                        <label class="form-label">Quantity</label>
                                        <input type="number"
                                             min="1"
                                             class="form-control"

                                             id="exampleFormControlInput1"
                                             placeholder="Enter Book Quantity" 
                                             onChange={(e) => setQuantity(e.target.value)}
                                             />
                                   </div>


                             <div className="col-6 m-2">
                                   <label  class="form-label">Select Author</label>
                                        <Select
                                             bordered={false}
                                             placeholder="Select a Author"                                  
                                             showSearch
                                             className="form-select"
                                             onChange={(value) => {
                                                  setPublisher(value);
                                             }}
                                        >
                                             {/* {categories?.map((c) => (
                                                  <Option key={c._id} value={c._id}>
                                                       {c.name}
                                                  </Option>
                                             ))} */}
                                        </Select>
                                   </div>      


                              </div>


                              <div className="col-md-12 d-flex">
                                   
                              <div className="col-6 m-2">
                                   <label  class="form-label">Select Publisher</label>
                                        <Select
                                             bordered={false}
                                             placeholder="Select a Publisher"                                  
                                             showSearch
                                             className="form-select"
                                             onChange={(value) => {
                                                  setCategory(value);
                                             }}
                                        >
                                             {/* {categories?.map((c) => (
                                                  <Option key={c._id} value={c._id}>
                                                       {c.name}
                                                  </Option>
                                             ))} */}
                                        </Select>
                                   </div>

                                   <div className="col-6 m-2">
                                   <label  class="form-label">Select Category</label>
                                        <Select
                                             bordered={false}
                                             placeholder="Select a category"                                  
                                             showSearch
                                             className="form-select"
                                             // onChange={(value) => {
                                             //      setCategory(value);
                                             // }}
                                        >
                                             {/* {categories?.map((c) => (
                                                  <Option key={c._id} value={c._id}>
                                                       {c.name}
                                                  </Option>
                                             ))} */}
                                        </Select>
                                   </div>

                              </div>

                              <div className="col">
                                   <div className="col-4">
                                        <div class="m-2">
                                             <label for="formFile" class="form-label">Product Image</label>

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

               </div>


          </div>
     )
}

export default addBook