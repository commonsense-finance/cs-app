import { useState } from 'react'
import { ArrowUpRight } from 'react-bootstrap-icons'

import { WalletModal } from '@components/wallet/controls'
import { selectTheme } from '@redux/slices/theme'
import { useSelector } from 'react-redux'
import { useTranslation } from 'next-i18next'
import { Stack, Heading, Text, Button, HStack } from '@chakra-ui/react'

export const Hero = () => {
  const [showModal, setShowModal] = useState(false)
  const theme = useSelector(selectTheme)
  const { t } = useTranslation()

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <>
      <Stack spacing={10} py={7} align={'center'}>
        <Heading pb="4" as="h1" size="3xl">
          {t('hero_title')}
        </Heading>
        <Text fontSize="xs">{t('hero_text')}{'Que onda?'}</Text>
        <HStack pb="4">
          <Button onClick={handleShow} variant="outline" colorScheme="orange">
            {t('btn_connectWallet')}
          </Button>
          <Button rightIcon={<ArrowUpRight />}>{t('btn_learnMore')}</Button>
        </HStack>
        <WalletModal showModal={showModal} handleClose={handleClose} />
      </Stack>

      {/* <div className={`text-center py-5 text-${theme.textMode}`}>
      <h1>{t('hero_title')}</h1>
      <p className="pb-5">{t('hero_text')}</p>
      <Button className={`me-2`} onClick={handleShow}>
        {t('btn_connectWallet')}
      </Button>
      <Button variant={`outline-${theme.textMode}`}>
        {t('btn_learnMore')} <ArrowUpRight />
      </Button>
      <WalletModal showModal={showModal} handleClose={handleClose} />
    </div> */}
    </>
  )
}
