import { useEthers } from '@usedapp/core'
import { useEffect, useState } from 'react'

export const Top = () => {
  const [activateError, setActivateError] = useState('')
  const { account, error } = useEthers()

  useEffect(() => {
    if (error) {
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
          className="text-center text-light"
          style={{ backgroundColor: '#f34837' }}
        >
          {activateError}
        </div>
      )}
    </>
  )
}
