import { useEffect, useState } from "react"
import styled from "styled-components"
import { invoke } from "@tauri-apps/api/tauri"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Square = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 5px;
  background: ${(props) => props.color};
`

const MainColors = () => {
  const [response, setResponse] = useState("#fff")

  useEffect(() => {
    async function fetchData() {
      try {
        const data: any = await invoke("get_colors")
        setResponse(JSON.parse(data))
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  return (
    <Container>
      {[...Array(5)].map((index, i) => {
        return <Square key={`${index} - ${i}`} color={response[i]} />
      })}
    </Container>
  )
}

export default MainColors
