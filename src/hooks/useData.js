import { useEffect, useState } from "react"

const useData = () => {
    const [programs, setPrograms] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/programs')
            .then(res => res.json())
            .then(data => setPrograms(data))
    }, [])
    return programs;
}
export default useData;