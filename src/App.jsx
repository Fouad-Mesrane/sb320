import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoinProvider from "./context/CoinProvider";
import CoinDetails from "./components/CoinDetails";

export default function App() {
  return (
    <CoinProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </CoinProvider>
  );
}
