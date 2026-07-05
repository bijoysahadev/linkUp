import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Regestration from "./Pages/Regestration";
import Setting from './Pages/Setting'
import Message from './Pages/Message'
import NotificationPage from "./Pages/NotificationPage";
import Logout from "./Pages/Logout";
import Rootlayout from './Layouts/RootLayouts'
const router = createBrowserRouter(
  createRoutesFromElements(
  <>
   
    <Route
      path="/"
      element={<Login />}>
</Route>
    <Route
      path="/Regestration"
      element={<Regestration />}>
</Route>
  <Route path="/" element={<Rootlayout/>} >
     <Route path="/Setting" element={<Setting/>} ></Route>
 <Route
      path="/Home"
      element={<Home />}>
</Route>
 <Route path="/Message" element={<Message/>} ></Route>

 <Route path="/NotificationPage" element={<NotificationPage/>} ></Route>
 <Route path="/Logout" element={<Logout/>} ></Route>
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
