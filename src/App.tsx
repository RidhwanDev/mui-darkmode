import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./components/Home";
import NightModeToggle from "./components/NightModeToggle";
import { useThemeContext } from "./theme/ThemeContextProvider";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NightModeToggle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
