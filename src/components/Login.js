import { useNavigate } from "react-router-dom";


export default function Login(){
  const navigate = useNavigate();

  function onLogin(){
    navigate('/dashboard');
  }
    return <>
      <button onClick={onLogin}>Login</button>
    </>
}