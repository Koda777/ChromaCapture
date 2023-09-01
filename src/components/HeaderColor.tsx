import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`
const Rectangle = styled.div`
  background: white;
  height: 110px;
  width: 100%;
  margin-top: 10px;
`

const HeaderColor = () => {
  return (
    <Container>
      <Rectangle />
    </Container>
  )
}

export default HeaderColor
