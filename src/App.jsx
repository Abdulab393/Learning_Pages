import { useState } from 'react'
import FeeDeatilPage from './components/FeeDetailPage'
import { PaymentHistory } from './components/PaymentHistory'
import { ProfilePage } from './components/ProfilePage'
import SidebarPage from './components/SidebarPage'
import { useNavigate, Router, Route, BrowserRouter, Routes } from 'react-router-dom'






// const notify1 = () => toast.success('Here is your first toast .');
// const notify2 = () => toast('Here is your second toast.');
// const notify3 = () => toast('Here is your third toast.');
// const notify4 = () => toast('Here is your forth toast.');


// const colorChange = () => {

// }

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='flex h-screen'>
        <div className='bg-red-50 w-64 hidden md:block'>sidebar</div>
        <div className='flex-1 p-10'>
          <BrowserRouter>
            <Routes>
              <Route path='/fee' Component={FeeDeatilPage}> </Route>
              <Route path='/payment' Component={PaymentHistory}></Route>
              <Route path='/' Component={ProfilePage}></Route>
              <Route path='/sidebar' Component={SidebarPage}></Route>
            </Routes>
          </BrowserRouter>

        </div>
      </div>

      {/* <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Card Title</h2>
            <p className="text-gray-700">Card content goes here.</p>
          </div>

        </div>
      </div> */}


    </>
  )

}

export default App
