import './main.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import routes from "./routes"
import ErrorPage from "./ErrorPage";
import Layout from "./component/layout/Layout.tsx"

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      errorElement: <ErrorPage />,
      // child route components
      children: routes
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App