import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path=""></Route>
          <Route path=""></Route>
          <Route path=""></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
