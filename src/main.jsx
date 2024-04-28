import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Add your custom colors to the theme
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

// Extend the Chakra UI theme with your custom colors
const theme = extendTheme({ colors });

// Enable React strict mode for better development experience
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap your app with ChakraProvider to enable Chakra UI styles */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// Print theme configuration to the console for easier debugging
console.log("Chakra UI theme configuration:", theme);
