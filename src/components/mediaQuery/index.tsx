import { useMediaQuery } from 'react-responsive'

export const Desktop = (props: { children: JSX.Element }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? props.children : null
}
export const Tablet = (props: { children: JSX.Element }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? props.children : null
}
export const Mobile = (props: { children: JSX.Element }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? props.children : null
}
export const Default = (props: { children: JSX.Element }) => {
  //const isNotMobile = useMediaQuery({ minWidth: 768 })
  const isNotMobile = useMediaQuery({ maxWidth: 991 })
  return isNotMobile ? props.children : null
}
