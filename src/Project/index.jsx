import './index.css'
import React, { useState } from 'react'
import Data from './Data'

const Index = () => {
  const [data, setdata] = useState(true)
  const [value, setValue] = useState("5 Birthday's Today")
  const Clear = () => {
    setdata(false)
    setValue("0 Birthday's Today")
  }
  return (
    <>
      <main>
        <section className="container">
          <h3>{value}</h3>
          {data && <Data />}
          <div className="wrapper">
            <button onClick={Clear}>Clear All</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Index
