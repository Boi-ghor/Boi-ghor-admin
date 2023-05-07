import React, {useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import {useAuth} from "../../components/context/auth";

const Login = () => {
  const [auth,setAuth]=useAuth()
  const [loading,setLoading]=useState(false)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const submit=async (e)=>{
    e.preventDefault()
    try{
      setLoading(true)
      const {data}=await axios.post('https://boi-ghor.onrender.com/api/v1/signin',{email,password})
      if(data.user.role===1){
        setLoading(false)
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.data });
        console.log("success")
      }
    }
    catch (e) {

    }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        {loading && <h1>loading</h1>}
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput onChange={event => setEmail(event.target.value)} placeholder="Email"  />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={event => setPassword(event.target.value)}
                        type="password"
                        placeholder="Password"

                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton onClick={submit} color="primary" className="px-4">

                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>

            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
