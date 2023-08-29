import styled from "styled-components"
import HeaderColor from "./components/HeaderColor"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #29272f;
`

function App() {
  return (
    <Container>
      <HeaderColor />
    </Container>
  )
}

export default App
