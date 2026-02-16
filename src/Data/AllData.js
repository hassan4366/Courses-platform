import axios from 'axios'
import React, { createContext, use } from 'react'


const apiValue = createContext()

function AllData({children}) {
    const {text,setText} = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setText(response.data))
    },[])
  return (
    <apiValue.Provider value={text}>
      {children}
    </apiValue.Provider>
  )
}

export default AllData