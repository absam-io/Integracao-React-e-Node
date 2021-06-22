import React , {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import api from './services/api';

function App() {

  const [users,setUsers] = useState([]);


    useEffect(() => {
        api.get("usuarios").then(response => {
          setUsers(response.data);
          console.log(response);
        });

    }, []);

  return (
    <div className="App">
     {users}
    </div>
  );
}

export default App;
