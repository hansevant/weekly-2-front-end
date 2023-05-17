import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import DetailBlog from "./Pages/DetailBlog";
import MyBlog from "./Pages/MyBlog";
import AddBlog from "./Pages/AddBlog";
import EditBlog from "./Pages/EditBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<DetailBlog/>} />
        <Route path="/myblog" element={<MyBlog/>} />
        <Route path="/addblog" element={<AddBlog/>} />
        <Route path="/editblog" element={<EditBlog/>} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
