import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "./theme";
import { AuthProvider } from "./context/authContext";
import { Layout } from "./components";
import Routes from "./routes";

const App = () => (
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
    <ToastContainer theme="colored" hideProgressBar />
  </AuthProvider>
);

export default App;
