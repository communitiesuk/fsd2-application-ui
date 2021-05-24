import React from 'react'

export const ResetButton = ({ showResetButton, handleResetClick }) => {
  return (
    <>
      {showResetButton ? (
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleResetClick}
        >
          Clear all Available Funds
        </button>
      ) : (
        ''
      )}
    </>
  )
}
