import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import P001 from "./components/P001";
import * as Quest from "./components/quests";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/that-vo-tri" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/pages/" element={<Layout />}>
          <Route index element={<PageNotFound />} />
          <Route path="P001" element={<P001 />} />
        </Route>
        <Route path="/quests/" element={<Layout />}>
          <Route index element={<PageNotFound />} />
          <Route path="C001" element={<Quest.C001 />} />
          <Route path="C002" element={<Quest.C002 />} />
          <Route path="C003" element={<Quest.C003 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
