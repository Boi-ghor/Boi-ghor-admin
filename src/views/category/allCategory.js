import React, {useEffect, useState} from 'react';
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
import axios from "axios";
import {useCategory} from "../../components/context/category";
import Swal from 'sweetalert2'
import {useAuth} from "../../components/context/auth";
import { useNavigate } from 'react-router-dom';
const img='https://www.w3schools.com/css/paris.jpg'



const AllCategory = () => {
  const [category]=useCategory();
  const [auth]=useAuth()
  const navigate=useNavigate()



  const  DeleteConfirm=(categoryName)=>{

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
            console.log(categoryName)
          const data={
              categoryName
          }
         if(auth?.token){
           axios.delete("/delete-category ",{data})
             .then(data=>{

              if(data?.data?.success){

                window.location.reload()

              }else{
                  setError("this Categoty have a book or something wrong")
              }
             })
             .catch(e=> console.log(e))
         }





        }
    })

}


const editCategory=async(id)=>{

navigate("/all-category/"+id)

}

  return (
    <div>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h6 className="card-title">All Category</h6>
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
              {category.map((category,key)=>{
               
                return <CTableRow>
                  <CTableDataCell style={{ fontSize: '14px', color: '#8E98AA' }}>{key+1}</CTableDataCell>
                  <CTableDataCell style={{ fontSize: '14px', color: '#57606f' }}> {category.name}</CTableDataCell>


                  <CTableDataCell style={{}}> <img  src={category.photoUrl} width={'30'} height={'30'} /> </CTableDataCell>
                  <CTableDataCell className="d-flex align-items-center  justify-content-center w-full">

                    <CButton
                      // onClick={() => onDelete(blog?.blogID)}
                      onClick={()=>editCategory(category._id)}
                     
                      className=" border-0 cursor-pointer me-2 delete_btn_hover"
                      style={{ color: '#ecf0f1',backgroundColor:"#20bf6b" }}
                    >
                      <FiEdit />
                    </CButton>

                    <CButton
                      // onClick={() => onDelete(blog?.blogID)}
                      onClick={()=>DeleteConfirm(category.name)}
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

export default AllCategory;
