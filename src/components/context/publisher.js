import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";
const publisherContext=createContext()
const PublisherProvider = ({children}) => {
  const [publisher,setPublisher]=useState([])
  useEffect(()=>{
    axios.get('publishers').then(data=>setPublisher(data.data.data))
  },[])
  return (
    < publisherContext.Provider value={[publisher]}>
      {children}
    </publisherContext.Provider>
  );
};
const usePublisher= ()=> useContext(publisherContext)
export {usePublisher,PublisherProvider};
