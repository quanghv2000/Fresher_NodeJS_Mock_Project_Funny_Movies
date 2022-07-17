import "./App.css";
import { Home } from "./pages/home/screen/index";
import { History } from "./pages/user/history/screen/index";
import { YourVideo } from "./pages/user/your-video/screen/index";
import { WatchLater } from "./pages/user/watch-later/screen/index";
import { LikedVideo } from "./pages/user/liked-video/screen/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/home" exact element={<Home />} />
          <Route path="/history" exact element={<History />} />
          <Route path="/your-video" exact element={<YourVideo />} />
          <Route path="/watch-later" exact element={<WatchLater />} />
          <Route path="/liked-video" exact element={<LikedVideo />} />
          <Route index exact element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
