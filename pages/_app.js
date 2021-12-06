import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from 'recoil'
import {ContextProvider} from '../contex'


import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";


function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <ContextProvider>
      <Component {...pageProps} />
      </ContextProvider>
      </RecoilRoot>
    </SessionProvider>    
    
  )
  
}

export default MyApp
