import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import {Outlet, Route, Router, Routes} from "react-router-dom";
function App() {
  return (
       <Outlet></Outlet>
  );
}
export default App;
