import { SwitchTheme, WalletButton } from '@components'
import { CSLogo } from '@components/Icons/'
import { selectTheme } from '@redux/slices/theme'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { GetSelectedNetworkStatus } from 'src/services/web3Utils'
import Link from 'next/link'

export const Header = () => {
  const networkStatus = GetSelectedNetworkStatus()
  const theme = useSelector(selectTheme)
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`navbar-${theme.bgMode} bg-transparence`}
    >
      <Navbar.Brand>
        <Link href="/">
          <a>
            <CSLogo />
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <SwitchTheme />
          <Button variant={theme.bgMode}>Demo - {networkStatus}</Button>
        </Nav>
        <Nav>
          <WalletButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
