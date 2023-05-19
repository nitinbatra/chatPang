import React, { useEffect, useState } from 'react';
import GlobalLayout from './GlobalLayout';
import { LeftLoginComp, RightLoginComp } from './Components/LoginComp/LoginComp';
import { LeftChatWindow, RightChatWindow } from './Components/ChatWindow/ChatWindow';

function App() {
  const [state, setState] = useState(false);

  const leftContainerComp = state? <LeftChatWindow/> : <LeftLoginComp/>;
  const rightContainerComp = state? <RightChatWindow/> : <RightLoginComp setStateFun={(bool)=>setState(bool)}/>;

  // useEffect(() => {
  //   setState(true);
  // }, [])
  
  return (
    <GlobalLayout
      insideLeftContainer={leftContainerComp}
      insideRightContainer={rightContainerComp}
    />
  );
}

export default App;
