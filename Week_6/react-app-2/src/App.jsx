import Navbar from './components/Navbar'
import Footer from './components/Footer'
import APIDemo from "./components/APIDemo"
import Counter from './components/counter'
import FormDemo from './components/FormDemo';
import NewForm from './components/NewForm';
function App(){
  return(
    <div>
      {/* <Navbar /> */}
      <div className='m-16 min-h-screen'>
        {/* <Counter/> */}
        {/* <APIDemo/> */}
        {/* <FormDemo/> */}
        <NewForm/>
      </div>

      {/* <Footer /> */}
    </div>

  )
}


export default App