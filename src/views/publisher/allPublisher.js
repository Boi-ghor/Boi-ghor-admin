import React from 'react';
import {useNavigate}from 'react-router-dom'
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
import {usePublisher} from "../../components/context/publisher";


const AllPublishers = () => {
  const navigate=useNavigate()
  const [publisher]=usePublisher()
  return (
    <div>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h6 className="card-title">All Publishers</h6>
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
              {publisher.map((x,key)=>{
                return <CTableRow>
                  <CTableDataCell style={{ fontSize: '14px', color: '#8E98AA' }}>{key+1}</CTableDataCell>
                  <CTableDataCell style={{ fontSize: '14px', color: '#57606f' }}> {x.publisherName}</CTableDataCell>


                  <CTableDataCell style={{}}> <img  src={x.photoURL} width={'40'} height={'40'} /> </CTableDataCell>
                  <CTableDataCell className="d-flex align-items-center  justify-content-center w-full">

                    <CButton
                      onClick={() => navigate(`/publisher/${x._id}`)}
                      className=" border-0 cursor-pointer me-2 delete_btn_hover"
                      style={{ color: '#ecf0f1',backgroundColor:"#20bf6b" }}
                    >
                      <FiEdit />
                    </CButton>
                    <CButton
                      // onClick={() => onDelete(blog?.blogID)}
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

export default AllPublishers;
