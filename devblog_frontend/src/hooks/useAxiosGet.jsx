import { useEffect, useState } from "react"
import axios from "axios"

function useAxiosGet(url){

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{

        async function getRequest(){
            setLoading(true)

            await axios.get(url)
            .then((res)=>{
                setData(res)
                setLoading(false)
            })
            .catch((err)=>{
                setLoading(false)
                setError(err)
            })
            
        }

        getRequest()
    },[url])

    return {loading, data, error}
}

export default useAxiosGet