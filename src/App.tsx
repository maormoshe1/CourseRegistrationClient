import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage";
import { CacheProvider } from "@emotion/react";
import CoursesProvider from "./CoursesContext";
import WelcomePage from "./Pages/WelcomePage";
import CourseRegistrationPage from "./Pages/CourseRegistrationPage";
import MenuAppBar from "./components/MenuAppBar";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";


const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <Router>
      <CacheProvider value={cacheRtl}>
        <MenuAppBar />
        <CoursesProvider>
          <Routes>
            <Route path="/Registration" element={<CourseRegistrationPage />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/" element={<WelcomePage />} />
          </Routes>
        </CoursesProvider>
      </CacheProvider>
    </Router>
  );
}

export default App;
