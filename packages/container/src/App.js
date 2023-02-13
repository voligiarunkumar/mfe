import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { StylesProvider,createGenerateClassName } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
const generateClassName=createGenerateClassName(
  {
    productionPrefix:'ca'
  }
)
export default () => {
  return (
    <BrowserRouter>
    <StylesProvider createGenerateClassName={generateClassName} >
    <div>
      <Header></Header>
      <MarketingApp></MarketingApp>
    </div>
    </StylesProvider>
    </BrowserRouter>
  );
};
