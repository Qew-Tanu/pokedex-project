
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Homepage from './pages/home';
import Detailpage from './pages/detail';

function App() {


  const router = createHashRouter([
    {
      path: "/",
      element: (
        <Homepage />
      ),
    },
    {
      path: "/detail/:name",
      element: (
        <Detailpage />
      ),
    },
  ]);

  return (
    <div className="bg-[url('/images/list_bg.jpg')] min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
