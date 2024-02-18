import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/custom/common/Layout";
import Home from "./pages/Home";
import PageNotExists from "./pages/PageNotExists";

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          {/* <Route path="explore" element={} /> */}
          {/* <Route path="pricing" element={} /> */}
        </Route>

        {/* <Route path="/login" element={} />
        <Route path="/register" element={} /> */}
        <Route path="*" element={<PageNotExists />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
