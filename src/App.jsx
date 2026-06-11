import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Regestration from "./Pages/Regestration";
const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route
      path="/Home"
      element={<Home />}>
</Route>
    <Route
      path="/Login"
      element={<Login />}>
</Route>
    <Route
      path="/Regestration"
      element={<Regestration />}>
</Route>
 
  </>
  )
);


const App = () => {
  return (
 <RouterProvider router={router} />
  )
}

export default App
