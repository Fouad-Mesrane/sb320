
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {


  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">


      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
     
    </div>
  );
}
