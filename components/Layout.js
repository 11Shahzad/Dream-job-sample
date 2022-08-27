import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mininavbar from './Mininavbar'


const Layout = (props) => {
  return (
    <div>
<Navbar/>
<Mininavbar/>

{props.children}
<Footer/>
    </div>
  )
}

export default Layout