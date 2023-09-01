import styled from "styled-components"
import HeaderColor from "./components/HeaderColor"
import MainColors from "./components/MainColors"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
`
const HeadContainer = styled.div`
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`
function App() {
  return (
    <Container>
      <HeadContainer>
        <HeaderColor />
      </HeadContainer>
      <MainColors />
    </Container>
  )
}

export default App
