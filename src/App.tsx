import styled from "styled-components"
import MainColors from "./components/MainColors"
import { colors } from "./styles/colors"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colors.background};
`

function App() {
  return (
    <Container>
      <MainColors />
    </Container>
  )
}

export default App
