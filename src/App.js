
import './App.css';
import MainCard from './components/MainCard';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink, blueGrey } from "@mui/material/colors";

import ToastProvider from "../src/contexts/ToastContext"





const theme = createTheme({
  palette: {
    primary: {
      main: pink[600],
      two: blueGrey[50],
    },
    failed: {
      main: pink[800],
    },
    
  },

  typography: {
    fontFamily: "alex",
    fontWeight: "normal",
    
    
    
  }
});



function App()
{

  
  return (
    <div className="App">
      <ToastProvider>

      
        
        <ThemeProvider theme={theme}>
          <MainCard />

          
        </ThemeProvider>

      </ToastProvider>
    
    </div>
  );
}

export default App;
