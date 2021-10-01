import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [currCompany, setCurrCompany] = useState();

  const fetchData = async () => {
    const callback = await fetch(url);
    const json = await callback.json();
    const newData = new Map(json.map(item => {
      const {company, ...info} = item;
      return [company, info]
    }));
    const newCompany = Array.from(newData.keys())[0];

    setData(newData);
    setCurrCompany(newCompany);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (loading || !currCompany) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const companies = Array.from(data.keys());
  const { title, dates, duties } = data.get(currCompany);

  return (
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {
              companies.map(company => {
                return (
                  <button 
                    key={company} 
                    className={`job-btn ${company === currCompany && 'active-btn'}`} 
                    onClick={() => setCurrCompany(company)}
                  >
                    {company}
                  </button>
                )
              })
            }
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{currCompany}</h4>
            <p className="job-date">{dates}</p>
            {
              duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight />
                    <p>{duty}</p>
                  </div>
                )
              })
            }
          </article>
        </div>
        <button key="button" type="button" className="btn">more info</button>   
      </section>
  )
}

export default App
