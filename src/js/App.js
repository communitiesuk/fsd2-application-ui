import React, { useEffect, useState } from 'react'

import { getFunds } from './services'
import { FundSummary } from './components/FundSummary'

const App = () => {
  const [publishedFunds, setPublishedFunds] = useState([])

  useEffect(() => {
    getFunds((funds) => {
      setPublishedFunds(funds)
    })
  }, [])

  return (
    <>
      <h1>Fund Application UI (FSD-Proto-2) v0.2</h1>
      <h2>Available Funds</h2>
      {publishedFunds.length ? (
        publishedFunds.map((fund, idx) => <FundSummary key={idx} fund={fund} />)
      ) : (
        <>
          <p>No funds.</p>
        </>
      )}
    </>
  )
}

export default App
