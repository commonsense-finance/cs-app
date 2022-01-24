
import { useDispatch } from 'react-redux'
import { changeTheme } from '../../redux/actions'
import { Sun, Moon } from 'react-bootstrap-icons'
import { useColorMode, Button } from '@chakra-ui/react'

export const SwitchTheme = () => {
  const dispatch = useDispatch()
  const { colorMode, toggleColorMode } = useColorMode()

  const handleColorMode = () => {
    
    //dispatch(changeTheme())
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
