import {
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@components/Icons/'
import { selectTheme } from '@redux/slices/theme'
import { useSelector } from 'react-redux'

export const Footer = () => {
  const widthIcons = '18'
  const theme = useSelector(selectTheme)
  return (
    <div
      className={`fixed-bottom text-center py-2 text-${theme.textMode}`}
    >
      <ul className="d-flex justify-content-center list-unstyled p-0 m-0">
        <li className={`mx-2 `}>
          <GitHubIcon />
        </li>
        <li className="mx-2">
          <TwitterIcon />
        </li>
        <li className="mx-2">
          <LinkedinIcon />
        </li>
      </ul>
      <div >
        © 2021 Common Sense, Inc
      </div>
    </div>
  )
}
