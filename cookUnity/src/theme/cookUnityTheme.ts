import { createTheme } from "@mui/material/styles/";
import MuiButton from "./components/StandardThemeButton";
import * as customPalette from "./customPalette";
import { DEFAULT_HTML_FONT_SIZE, DEFAULT_SPACING } from "./defaults";
import fonts from "./fonts.module.css";
import { SANS_SERIF } from "./typography/typography";

const cookUnityTheme = createTheme({
  typography: {
    htmlFontSize: DEFAULT_HTML_FONT_SIZE,
    fontFamily: SANS_SERIF,
  },
  palette: customPalette,
  spacing: DEFAULT_SPACING,
  components: {
    MuiButton,
    MuiCssBaseline: fonts,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
});
export default cookUnityTheme;
