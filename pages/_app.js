import "../styles/globals.scss";
import { wrapper, store } from "../store/index";
import { Provider } from "react-redux";
import {Header} from "../components/Header/Header"

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Provider store={store}>
          <Header/>
          <Component {...pageProps} />
        </Provider>
      </>
  );
}

export default wrapper.withRedux(MyApp);