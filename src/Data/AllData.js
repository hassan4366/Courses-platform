import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


const apiValue = createContext()

function AllData({children}) {
    const [text, setText] = useState([])
    useEffect(() => {
        axios
          .get("/js/data.json")
          .then((response) => setText(response.data.courses));
    },[])
  return (
    <apiValue.Provider value={text}>
      {children}
    </apiValue.Provider>
  )
}

export { apiValue, AllData }