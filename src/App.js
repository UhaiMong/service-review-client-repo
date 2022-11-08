import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routers/Router/Router';

function App() {
  return (
    <div className='w-full xl:w-11/12 mx-auto'>
      <RouterProvider router={routers}/>
    </div>
  );
}

export default App;
