import Button from "../components/Button";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const usernames = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];
    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            <div className="flex flex-col text-start">
                <h1 className="text-4xl font-bold">Top 5 GitHub Users</h1>
                <p>Tap the username to see more information</p>
            </div>
            <div className="w-full flex flex-wrap mt-10">
                {usernames.map(username => (
                    <Button key={username}
                            callback={() => navigate(`/person/${username}`)}>
                        {username}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default Home;