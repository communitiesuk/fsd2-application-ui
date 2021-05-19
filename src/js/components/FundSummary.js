import React from 'react'

const SUMMARY_STATEMENT_ORDER = ['fundType', 'deliveryMethod', 'applicantTypes']

export const FundSummary = ({ fund }) => {
  const summary = fund.summary

  return (
    <>
      <h3>Fund</h3>
      {Object.keys(summary).length ? (
        <>
          {SUMMARY_STATEMENT_ORDER.map((statementKey, idx) => {
            if (statementKey in summary) {
              return <p key={idx}>{summary[statementKey]}</p>
            }
          })}
        </>
      ) : (
        ''
      )}
    </>
  )
}
