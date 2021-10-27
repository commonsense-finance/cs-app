import { selectTheme } from "@redux/slices/theme"
import { useDispatch, useSelector } from "react-redux"
import { Button } from 'react-bootstrap'
import { changeTheme } from '../../redux/actions'
import { Sun, Moon } from 'react-bootstrap-icons';


export const SwitchTheme = () => {
    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()
    return (
        
        <Button  
            className={`me-2 btn btn-${theme.bgMode}`} 
            onClick={()=>dispatch(changeTheme())}>
            {theme.darkMode ? <Sun />  : <Moon />} 
        </Button>
    )
}