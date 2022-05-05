import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    console.log(user);
    const email = user?.email;

    useEffect(() => {
        const getToken = async () => {
            const { data } = await axios.post('https://protected-oasis-61800.herokuapp.com/login', { email });
            localStorage.setItem('Access_Token', data);

            setToken(data);
        }
        getToken();
    }, [user])

    return token;
}

export default useToken;