// export default App;
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Demo, SignUp } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/Demo",
    element: <Demo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
