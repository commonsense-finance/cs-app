import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { ArrowUpRight } from 'react-bootstrap-icons'

import { Button } from '@components/csComponents'
import { WalletModal } from '@components/wallet/controls'
import { selectTheme } from '@redux/slices/theme'
import { useSelector } from 'react-redux'
import { useTranslation } from 'next-i18next'

export const Hero = () => {
  const [showModal, setShowModal] = useState(false)
  const theme = useSelector(selectTheme)
  const { t } = useTranslation()

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <div className={`text-center py-5 text-${theme.textMode}`}>
      <h1>{t('hero_title')}</h1>
      <p className="pb-5">{t('hero_text')}</p>
      <Button className={`me-2`} onClick={handleShow}>
        {t('btn_connectWallet')}
      </Button>
      <Button variant={`outline-${theme.textMode}`}>
        {t('btn_learnMore')} <ArrowUpRight />
      </Button>
      <WalletModal showModal={showModal} handleClose={handleClose} />
    </div>
  )
}
