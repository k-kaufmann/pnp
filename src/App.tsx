import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CharactersPage from "./components/Pages/CharactersPage";
import JobPage from "./components/Pages/JobPage";
import AppLayout from "./Layout/AppLayout";
import CharactersLayout from "./Layout/CharactersLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout></AppLayout>}>
          <Route
            path="charaktere"
            element={<CharactersLayout></CharactersLayout>}
          >
            <Route path="" element={<CharactersPage></CharactersPage>}></Route>
            <Route path="berufe" element={<JobPage></JobPage>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
