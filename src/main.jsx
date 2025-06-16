import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ConfigProvider } from 'antd';
import viVN from 'antd/es/locale/vi_VN';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    h1: {

      fontSize: '1rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
  },
  typography: {
    fontFamily: '"Gidole", serif', // Đồng bộ với font của trang web
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 20px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#f7fafc',
          borderRadius: 8,
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={viVN}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>
);