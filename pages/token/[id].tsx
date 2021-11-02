import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateTokenProduct,
  setActiveTokenProduct,
  setTokenToById,
  setAction,
} from '@redux/actions'
import { Col, Row, Container } from 'react-bootstrap'
import {
  TokenAbout,
  TokenComponents,
  TokenHeader,
  TokenStats,
  Swap,
} from '@components'

import { selectTheme } from '@redux/slices/theme'
import { selectSwap } from '@redux/slices/swap'
import { Default, Desktop } from '@components/mediaQuery'
import { useWeb3React } from '@web3-react/core'

const Token = () => {
  
  const theme = useSelector(selectTheme)
  const router = useRouter()
  const { token } = useSelector(selectSwap)
  const { library } = useWeb3React()
  const dispatch = useDispatch()



  return (
    <>
      <h1>token nro: {router.query.id}</h1>
    </>
  )
}

export default Token
