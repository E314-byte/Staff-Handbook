import React from 'react';
import axios from 'axios';

export default function Axios() {
    const [data, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then(data => setUsers(data));
    });

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/user/');
            console.log(response.data);
            // console.log(response.data.Photo);
            return response.data;

        } catch (error) {
            console.error(error);
            return [];
        }
    };

}