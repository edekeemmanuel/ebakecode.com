import './view/style/scss/main.scss';
//import Home from "./component/Home.tsx";
import { Outlet } from "react-router-dom";
const EBakecode = () => {
  return  (
    <>
      <Outlet />
    </>
    )
}
export default EBakecode;