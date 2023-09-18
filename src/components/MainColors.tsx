import { useEffect, useState } from "react"
import styled from "styled-components"
import { invoke } from "@tauri-apps/api/tauri"

const MainColors = () => {
  const [response, setResponse] = useState("#fff")
  const [locked, setLocked] = useState<boolean[]>([])

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
  })

  const handleDoubleClick = (index: number) => {
    navigator.clipboard.writeText(response[index])
  }

  const handleLock = (index: number) => {
    const newLocked = [...locked]
    newLocked[index] = !newLocked[index]
    setLocked(newLocked)
  }

  return (
    <Container>
      {[...Array(5)].map((index, i) => {
        return (
          <Square
            key={`${index} - ${i}`}
            color={response[i]}
            onClick={() => handleClick(i)}
            onDoubleClick={() => handleLock(i)}
            borderColor={locked[i] ? "white" : "transparent"}
          />
        )
      })}
    </Container>
  )
}

export default MainColors

interface SquareProps {
  color: string
  borderColor: string
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Square: React.FC<SquareProps> = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 5px;
  background: ${(props) => props.color};
  border: 2px solid ${(props) => props.borderColor};

  &:hover {
    border: 2px solid white;
  }
`
