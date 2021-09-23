import { WalletButton } from '@components'
import Link from 'next/link'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { GetSelectedNetworkStatus } from 'src/services/web3Utils'

export const Header = () => {
  const networkStatus = GetSelectedNetworkStatus()
  return (
    <Container fluid className="py-2">
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link href="/">
              <img src="/icons/csLogo.svg" alt="" width="200"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button variant="light">Demo v1.0 {networkStatus}</Button>
            </Nav>
            <Nav>
              <WalletButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}
