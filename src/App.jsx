import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from "./component/Root";
import Home from "./page/Home";
import About from "./page/About";
import Blog from "./page/Blog";
import Help from "./page/Help";
import Contact from "./page/Contact";

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="blog" element={<Blog/>}/>
      <Route path="help" element={<Help/>}/>
    </Route>
  ))
  return (
    <div className=" ">
      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
