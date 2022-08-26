import "../styles/globals.scss";
import { store, persistor } from "../store/index";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Layout } from "../components/Layout/Layout";

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}


