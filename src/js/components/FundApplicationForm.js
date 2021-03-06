import React from 'react'

const QUESTION_ORDER = ['strategicFit', 'orgType', 'capitalSpend']

export const FundApplicationForm = ({ applicationQuestions }) => {
  return (
    <>
      {applicationQuestions && Object.keys(applicationQuestions).length ? (
        <>
          <h2>Application Form</h2>
          {QUESTION_ORDER.map((questionKey, idx) => {
            if (questionKey in applicationQuestions) {
              const question = applicationQuestions[questionKey]
              return (
                <div key={idx} className={'example-application-question'}>
                  <p>{question.text}</p>
                  {question.options &&
                    question.options.map((option, optIdx) => (
                      <div key={optIdx}>
                        <input
                          name={questionKey}
                          id={`${questionKey}opt${optIdx}`}
                          type={'radio'}
                          value={option.value}
                        />
                        <label htmlFor={`${questionKey}opt${optIdx}`}>
                          {option.text}
                        </label>
                      </div>
                    ))}
                </div>
              )
            }
          })}
        </>
      ) : (
        ''
      )}
    </>
  )
}
