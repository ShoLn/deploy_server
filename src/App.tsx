import { Link, useRoutes } from "react-router-dom";
import Box from "@mui/material/Box";
import RR from "./Routes";
// 請先到'./components/ThemeProvider'了解基本主題設置
import ThemeProvider from "./components/ThemeProvider";
// 下面 QueryProvider 到之後 React Query 章節再看就好
import QueryProvider from "./components/QueryProvider";

import Navbar from "./components/Navbar";
import { Drawer, Toolbar } from "@mui/material";

// 主要應用程式
function App() {
  const R = useRoutes(RR);
  return (
    <QueryProvider>
      <ThemeProvider>
        <Navbar />
        <div style={{paddingLeft:"275.125px"}}>
          <Toolbar />
          {R}
        </div>
      </ThemeProvider>
    </QueryProvider>
  );
}

export default App;
