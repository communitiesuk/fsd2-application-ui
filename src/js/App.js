import React, { useEffect, useState } from 'react'

import { getEvents } from './services'

const FundSummary = ({ fundNumber, fundSetup }) => {
  return (
    <>
      <h3>Fund {fundNumber}</h3>
      {fundSetup.formulateQ1 === 'yes' ? (
        <p>
          <b>Competitive</b> fund.
        </p>
      ) : (
        ''
      )}
      <p>
        The fund will be delivered by <b>{fundSetup.formulateQ2}</b>.
      </p>
      {fundSetup.formulateQ2 === 'direct award' ? (
        <p>
          Applicants can include: Local authorities, charities and businesses.
        </p>
      ) : (
        ''
      )}
    </>
  )
}

const App = () => {
  // For now we are clumsily viewing each fundPublished event as an Available Fund
  const [fundPublishedEvents, setFundPublishedEvents] = useState([])

  useEffect(() => {
    getEvents('fundPublished', (data) => {
      setFundPublishedEvents(data.events)
    })
  }, [])

  return (
    <>
      <h1>Fund Application UI (FSD-Proto-2) v0.1</h1>
      <h2>Available Funds</h2>
      {fundPublishedEvents.length ? (
        fundPublishedEvents.map((eventData, idx) => (
          <FundSummary
            key={idx}
            fundNumber={eventData.seq}
            fundSetup={JSON.parse(eventData.data).value}
          />
        ))
      ) : (
        <>
          <p>No funds.</p>
        </>
      )}
    </>
  )
}

export default App
