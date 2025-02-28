import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoinProvider from "./context/CoinProvider";

export default function App() {
  return (
    <CoinProvider>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </CoinProvider>
  );
}
