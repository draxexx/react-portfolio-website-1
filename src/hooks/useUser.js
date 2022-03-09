import { useEffect, useState } from "react"

const useUser = () => {
    const [data, setData] = useState({
        email:"",
        name:"",
        jobTitle:"",
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("data fetching...");
        
        // will be called after 2000 ms
        // async
        return setTimeout(() => {
            const userData = {
                email:"test@hotmail.com",
                name:"John Kennen",
                jobTitle:"Full Stack Developer",
            };
            setData(userData);

            setIsLoading(false);
        }, 2000);
    }, [])

    return [data, isLoading];
}

export default useUser