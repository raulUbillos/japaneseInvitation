import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Confirmation from './pages/confirmation';
import Main from './pages/main';
import Photos from './pages/photos';
import theme from './styles';
import WhereIs from './pages/whereIs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>
  },
  {
    path:"/whereIs",
    element: <WhereIs/>
  },
  {
    path:"/photos",
    element: <Photos/>
  },
  {
    path: "/confirmation",
    element: <Confirmation/>
  }
]);

function App() {
  return <ChakraProvider theme={theme}>
    <RouterProvider router={router}/>
  </ChakraProvider>
}

export default App;
