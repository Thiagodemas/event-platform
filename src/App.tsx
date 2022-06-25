import { gql, useQuery } from "@apollo/client"

type Lesson = {
  id: string
  title: string
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
function App() {
  const {data} = useQuery(GET_LESSONS_QUERY)

  return (
    <ul>
      {data?.lessons.map((lesson: Lesson) => {
        return (<li key={lesson.id}>{lesson.title}</li>)
      })}
    </ul>
  )
}

export default App
