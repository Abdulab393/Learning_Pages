import { useState } from 'react'
import FeeDeatilPage from './components/FeeDetailPage'






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
              <FeeDeatilPage />
        </div>
      </div>
    </>
  )

}

export default App
