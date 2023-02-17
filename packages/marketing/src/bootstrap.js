import React from "react";
import  ReactDOM  from "react-dom";
import App from './App'
import {createMemoryHistory,createBrowserHistory} from 'history';
const mount = (el,{onNavigate,defaultHistory}) => {
  const history=defaultHistory||createMemoryHistory();
  if(onNavigate){
  history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history}/>, el);
  return{
    onParentNavigate({pathname:nextPathname}){
      console.log("container navigated")
      const{pathname}=history.location;
      if(pathname!==nextPathname)
      {
        history.push(nextPathname);
      }

    }
  }
}
if (process.env.NODE_ENV === "development") {
  const Text = document.querySelector("#_marketing-dev-root");
  if (Text) {
    mount(Text,{defaultHistory:createBrowserHistory()});
  }
}
export { mount };
