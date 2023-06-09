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
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import {useAuth} from "../../components/context/auth";
import {useNavigate} from "react-router-dom";


const allBooks = () => {
  const [auth,setAuth]=useAuth();
  const [books,setBooks]=useState([]);
  const navigate=useNavigate()

  console.log(books);




  useEffect(()=>{
    axios.get('/books').then(data => setBooks(data.data))
  },[])



  const  DeleteConfirm=(id)=>{

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

        if(auth?.token){
          axios.delete(`/delete-book/${id}`,)
            .then(data=>{
                  console.log(data)
              if(data?.data?.success=== true){
                toast.success("delete Successfully")
                window.location.reload()

              }else{
                toast.error("this Categoty have a book or something wrong")
              }
            })
            .catch(e=> toast.error(e.message))
        }





      }
    })

  }
  return (
    <div>
      <div className="card border-0 shadow-sm">
        {books.length ===0 ? <div className="spinner-border" role="status">
        </div> : ""}
        <div className="card-body">
          <h6 className="card-title">All Books</h6>
          <div className="my-3 d-flex">
            <CFormInput
              placeholder="Search by title"
              className="w-25"
            />
          </div>
          <CTable>
            <CTableHead style={{textAlign:"center"}} >
              <CTableRow style={{backgroundColor:'#dfe6e9'}}>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Id
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Name
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  image
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Category
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3" scope="col" style={{ fontSize: '14px' }}>
                  Price
                </CTableHeaderCell>

                <CTableHeaderCell className="py-3 text-center" scope="col" style={{ fontSize: '14px' }}>
                  Quantity
                </CTableHeaderCell>
                <CTableHeaderCell className="py-3 text-center" scope="col" style={{ fontSize: '14px' }}>
                  Action
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody style={{textAlign:"center"}}>
              {books.map((book,key)=>{
                return <CTableRow>
                  <CTableDataCell  style={{ fontSize: '14px', color: '#8E98AA' }}>{key+1}</CTableDataCell>
                  <CTableDataCell style={{ fontSize: '14px', color: '#57606f' }}> {book?.bookName}</CTableDataCell>
                  <CTableDataCell style={{}}> <img  src={book?.photoURL} width={'50'} height={'40'} /> </CTableDataCell>
                  <CTableDataCell style={{ fontSize: '14px', color: '#57606f' }}>{book?.category[0]?.name}</CTableDataCell>
                  <CTableDataCell style={{ fontSize: '14px', color: '#57606f' }}>{book?.price}</CTableDataCell>
                  <CTableDataCell style={{ fontSize: '14px', color: '#57606f' }}> {book?.quantity} </CTableDataCell>

                  <CTableDataCell className="d-flex align-items-center  justify-content-center w-full">

                    <CButton
                      onClick={()=>navigate(`/books/${book.slug}`)}
                      className=" border-0 cursor-pointer me-2 delete_btn_hover"
                      style={{ color: '#ecf0f1',backgroundColor:"#20bf6b" }}
                    >
                      <FiEdit />
                    </CButton>
                    <CButton
                      onClick={() => DeleteConfirm(book._id)}
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

export default allBooks;
