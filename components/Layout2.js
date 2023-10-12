import Footer from "../components/Footer/Footer";
import Header2 from "./Header/Header2";


export default function Layout2({children}) {
  return (
    <>
      <Header2/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}