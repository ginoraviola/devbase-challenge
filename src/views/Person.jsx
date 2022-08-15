import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const Person = () => {
    const [user, setUser] = useState(null);
    const {username} = useParams();

    const getUser = async () => {
        const {data} = await axios.get(`https://api.github.com/users/${username}`);
        setUser(data);
    }

    useEffect(() => {
        getUser();
    }, );

    return (
        <div className="bg-white rounded-lg w-full">
            {!user && (
                <div>Fetching user data...</div>
            )}
            {user && (
                <div className="flex my-3">
                    <img src={user.avatar_url} alt={user.login} className="rounded-full w-20 h-20 mr-5"/>
                    <p className="flex flex-col text-start justify-center">
                        <span className="text-2xl font-semibold">{user.name}</span>
                        <span className="font-thin text-lg">{user.location}</span>
                    </p>
                </div>
                )}
            <hr/>
        </div>
    );
}

export default Person;