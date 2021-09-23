// components/layout.js

import { Header, Footer } from "@components";

export default function Layout(props: { children: JSX.Element }) {

  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
