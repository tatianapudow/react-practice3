import ReactDOM from "react-dom/client";
import './index.css'
import { router } from "./routes";
import { RouterProvider } from "react-router";
// import 'antd/dist/antd.variable.min.css'; 


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
