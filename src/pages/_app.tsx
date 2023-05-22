import { AuthProvider } from '@/context/authContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'react-quill/dist/quill.snow.css'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ultra Express</title>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
    )
}
