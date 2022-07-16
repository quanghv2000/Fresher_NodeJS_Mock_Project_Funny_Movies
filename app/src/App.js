import "./App.css";
import { Home } from "./pages/home/screen/index";
import { Video } from "./pages/Video";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="home" exact element={<Home />} />
          {/* <Route path="signin" element={<SignIn />} /> */}
          <Route path="video/:id" exact element={<Video />}></Route>
          <Route index exact element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
