import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { App } from './App';
import Body from './components/Body';
import About from './components/About';
import NotFound from './components/NotFound'
import ResMenu from './components/ResMenu';
import { createRoot } from 'react-dom/client';

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
      }
    ],
    errorElement: <NotFound />,
  }
]);

let container = document.getElementById("app")!;
let root = createRoot(container);

root.render(<RouterProvider router={router} />)
