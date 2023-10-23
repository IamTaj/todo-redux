import "@/styles/globals.css"
import { Provider } from "react-redux"
import type { AppProps } from "next/app"
import { persistor, store } from "@/redux-store/store"
import { PersistGate } from "redux-persist/integration/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}
