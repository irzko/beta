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
          <Route path="P003" element={<Pages.P003 />} />
          <Route path="P004" element={<Pages.P004 />} />
          <Route path="P005" element={<Pages.P005 />} />
          <Route path="P006" element={<Pages.P006 />} />
          <Route path="P007" element={<Pages.P007 />} />
          <Route path="P008" element={<Pages.P008 />} />
          <Route path="P010" element={<Pages.P010 />} />
          <Route path="P011" element={<Pages.P011 />} />
          <Route path="P012" element={<Pages.P012 />} />
          <Route path="P013" element={<Pages.P013 />} />
        </Route>
        <Route path="/quests/" element={<Layout />}>
          <Route index element={<PageNotFound />} />
          <Route path="C001" element={<Quest.C001 />} />
          <Route path="C003" element={<Quest.C003 />} />
          <Route path="C004" element={<Quest.C004 />} />
          <Route path="C005" element={<Quest.C005 />} />
          <Route path="C006" element={<Quest.C006 />} />
          <Route path="C007" element={<Quest.C007 />} />
          <Route path="C008" element={<Quest.C008 />} />
          <Route path="C009" element={<Quest.C009 />} />
          <Route path="C010" element={<Quest.C010 />} />
          <Route path="C011" element={<Quest.C011 />} />
          <Route path="C012" element={<Quest.C012 />} />
          <Route path="C013" element={<Quest.C013 />} />
          <Route path="C014" element={<Quest.C014 />} />
          <Route path="C015" element={<Quest.C015 />} />
          <Route path="C016" element={<Quest.C016 />} />
          <Route path="C017" element={<Quest.C017 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
