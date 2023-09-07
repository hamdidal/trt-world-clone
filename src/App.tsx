import "./App.css";
import Home from "./views/home";
import { MainLayout } from "./components/Navigation/main-layout.component";
import NewsContext from "./helper/context/context";
import { Routes, Route } from "react-router-dom";
import Topics from "./views/topics";

function App({ children }: any) {
  return (
    <div className="App">
      <NewsContext>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/:topics" element={<Topics />} />
          </Routes>
        </MainLayout>
      </NewsContext>
    </div>
  );
}

export default App;
