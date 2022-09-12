import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Movies from "./Pages/Movies/Movies";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";
import Trailers from "./Pages/Trailers/Trailers";
import PageNotFound from "./Pages/404/PageNotFound";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/trailer/:id" element={<Trailers />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
