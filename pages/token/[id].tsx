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


// export async function getStaticPaths(context: any) {
//   const { id } = context.query;
//   return { props: { id: id } };
// }

export async function getStaticProps(  ) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  //const res = await fetch(`https://.../posts/${params.id}`)
  //const post = await res.json()

  // Pass post data to the page via props
  
  return { props: {id: null} }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '0' } },
      { params: { id: '1' } },
      { params: { id: '2' } }, 
      { params: { id: '3' } }// See the "paths" section below
    ],
    fallback: false // See the "fallback" section below
  };
}


const Token = (props: any) => {
  
  const theme = useSelector(selectTheme)
  const router = useRouter()
  const { token } = useSelector(selectSwap)
  const { library } = useWeb3React()
  const dispatch = useDispatch()



  return (
    <>
      <h1>token nro: {router.query.id} token nro: {props.id}</h1>
    </>
  )
}

export default Token
