import Navigation from "../components/NavigationBar/Navigation";
import "../index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
