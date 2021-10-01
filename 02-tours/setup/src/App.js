import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const callback = await fetch(url);
      const json = await callback.json();

      setData(json);
      setLoading(false);
    }
    
    fetchData();
  }, []);

  return (
    <main>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <div className="title">
              <h2>{data.length ? 'Our Tours' : 'Np tours left'}</h2>
              <div className="underline"></div>
            </div>
            <Tours data={data} />
          </>
        )
      }
    </main>
  )
}

export default App
