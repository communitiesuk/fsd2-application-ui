import React, { useEffect, useState } from 'react'

import { clearFunds, getFunds } from './services'
import { FundApplicationForm } from './components/FundApplicationForm'
import { FundSummary } from './components/FundSummary'
import { ResetButton } from './components/ResetButton'

const App = () => {
  const [fundApplicationInProgress, setFundApplicationInProgress] = useState(
    null
  )

  const [publishedFunds, setPublishedFunds] = useState([])
  const [showResetButton, setShowResetButton] = useState(false)

  const handleResetClick = () => {
    clearFunds((result) => {
      if (result) {
        updateFundsList()
      }
    })
  }

  const updateFundsList = () => {
    getFunds((funds) => {
      setPublishedFunds(funds)
    })
  }

  useEffect(() => {
    updateFundsList()
  }, [])

  useEffect(() => {
    if (window.location.search.indexOf('showControls=yes') > -1) {
      setShowResetButton(true)
    }
  }, [])

  return (
    <>
      <ResetButton
        showResetButton={showResetButton}
        handleResetClick={handleResetClick}
      />
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
