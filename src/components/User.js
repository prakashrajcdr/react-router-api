import { useParams } from "react-router-dom"


export default function User(){
    const {id, name} = useParams();
    return <>
        <h1>I am user {id} - {name}</h1>
    </>
}