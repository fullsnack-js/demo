import { theme, extendTheme } from "@chakra-ui/react";
import styles from "./styles"

const customTheme = extendTheme({
  colors: {
    ...theme.colors,
    brand: {
      bg: '#e6ddde',
      fg: 'rgb(68, 50, 53)',
      button: 'rgb(145, 106, 112)'
    }
  },
  fonts: {
    ...theme.fonts,
    body: "Libre Franklin, sans-serif",
    heading: "Libre Baskerville, serif"
  },
  ...styles
})

export default customTheme