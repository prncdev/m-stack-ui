import React from 'react';
// import logo from './logo.svg';
import './styles/global.css'
import ResizableContainer from './components/ResizableContainer';
import Layout from './components/TestResizable';

function App() {
  return (
    <main className="App ">
      {/* <h1>Happy Hacking.(:</h1> */}
      <ResizableContainer />
      {/* <Layout/> */}
    </main>
  );
}

export default App;
