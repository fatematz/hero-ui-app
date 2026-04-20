"use client";
import { ThemeProvider } from "next-themes";

const NextThemeProviders = ( {children}) => {
    return (
         <ThemeProvider attribute="data-theme" defaultTheme="light">
      {children}
    </ThemeProvider>
    );
};

export default NextThemeProviders;