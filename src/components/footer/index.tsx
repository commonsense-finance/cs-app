import Image from 'next/image'
import { primaryColor } from 'src/constants/styles'

export const Footer = () => {
  const widthIcons = '18'

  return (
    <div
      className="fixed-bottom text-center py-2"
      style={{ backgroundColor: primaryColor }}
    >
      
      <ul className="d-flex justify-content-center list-unstyled p-0 m-0">
        <li className="mx-2">
          <img
            src="/icons/github-icon.svg"
            alt="github"
            width={widthIcons}
            height="29"
          />
        </li>
        <li className="mx-2">
          <img
            src="/icons/twitter-icon.svg"
            alt="twitter"
            width={widthIcons}
            height="28"
          />
        </li>
        <li className="mx-2">
          <img
            src="/icons/youtube-icon.svg"
            alt="youtube"
            width={widthIcons}
            height="29"
          />
        </li>
        <li className="mx-2">
          <img
            src="/icons/linkedin-icon.svg"
            alt="linkedin"
            width={widthIcons}
            height="32"
          />
        </li>
      </ul>
      <div className='text-light pb-1'>© 2021 Common Sense, Inc</div>
    </div>
  )
}
