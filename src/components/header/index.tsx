import { SwitchTheme, Activities, Wallet } from '@components'
import { CSLogo, MenuIcon } from '@components/Icons/'
import { selectTheme } from '@redux/slices/theme'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useEthers } from '@usedapp/core'
import { Flex, Box } from '@chakra-ui/react'
import { useState } from 'react'

export const Header = () => {
  const theme = useSelector(selectTheme)
  const { account } = useEthers()
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <>
      <Flex
        pt={1}
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
      >
        <Box>
        <Link href="/">
            <a>
              <CSLogo />
            </a>
          </Link>
        </Box>
        
        <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
          <MenuIcon width={'25'} height={'25'}/>
        </Box>

        <Box
          display={{ base: show ? 'block' : 'none', md: 'block' }}
          flexBasis={{ base: '100%', md: 'auto' }}
        >
          <Flex
            align="center"
            
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            pt={[4, 4, 0, 0]}
          > 
            <SwitchTheme />
            <Wallet />
          </Flex>
        </Box>
        
      </Flex>

      {/* <Navbar
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
             <Activities /> 
            <Wallet />
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </>
  )
}
