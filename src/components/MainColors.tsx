import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { invoke } from "@tauri-apps/api/tauri"

const Container = styled.div`
  display: flex;
  background: yellow;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`

const Square = styled.div`
  position: relative;
  top: 40px;
  background: red;
  height: 40px;
  width: 40px;
  margin: 10px;
`

const MainColors = () => {
  const [response, setResponse] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data: any = await invoke("get_colors")
      console.log(data)
      setResponse(data)
    }
    fetchData()
  })

  return (
    <Container>
      {[...Array(5)].map((index, i) => {
        return <Square key={`${index} - ${i}`} />
      })}
    </Container>
  )
}

export default MainColors
