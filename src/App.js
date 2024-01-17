import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import User from './components/User';
import { useEffect, useState } from 'react';

function App() {

  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    fetch("http://localhost:8081/api/getAllCustomers")
    .then(res => res.json())
    .then(data => {
      console.log('api response all customer - ', data);
      setCustomers(data);
    })
    .catch(error => console.log('get all customers error occurred - ', error));
  },[]);

  function handleChangeValue(event){
    const name = event.target.name;
    const value = event.target.value;
    setCustomer(previous => {return {...previous, [name] : value}});
    
  }
  
  function addCustomer(){
    if(customer && customer.name && customer.location){
      fetch("http://localhost:8081/api/addCustomer", {
        method : 'POST',
        body : JSON.stringify(customer),
        headers:{ "Content-Type" : "application/json; charset=UTF-8"}
      })
      .then(res => res.json())
      .then(data => {
        console.log('add customer response - ', data);
        setCustomers(previous => {
          return [...previous, data]
        })
        setCustomer({name: '', location : ''});
      })
      .catch(error => console.log('add customer error occurred - ', error));
    }
  }
    

  return (
    <>
    <div>


      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Location</td>
          </tr>
        </thead>
        <tbody>
          {customers.map((cus, index) => {
            return <tr key={index}>
              <td>{cus.id}</td>
              <td>{cus.name}</td>
              <td>{cus.location}</td>
            </tr>
          })}
          
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td><input type="text" name="name" onChange={handleChangeValue} value={customer.name}/></td>
            <td><input type="text" name="location" onChange={handleChangeValue} value={customer.location}/></td>
          </tr>
        </tfoot>
      </table>
      <button onClick={addCustomer}>Add Customer</button>
     </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login}/>
          <Route path="*" element={<Navigate to="/" />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/home/" element={<Home />}/>
          <Route path="/user" >
            <Route path=":id" element={<User />}/>
            <Route path=":id/:name" element={<User />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
