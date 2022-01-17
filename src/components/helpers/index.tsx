import { tokensImage } from 'src/constants/tokens'

export const TokenLogo = (props: { symbol: string }) => {
  return (
    <img
      //@ts-ignore
      src={tokensImage[props.symbol]} //CONTROLADO....
      alt=""
      width="23"
      className="me-2 rounded"
    ></img>
  )
}
