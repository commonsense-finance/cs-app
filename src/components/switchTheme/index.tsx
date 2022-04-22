
import { Sun, Moon } from 'react-bootstrap-icons'
import { useColorMode, Button } from '@chakra-ui/react'

export const SwitchTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const handleColorMode = () => {
    toggleColorMode()
  } 

  return (
    <Button
      onClick={() => handleColorMode()}
    >
      {colorMode === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
