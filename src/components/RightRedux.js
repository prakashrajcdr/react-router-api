import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RightRedux(){
    const msg = useSelector(state => state.message);

    // const msg = useSelector(state => state.message);
    return <>
        <input type="text" value={msg} />
    </>;
}