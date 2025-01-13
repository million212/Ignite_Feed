import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post 
        author="Henrique" 
        content="Henrique é um otimo programador"
      />

      <Post
        author="Camila rodrigues"
        content="Um otima funcionaria para o departamento"
      />
    </div>
  )
}


