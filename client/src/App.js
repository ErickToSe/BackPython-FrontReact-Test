import React, { useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/modelo").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.members === 'undefined') ? (
        <p>
          Loading...
        </p>
      ) : (
        <p>
          {data}
        </p>
      )}
    </div>
  )
}

export default App