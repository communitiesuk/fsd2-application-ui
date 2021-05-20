import React from 'react'

const SUMMARY_STATEMENT_ORDER = [
  'isCompetitiveFund',
  'deliveryMethod',
  'applicantTypes',
  'capitalSpend',
  'ringfenced',
]

export const FundSummary = ({ fund, startFundApplication }) => {
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
          <button
            type="button"
            className="btn btn-success"
            onClick={() => startFundApplication(fund)}
          >
            Apply for fund
          </button>
        </>
      ) : (
        ''
      )}
    </>
  )
}
