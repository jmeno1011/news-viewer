import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewsPage from "./pages/NewsPage";
// const apikey = '8e4a6101174e464794f1214934038e93'

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
