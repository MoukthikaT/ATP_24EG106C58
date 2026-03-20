import './App.css'
import Footer from './components/Footer.jsx'
import UserList from './components/UsersList.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  return (
    <>
      <Navbar />
      <div className='m-3 min-h-screen'>
        <UserList />
      </div>

      <Footer />
    </>
  )
}

export default App
