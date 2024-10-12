
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from "../src/pages/Home";
import CountryInd from "../src/pages/CountryInd";
import ErrorPage from './components/ErrorPage';
import AppLayouts from './components/layout/AppLayouts';
import Countryflag from './pages/Countryflag';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
Countryflag
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element:<Home/>,
      },
      {
        path: "/countryflag",
        element: <Countryflag/>,
      },
      
      {
        path: "/countryind/:name",
        element: <CountryInd/>,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider  client={queryClient}>
      <RouterProvider router={router}>

      </RouterProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
