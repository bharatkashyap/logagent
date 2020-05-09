import React, { useState, useEffect } from 'react';
import './App.css';

import LogRequest from './LogRequest';
import CurrentTime from './CurrentTime';


const apis = 
  [ { url: "https://jsonplaceholder.typicode.com/comments", name: "comments" },
    { url:"https://jsonplaceholder.typicode.com/photos", name: "photos" },
    { url:"https://jsonplaceholder.typicode.com/todos", name: "todos"},
    { url:"https://jsonplaceholder.typicode.com/posts", name: "posts"}
  ]


function App() {

  const [db, setDb] = useState(null);

  useEffect(() => {
    let request = window.indexedDB.open("TestDatabase");
    
    request.onupgradeneeded = (event) => {
        let db = event.target.result;

        apis.forEach( (api) => {
          db.createObjectStore(api.name, { autoIncrement: true });  
        })
        
        setDb(db);
    }
}, [])

  return (
    <div className="App">
      <header className="App-header">
        Test App
      </header>
      <div className="App-grid">
        {apis.map( (api, index) => {
          return <LogRequest key={index} url={api.url} name={api.name} db={db}></LogRequest>
        }) 
        }
      </div>
      <footer className="App-footer">
       <CurrentTime></CurrentTime>
      </footer>
    </div>
  );
}

export default App;
