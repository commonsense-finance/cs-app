
import { SwitchTheme, Activities, Wallet } from '@components'
import { CSLogo } from '@components/Icons/'
import { selectTheme } from '@redux/slices/theme'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useEthers } from '@usedapp/core'

export const Header = () => {
  const theme = useSelector(selectTheme)
  const { account } = useEthers()

  return (
    <>
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
            <Button className="me-2" variant={theme.bgMode}>
              Beta v1.0
            </Button>
            {account && (
              <Button variant={theme.bgMode}>
                <div className="d-inline align-middle">
                  <span className="me-2 badge rounded-circle bg-success p-1">
                    <span className="visually-hidden">unread messages</span>
                  </span>
                  <span>Polygon</span>
                </div>
              </Button>
            )}
          </Nav>
          <Nav>
            {/* <Activities /> */}
            <Wallet />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
