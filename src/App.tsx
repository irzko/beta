import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import * as Pages from "./components/pages";
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
          <Route path="P001" element={<Pages.P001 />} />
          <Route path="P002" element={<Pages.P002 />} />
        </Route>
        <Route path="/quests/" element={<Layout />}>
          <Route index element={<PageNotFound />} />
          <Route path="C001" element={<Quest.C001 />} />
          <Route path="C003" element={<Quest.C003 />} />
          <Route path="C004" element={<Quest.C004 />} />
          <Route path="C005" element={<Quest.C005 />} />
          <Route path="C006" element={<Quest.C006 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
