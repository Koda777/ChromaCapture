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

  const handleClick = (index: number) => {
    navigator.clipboard.writeText(response[index])
  }

  const handleLock = async (index: number) => {
    const newLocked = [...locked]
    newLocked[index] = !newLocked[index]
    setLocked(newLocked)
    try {
      await invoke("set_lock", { index: index })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container>
      {[...Array(5)].map((index, i) => {
        return (
          <BoxSquare>
            <Square
              key={`${index} - ${i}`}
              color={response[i]}
              onDoubleClick={() => handleClick(i)}
            />
            <LockContainer onClick={() => handleLock(i)} locked={locked[i]} />
          </BoxSquare>
        )
      })}
    </Container>
  )
}

export default MainColors

interface SquareProps {
  color: string
}

interface LockProps {
  locked: boolean
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const Square: React.FC<SquareProps> = styled.div`
  height: 100px;
  width: 60px;
  background: ${(props) => props.color};
  border: 2px solid;

  &:hover {
    border: 2px solid white;
  }
`

const BoxSquare = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const LockContainer: React.FC<LockProps> = styled.div`
  flex: 1;
  background: ${(props) => (props.locked ? "white" : "black")};
`
