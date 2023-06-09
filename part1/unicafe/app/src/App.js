import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ label, value }) => (
  <div>{label} {value}</div>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (!total) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  
  const getAverage = () => (good - bad) / total
  const getPositivePercentage = () => good / total * 100
  const getPositivePercentageString = () => getPositivePercentage().toString().concat('%')

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine label='good' value={good} />
      <StatisticLine label='neutral' value={neutral} />
      <StatisticLine label='bad' value={bad} />
      <StatisticLine label='all' value={total} />
      <StatisticLine label='average' value={getAverage()} />
      <StatisticLine label='positive' value={getPositivePercentageString()} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incrementGood} text='good' />
      <Button handleClick={incrementNeutral} text='neutral' />
      <Button handleClick={incrementBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App