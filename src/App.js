import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./sb-admin-2.min.css";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Userlist from "./Userlist";
import Portal from "./Portal";
import UserCreate from "./UserCreate";
import UserView from "./UserView";
import UserEdit from "./UserEdit";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes Component={Login} />} />
        <Route path="/portal" element={<ProtectedRoutes Component={Portal}/>}>
          <Route path="dashboard" element={<ProtectedRoutes Component={Dashboard} />} />
          <Route path="user-list" element={<ProtectedRoutes Component={Userlist} />} />
          <Route path="create-user" element={<ProtectedRoutes Component={UserCreate} />} />
          <Route path="user-view/:id" element={<ProtectedRoutes Component={UserView} />} />
          <Route path="user-edit/:id" element={<ProtectedRoutes Component={UserEdit} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
