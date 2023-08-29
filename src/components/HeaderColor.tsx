import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`
const Rectangle = styled.div`
  background: white;
  height: 100px;
  margin-top: 10px;
  width: 300px;
`

const HeaderColor = () => {
  return (
    <Container>
      <Rectangle />
    </Container>
  )
}

export default HeaderColor
