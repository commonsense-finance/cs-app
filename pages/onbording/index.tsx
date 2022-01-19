import Onbording from "@components/onbording"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export const Index = () => {
 
  return (
    <Onbording />
  )
}

export const getStaticProps = async (props: { locale: any }) => ({
  props: {
    ...await serverSideTranslations(props.locale, ['common']),
  },
}) 

export default Index
