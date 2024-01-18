import { useState } from "react";
import { useDispatch } from "react-redux";
import { passMessage } from "../slice/messageSlice";

export default function LeftRedux(){
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();
    function handleChange(event){
        const value = event.target.value;
        dispatch(passMessage(value));
        setMsg(value);
    }

    return <>
        <input type="text" value={msg} onChange={(e) => handleChange(e)} />
    </>;
}