import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import {Outlet, Route, Router, Routes} from "react-router-dom";
import ContentDetail from "./component/ContentDetail";


function App() {

  return (
      <Outlet></Outlet>
     //<ContentDetail url={"https://www.bongda.com.vn/allister-kiem-tra-y-te-tai-liverpool-d687336.html"} />
  );
}

export default App;
