import { ChangeLocale } from '@components/helpers'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  MediumIcon,
  TwitterIcon,
} from '@components/Icons/'
import { selectTheme } from '@redux/slices/theme'
import { useSelector } from 'react-redux'

export const Footer = () => {
  const theme = useSelector(selectTheme)
  return (
    <div className={`text-center py-4 text-${theme.textMode}`}>
      <ul className="d-flex justify-content-center list-unstyled p-0 m-0">
        <li className={`mx-2 `}>
          <a
            href="https://github.com/commonsense-finance"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-${theme.textMode}`}
          >
            <GitHubIcon />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://twitter.com/Commonsense_fin"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-${theme.textMode}`}
          >
            <TwitterIcon />
          </a>
        </li>

        <li className="mx-2">
          <a
            href="https://www.linkedin.com/company/common-sense-defi"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-${theme.textMode}`}
          >
            <LinkedinIcon />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://www.instagram.com/commonsense_finance/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-${theme.textMode}`}
          >
            <InstagramIcon />
          </a>
        </li>

        <li className="mx-2">
          <a
            href="https://commonsense-finance.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-${theme.textMode}`}
          >
            <MediumIcon />
          </a>
        </li>
      </ul>
      <div>© 2021 Common Sense, Inc</div>

      <ChangeLocale />
    </div>
  )
}
