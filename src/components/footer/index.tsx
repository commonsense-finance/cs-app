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
    <div className={`text-center py-4`}>
      <ul className="d-flex justify-content-center list-unstyled p-0 m-0">
        <li className={`mx-2`}>
          <a
            href="https://github.com/commonsense-finance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://twitter.com/Commonsense_fin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        </li>

        <li className="mx-2">
          <a
            href="https://www.linkedin.com/company/common-sense-defi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://www.instagram.com/commonsense_finance/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </li>

        <li className="mx-2">
          <a
            href="https://commonsense-finance.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MediumIcon />
          </a>
        </li>
      </ul>
      <div>© 2022 Common Sense Technologies SL</div>

      <ChangeLocale />
    </div>
  )
}
