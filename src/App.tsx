import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashborad";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path=""></Route>
            <Route path=""></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
