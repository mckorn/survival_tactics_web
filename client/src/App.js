import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then( // fetching this api route from server.js
      reponse => reponse.json() // the respond is res.json
    ).then(
      data => {
        setBackendData(data) // get the data in json and set the data to the var
      }
    )
  }, []) // empty array means it will only run on first render
  
  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
      )}
    </div>
  )
}

export default App