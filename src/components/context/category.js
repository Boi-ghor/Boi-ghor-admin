import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";
const categoryContext=createContext()
const CategoryProvider = ({children}) => {
  const [category,setCategory]=useState([])
  useEffect(()=>{
    axios.get('categories').then(data=>setCategory(data.data.category))
  },[])
  return (
  < categoryContext.Provider value={[category]}>
    {children}
  </categoryContext.Provider>
  );
};
const useCategory= ()=> useContext(categoryContext)
export {useCategory,CategoryProvider};
