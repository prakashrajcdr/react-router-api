import { Link, useLocation } from "react-router-dom";


export default function Dashboard(){

    const location = useLocation();

    return <>
        <h1>Dashboard View</h1>
        <Link to="/home">Home</Link><br></br>
        <Link to="/user/1">User 1</Link><br></br>
        <Link to="/user/2/prakash">User name</Link>
    </>
}