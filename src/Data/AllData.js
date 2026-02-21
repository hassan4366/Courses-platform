import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


const apiValue = createContext()

function AllData({children}) {
    const [text, setText] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        axios
          .get("/js/data.json")
          .then((response) => setText(response.data))
          .catch((err) => setError(err));
    },[])
  return (
    <apiValue.Provider value={{ data: text, error }}>
      {children}
    </apiValue.Provider>
  )
}

export { apiValue, AllData }