import axios, { AxiosError } from "axios";
import { useCallback } from "react"

type AxiosProps = {
    endpoint: string
}

const useAxios = () => {
    const SERVER_URL = "https://jsonplaceholder.typicode.com"
    const getRequest = useCallback(async (endpoint: AxiosProps) =>
        (await axios.get(`${SERVER_URL}/${endpoint}`)
            .then(response => response.data))
            .catch((error: AxiosError) => error.message)
        , [])

    return { getRequest }
}

export default useAxios;