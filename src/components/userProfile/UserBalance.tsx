import { selectTheme } from '@redux/slices/theme'
import { useEthers } from '@usedapp/core'
import { useTranslation } from 'next-i18next'
import { useSelector } from 'react-redux'
import { tokensProduct } from 'src/constants/tokens'
import { currencyFormat, useTotalBalance } from 'src/services/tokenSetv2'
import { Stack, Heading, Text } from '@chakra-ui/react'

export const UserBalance = () => {
  const theme = useSelector(selectTheme)
  const { t } = useTranslation()
  const { account } = useEthers()
  const totalBalance = useTotalBalance(tokensProduct, account)

  // return (
  //   <div className={`text-center py-5 text-${theme.textMode}`}>
  //     <p className='pb-2'>{t('userProfile_text')}</p>
  //     <h1>{currencyFormat(totalBalance)}</h1>
  //   </div>
  // )

  return (
    <Stack spacing={2} pb={5} align={'center'} >
      <Text fontSize='xs'>{t('userProfile_text')}</Text>
      <Heading as="h1" size="3xl" isTruncated>
        {currencyFormat(totalBalance)}
      </Heading>
    </Stack>
  )
}
