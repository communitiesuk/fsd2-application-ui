import React, { useEffect, useState } from 'react'

import { getFunds } from './services'
import { FundApplicationForm } from './components/FundApplicationForm'
import { FundSummary } from './components/FundSummary'

const App = () => {
  const [fundApplicationInProgress, setFundApplicationInProgress] = useState(
    null
  )

  const [publishedFunds, setPublishedFunds] = useState([])

  useEffect(() => {
    getFunds((funds) => {
      setPublishedFunds(funds)
    })
  }, [])

  return (
    <>
      <h1>Fund Application UI (FSD-Proto-2) v0.2</h1>
      {!fundApplicationInProgress && publishedFunds.length
        ? publishedFunds.map((fund, idx) => (
            <div key={idx}>
              <h2>Available Funds</h2>
              <FundSummary
                key={idx}
                fund={fund}
                startFundApplication={setFundApplicationInProgress}
              />
            </div>
          ))
        : ''}
      {fundApplicationInProgress ? (
        <>
          <FundApplicationForm
            applicationQuestions={
              fundApplicationInProgress.applicationQuestions
            }
          />
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default App
