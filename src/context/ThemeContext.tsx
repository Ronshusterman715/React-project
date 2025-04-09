import {
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
