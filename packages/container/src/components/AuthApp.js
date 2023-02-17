import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from 'react-router-dom';
const Marketing= ({onSignIn}) => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({pathname:nextPathname}) => {
        console.log(nextPathname);
        history.push(nextPathname);
      },
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};
export default Marketing;
