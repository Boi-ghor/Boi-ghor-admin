import React from 'react';
import {
  CBadge,
  CButton,
  CFormInput,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react";
import {FiEdit} from "react-icons/fi";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {useAuthor} from "../../components/context/author";
import Swal from 'sweetalert2';
import { useAuth } from 'src/components/context/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AllAuthor = () => {

  const [author]=useAuthor();
  const [auth]=useAuth();
  const navigate=useNavigate()


  const  DeleteConfirm=(authorName)=>{

    return  Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
           
          const data={
              authorName
          }
         if(auth?.token){
           axios.delete("/deleteAuthor",{data})
             .then(data=>{

              if(data?.data?.success){
                toast.success("Author Delete Sucess")
                window.location.reload()
                

              }else{
                toast.error("This Author have a book or something wrong")
                  //setError("this Author have a book or something wrong")
              }
             })
             .catch(e=> console.log(e))
         }





        }
    })

}
  
const EditAuthor=async(id)=>{

  navigate("/all-author/"+id)
  
  }

  return (
    <div>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h6 className="card-title">All Authors</h6>
          <div className="my-3 d-flex">
            <CFormInput
              placeholder="Search by title"
              className="w-25"
            />
          </div>
          <CTable style={{textAlign:'center'}}>
            <CTableHead>
              <CTableRow style={{backgroundColor:'#dfe6e9'}}>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Id
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Name
                </CTableHeaderCell>


                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Image
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3 text-center" scope="col" style={{ fontSize: '14px' }}>
                  Action
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {author.map((x,key)=>{
                return <CTableRow>
                  <CTableDataCell style={{ fontSize: '14px', color: '#8E98AA' }}>{key+1}</CTableDataCell>
                  <CTableDataCell style={{ fontSize: '14px', color: '#57606f' }}> {x.authorName}</CTableDataCell>


                  <CTableDataCell style={{}}> <img  src={x.photoURL} width={'50'} /> </CTableDataCell>
                  <CTableDataCell className="d-flex align-items-center  justify-content-center w-full">

                    <CButton
                      // onClick={() => onDelete(blog?.blogID)}
                      onClick={()=>EditAuthor(x._id)}
                      className=" border-0 cursor-pointer me-2 delete_btn_hover"
                      style={{ color: '#ecf0f1',backgroundColor:"#20bf6b" }}
                    >
                      <FiEdit />
                    </CButton>
                    <CButton
                      // onClick={() => onDelete(blog?.blogID)}
                      onClick={()=>DeleteConfirm(x.authorName)}
                      className=" border-0 cursor-pointer delete_btn_hover"
                      style={{ color: '#ecf0f1',backgroundColor:"red" }}
                    >
                      <RiDeleteBin5Fill />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              })}

            </CTableBody>
          </CTable>

        </div>
      </div>
    </div>
  );
};

export default AllAuthor;
