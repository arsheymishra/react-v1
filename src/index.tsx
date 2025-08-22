import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { App } from './App';
import Body from './components/Body';
import About from './components/About';
import NotFound from './components/NotFound'
import ResMenu from './components/ResMenu';
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';


const Grocery  = lazy(()=> import("./components/Grocery"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu/>
      },
      {
        path: "/grocery",
        element:  <Suspense fallback={<div><h1>Loading...</h1></div>}><Grocery/></Suspense>
      }
    ],
    errorElement: <NotFound />,
  }
]);

let container = document.getElementById("app")!;
let root = createRoot(container);

root.render(<RouterProvider router={router} />)
