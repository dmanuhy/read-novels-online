import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Header, Footer, NovelsByGenre, NovelDetail } from "./components/index"
import CreateNovel from "./components/Editor/CreateNovel";
import "./assets/css/layout.scss"
import ChapterDetails from "./components/ChapterDetails";
import { AccessDenied } from "./components/ErrorPages/AccessDenied";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/genres/:id" element={<NovelsByGenre />} />

          <Route path="/novels/:id" element={<NovelDetail />} />
          <Route path="/novels/:novelId/chapters/:chapterId" element={<ChapterDetails />} />

          <Route path="/editor/novels/create" element={<CreateNovel />} />

          <Route path="/access-denied" element={<AccessDenied />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
