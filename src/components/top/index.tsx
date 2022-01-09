import { useEthers } from '@usedapp/core'
import { useEffect, useState } from 'react'
import { AddChainToMetamask } from '@components/metamask'
import { Col, Row } from 'react-bootstrap'

//Unsupported chain id: 1. Supported chain ids are: 137.

export const Top = () => {
  const [activateError, setActivateError] = useState('')
  const { account, error } = useEthers()

  useEffect(() => {
    if (error) {
      console.log('error-> ', error)
      setActivateError(error.message)
    }
  }, [error])

  useEffect(() => {
    if (account) {
      setActivateError('')
    }
  }, [account])

  return (
    <>
      {activateError !== '' && (
        <div
          className="text-light py-2"
          style={{ backgroundColor: '#f34837' }}
        >
          <Row>
            <Col className='text-end pt-1'>
              <p>{activateError}</p>
            </Col>
            <Col className='text-start'>
              <AddChainToMetamask />
            </Col>
          </Row>
        </div>
      )}
    </>
  )
}
