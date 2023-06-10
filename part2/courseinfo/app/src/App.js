const Header = ({ name }) => (
  <div>
    <h1>{name}</h1>
  </div>
)

const Content = ({ parts }) => (
  <div>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </div>
)

const Part = ({ part }) => (
  <div>
    <p>{part.name} {part.exercises}</p>
  </div>
)

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((a, b) => a + b.exercises, 0)

  return (
    <div>
      <p><strong>Total of {totalExercises} exercises</strong></p>
    </div>
  )
}

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
) 

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App
