import Sidebar from "./components/Sidebar";
import CardContant from "./modules/CardContant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="flex pt-20">
      <Sidebar></Sidebar>
      <CardContant></CardContant>
      <ToastContainer />
    </div>
  );
}

export default App;
