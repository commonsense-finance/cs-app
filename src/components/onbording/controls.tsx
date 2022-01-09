import Link from 'next/link'
import { Button, Card } from '@components/csComponents'
import { WalletModal } from '@components/wallet/controls'
import { selectContact } from '@redux/slices/contact'
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core'
import { useEffect, useState } from 'react'
import { Col, Form, FormControl, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  setInitial,
  setEmail,
  setName,
  setAccount,
  setStatus,
  setContactAction,
  setContact,
  setContactConnected,
  getContactByAddress,
  getContactByEmail,
} from '@redux/actions'
import { CheckCircle } from 'react-bootstrap-icons'
import { IContact } from '@redux/types'
import { selectTheme } from '@redux/slices/theme'
import {
  balanceFormat,
} from 'src/services/tokenSetv2'
import { tokens } from 'src/constants/tokens'
import { useCoingeckoTokenPrice } from '@usedapp/coingecko'
import { BigNumber } from '@ethersproject/bignumber'

//SERVICES

const AddUpdate = async (contact: IContact) => {
  const action = contact.action == 'Adding' ? 'add' : 'update'
  try {
    const res = await fetch('/api/contact/' + action, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
    console.log(res)
    const newContact = await res.json()
    console.log(newContact)

    if (res.status === 200) {
      alert('You are subscribed!')
    } else {
      alert('Sorry, something went wrong.')
    }
  } catch (error) {
    alert(error)
  }
}

// const updateTag = async (idContact: string, name: string) => {
//   try {
//     const res = await fetch('/api/contact/updateTag', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({idContact, name}),
//     })
//     console.log(res)
//     const updateTag = await res.json()
//     console.log(updateTag)

//     if (res.status === 200) {
//       alert('You are subscribed!')
//     } else {
//       alert('Sorry, something went wrong.')
//     }
//   } catch (error) {
//     alert(error)
//   }
// }

// WALLET BUTTON
const WalletButton = () => {
  const contact = useSelector(selectContact)
  const { account, error, deactivate } = useEthers()
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const [activateError, setActivateError] = useState('')

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  const handleGetContactByAddress = () => {
    dispatch(getContactByAddress(account || ''))
  }

  useEffect(() => {
    if (error) {
      setActivateError(error.message)
    }
  }, [error])

  useEffect(() => {
    if (account) {
      if (contact.isLogin) {
        if (contact.merge_fields.STATUS === 'Not Connected') {
          dispatch(setContactConnected(account))
        }
      } else {
        dispatch(setAccount(account))
        dispatch(setStatus('Connected'))
        handleGetContactByAddress()
      }
    } else {
      if (!contact.isLogin) {
        dispatch(setAccount(''))
        dispatch(setStatus('Not Connected'))
      }
    }
  }, [account])

  return (
    <>
      {!account ? (
        <Button className="me-2" onClick={handleShow}>
          Connect Wallet
        </Button>
      ) : (
        <Button className="me-2" onClick={deactivate}>
          Disconnect
        </Button>
      )}
      <WalletModal showModal={showModal} handleClose={handleClose} />
    </>
  )
}

// FORMS

const AddUpdateForm = () => {
  const contact = useSelector(selectContact)
  const dispatch = useDispatch()

  const handleCancel = () => {
    dispatch(setContactAction('Saved'))
  }

  const handleDone = () => {
    dispatch(setContact())
    dispatch(setContactAction('Saved'))
  }

  return (
    <Form>
      <Row className="pb-3">
        <Col sm={5}>
          <Form.Control
            value={contact.merge_fields?.FNAME}
            onChange={(e) => {
              dispatch(setName(e.currentTarget.value))
            }}
            placeholder="Your Name"
          />
        </Col>
        <Col sm={7}>
          <FormControl
            value={contact.email}
            onChange={(e) => {
              dispatch(setEmail(e.currentTarget.value))
            }}
            placeholder="Your Email"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <WalletButton />
        </Col>
        <Col className="text-end">
          <Button className="me-2" onClick={handleDone}>
            Save
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </Col>
      </Row>
    </Form>
  )
}

//LOGIN
const LoginForm = () => {
  const contact = useSelector(selectContact)
  const dispatch = useDispatch()

  // const handleGetContactByEmail = async () => {
  //   const findingContact = await getContactByEmail(contact.email)
  //   findingContact.total_items !== 0 &&
  //     dispatch(setContact(findingContact.members[0]))
  // }

  const handleGetContactByEmail = () => {
    dispatch(getContactByEmail(contact.email))
  }

  return (
    <>
      <Form>
        <Row>
          <Col>
            <FormControl
              value={contact.email}
              onChange={(e) => {
                dispatch(setEmail(e.currentTarget.value))
              }}
              placeholder="Your Email"
            />
          </Col>
          <Col xs="auto">
            <Button className="me-2" onClick={handleGetContactByEmail}>
              Log In
            </Button>
            <WalletButton />
          </Col>
        </Row>
      </Form>
    </>
  )
}

export const Login = () => {
  const theme = useSelector(selectTheme)
  const contact = useSelector(selectContact)
  const dispatch = useDispatch()

  const handleStartOnbording = () => {
    dispatch(setContactAction('add'))
  }
  return (
    <div className="pb-5">
      <Row>
        <Col>
          <h2>1. Log In </h2>
        </Col>
        <Col className="text-end">
          {contact.action !== 'add' && (
            <Button
              variant="link"
              className={`text-${theme.textMode} pt-3`}
              onClick={handleStartOnbording}
            >
              Start Onbording
            </Button>
          )}
        </Col>
      </Row>
      <Card>{contact.action == 'add' ? <AddUpdateForm /> : <LoginForm />}</Card>
    </div>
  )
}

const LoginLayout = () => {
  const contact = useSelector(selectContact)

  const { deactivate } = useEthers()
  const dispatch = useDispatch()

  const handleLogout = () => {
    console.log('handleLogout')
    deactivate()
    dispatch(setInitial(''))
  }

  const handleEdit = () => {
    dispatch(setContactAction('update'))
  }

  return (
    <>
      <p>{contact.merge_fields.FNAME}</p>
      <p>{contact.email}</p>
      <p className="pb-3">{contact.merge_fields.ADDRESS}</p>
      <Row className="align-items-center">
        <Col sm={5}>
          <Button onClick={() => handleEdit()}>Edit</Button>
        </Col>
        <Col sm={7} className="text-end">
          {' '}
          <WalletButton />
          <Button onClick={() => handleLogout()}>Close All</Button>
        </Col>
      </Row>
    </>
  )
}

export const Logout = () => {
  const contact = useSelector(selectContact)

  return (
    <div className="pb-5">
      <h2>
        1. Your Account{' '}
        <CheckCircle className="ms-1" size="27px" color="#75bfc0" />
      </h2>
      <Card>
        {contact.action == 'update' ? <AddUpdateForm /> : <LoginLayout />}
      </Card>
    </div>
  )
}

//WALLET

export const Wallet = () => {
  const contact = useSelector(selectContact)
  const isConnected = contact.merge_fields.STATUS !== 'Not Connected'

  return (
    <div className="pb-5">
      <h2>
        2. Wallet{' '}
        {isConnected && (
          <CheckCircle className="ms-1" size="27px" color="#75bfc0" />
        )}
      </h2>
      <Card>
        {isConnected ? (
          <p>Metamask Connected</p>
        ) : (
          <p>How to install Metamask? Do you need help?</p>
        )}
      </Card>
    </div>
  )
}

//FUNDS

const tokenTotal = (balance: string, price: string | undefined) => {
  return (Number(price) * Number(balance)).toFixed(2)
}

const TokenBalance = (token: any) => {
  const { account } = useEthers()
  const balance = balanceFormat(
    useTokenBalance(token.contractPolygon, account) || 0,
  )
  const price = useCoingeckoTokenPrice(
    token.contractPolygon,
    'usd',
    'polygon-pos',
  )

  const total = tokenTotal(balance, price)

  console.log(Number(total))

  return (
    <Row>
      <Col>
        {token.symbol}: {balance}
      </Col>
      <Col className='text-end'>{total}</Col>
      <Col>
      {
        Number(total) !== 0 &&
        <Link
          href={{
            pathname: '/token/0',
            query: { id: 0 },
          }}
        >
          <a className="btn-sm me-2">{account ? 'Invest' : 'View'}</a>
        </Link>
      }
      </Col>
    </Row>
  )
}

export const Funds = () => {
  const { account } = useEthers()
  const balance = useEtherBalance(account)

  return (
    <div className="pb-5">
      <h2>3. Funds & Invest</h2>
      <Card>
        <p className="pb-3">
          MATIC Balance: {balanceFormat(balance || 0)}{' '}
          {!balance ? (
            'Please buy MATIC'
          ) : (
            <CheckCircle className="ms-1" size="15px" color="#75bfc0" />
          )}
        </p>
        {tokens.map((token) => (
          <TokenBalance key={token.id} {...token} />
        ))}
      </Card>
    </div>
  )
}
