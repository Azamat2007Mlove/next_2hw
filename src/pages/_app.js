import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav.jsx";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
