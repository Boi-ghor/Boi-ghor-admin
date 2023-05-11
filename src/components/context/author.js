import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";
const authorContext=createContext()
const AuthorProvider = ({children}) => {
  const [author,setAuthor]=useState([])

  useEffect(()=>{

    axios.get('/authors').then(data=>setAuthor(data.data.data))
  },[])
  return (
    < authorContext.Provider value={[author]}>
      {children}
    </authorContext.Provider>
  );
};
const useAuthor= ()=> useContext(authorContext)
export {useAuthor,AuthorProvider};
