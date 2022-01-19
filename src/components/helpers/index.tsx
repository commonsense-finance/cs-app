import { tokensImage } from 'src/constants/tokens'

import Link from 'next/link'
import { useRouter } from 'next/router'

export const TokenLogo = (props: { symbol: string }) => {
  return (
    <img
      //@ts-ignore
      src={tokensImage[props.symbol]}
      alt=""
      width="23"
      className="me-2 rounded"
    ></img>
  )
}

export const ChangeLocale = () => {
  const router = useRouter()
  return (
    <div>
      <Link href="" locale={'es'}>
        <a className="me-2"><small>ES</small></a>
      </Link>
      <Link href="" locale={'en'}>
        <a><small>EN</small></a>
      </Link>
    </div>
  )
}
