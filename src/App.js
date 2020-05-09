import React, { useState, useEffect } from 'react';
import './App.css';

import LogRequest from './LogRequest';
import { Button } from './styles';
import CurrentTime from './CurrentTime';


const apis = 
  [ { url: "https://jsonplaceholder.typicode.com/comments", name: "comments",  delay: 5000 },
    { url:"https://jsonplaceholder.typicode.com/photos", name: "photos",  delay: 5000 },
    { url:"https://jsonplaceholder.typicode.com/todos", name: "todos",  delay: 5000 },
    { url:"https://jsonplaceholder.typicode.com/posts", name: "posts", delay: 5000 }
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
          return <LogRequest key={index} url={api.url} name={api.name} db={db} run={api.runs} delay={api.delay}></LogRequest>
        }) 
        }
      </div>
      <div className="App-buttons-grid">
        {apis.map( (api, index) => {
          return <Button key={index} url={api.url} name={api.name} db={db} onClick={ () => {  }}>Button {index+1}</Button>
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
