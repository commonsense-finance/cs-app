import { useEffect } from 'react'
import { selectTheme } from '@redux/slices/theme'
import { Col, Form, Nav, Row, Spinner } from 'react-bootstrap'

import { selectSwap, setTokenFrom, setTokenTo } from '@redux/slices/swap'
import { setAction, setAmoutFrom, setAmoutTo } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import {
  GroupButtons,
  GroupFooter,
  GroupInputFrom,
  GroupInputTo,
  GroupSelectFrom,
  GroupSelectTo,
  GroupSumary,
  ShowNotification,
  TransakButton,
} from './controls'

import { parseUnits } from '@ethersproject/units'
import { BigNumber } from '@ethersproject/bignumber'
import { balanceFormat, useGetSetEstimated } from 'src/services/tokenSetv2'
import { useRouter } from 'next/router'
import { tokensProduct } from 'src/constants/tokens'
import { useTranslation } from 'next-i18next'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const Swap = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const theme = useSelector(selectTheme)
  const { token, tokenProduct, status } = useSelector(selectSwap)
  const dispatch = useDispatch()

  const auxAmount =
    status.action === 'Invest'
      ? parseUnits(status.amountFrom ? status.amountFrom : '0', token.decimals)
      : parseUnits(
          status.amountTo ? status.amountTo : '0',
          tokenProduct.decimals,
        )

  const auxEstimated = useGetSetEstimated(
    tokenProduct.contractPolygon,
    token.contractPolygon,
    auxAmount.toString() !== '0' ? auxAmount : '1000000000000000000',
    status.action,
  )

  const estimated =
    auxAmount.toString() === '0' ? BigNumber.from(0) : auxEstimated

  useEffect(() => {
    dispatch(setTokenTo(tokensProduct[Number(router?.query?.id) || 0]))
  }, [router?.query?.id])

  useEffect(() => {
    dispatch(setAction(router?.query?.action || 'Invest'))
  }, [router?.query?.action])

  useEffect(() => {
    status.action === 'Invest'
      ? dispatch(setAmoutTo(balanceFormat(estimated, tokenProduct.decimals)))
      : dispatch(setAmoutFrom(balanceFormat(estimated, token.decimals)))
  }, [estimated])

  return (
    <div>
      <Tabs
        onChange={(index: number) =>
          dispatch(setAction(index === 0 ? 'Invest' : 'Withdraw'))
        }
        index={status.action === 'Invest' ? 0 : 1}
      >
        <TabList>
          <Tab>{t('btn_invest')}</Tab>
          <Tab>{t('btn_withdraw')}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Row>
              <Col className="col-5">
                <GroupSelectFrom />
              </Col>
              <Col className="col-7">
                <GroupInputFrom />
              </Col>
              <Col className="col-5">
                <GroupSelectTo />
              </Col>
              <Col className="col-7">
                <GroupInputTo />
              </Col>
            </Row>
          </TabPanel>
          <TabPanel>
            <Row>
              <Col className="col-5">
                <GroupSelectTo />
              </Col>
              <Col className="col-7">
                <GroupInputTo />
              </Col>
              <Col className="col-5">
                <GroupSelectFrom />
              </Col>
              <Col className="col-7">
                <GroupInputFrom />
              </Col>
            </Row>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Row>
        <Col>
          <GroupSumary />
          <GroupButtons />
          <TransakButton />
          <GroupFooter />
        </Col>
      </Row>

      {/* {status.transactionStatus?.status === 'Mining' && (
            <>
              <Spinner
                variant="primary"
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </>
          )} */}

      <ShowNotification />
    </div>
  )
}
