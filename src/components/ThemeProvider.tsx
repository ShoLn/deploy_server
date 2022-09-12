import { ComponentType, ReactNode } from "react";
// Theme 的相關建置 參考 https://mui.com/material-ui/customization/theming/#theme-provider
import { ThemeProvider, createTheme } from "@mui/material/styles";
// CSS 的normalize 參考 https://mui.com/material-ui/react-css-baseline/
import { CssBaseline } from "@mui/material";

// Type
interface Props {
  children: ReactNode;
}

// Provider
const CustomThemeProvider: ComponentType<Props> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1f2678",
      },
      secondary: {
        main: "#666666",
      },
      grey: {
        A400: "#A1A1A1",
        A700: "rgba(0,0,0,0.85)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
