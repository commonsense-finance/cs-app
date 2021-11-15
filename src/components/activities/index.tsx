import { selectTheme } from '@redux/slices/theme'
import { Card, Dropdown, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Layers } from 'react-bootstrap-icons'
import { useEthers, useTransactions } from '@usedapp/core'

export const Activities = () => {
  const theme = useSelector(selectTheme)
  const { account } = useEthers()
  const { transactions } = useTransactions()
  
  return (
    <>
      {account && (
        <Dropdown align="end">
          <Dropdown.Toggle
            className="me-2"
            variant={theme.bgMode}
            id="dropdown-basic"
          >
            {true ? (
              <Layers />
            ) : (
              <Spinner
                variant="primary"
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
          </Dropdown.Toggle>

          <Dropdown.Menu className={`border-0 bg-transparent`}>
            <Card
              className={`border-1 text-${theme.textMode} bg-${theme.bgMode}`}
              style={{ width: '19rem' }}
            >
              <Card.Header>
                <span className="float-start">
                  <strong>Recent Activity</strong>
                </span>
              </Card.Header>
              <Card.Body style={{ backgroundColor: theme.bgSoftColor }}>
              

        {transactions.map((tx) => (
              <div>{tx.transactionName}</div>

        

        
          
        ))}
                Recent activities not found.
              </Card.Body>
            </Card>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  )
}
