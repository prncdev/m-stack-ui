import React, { useState } from 'react';
import { Resizable } from 'react-resizable';

const ResizableComponent = ({ width, handleResize, children }: any) => {
  return (
    <Resizable
      width={width}
      height={200}
      onResize={handleResize}
      className="resizable-component"
      resizeHandles={['e']}
    >
      {children}
    </Resizable>
  );
};


const Layout = () => {
  const [width1, setWidth1] = useState(300);
  const [width2, setWidth2] = useState(300);
  const [width3, setWidth3] = useState(300);

  const handleResize1 = (event: any, { size }: any) => {
    console.log(event);
    setWidth1(size.width);
  };

  const handleResize2 = (event: any, { size }: any) => {
    console.log(event);
    setWidth2(size.width);
  };

  const handleResize3 = (event: any, { size }: any) => {
    console.log(event);
    setWidth3(size.width);
  };

  return (
    <div className="layout-container">
      <ResizableComponent width={width1} handleResize={handleResize1}>
        <div className="component">Component 1</div>
      </ResizableComponent>
      <ResizableComponent width={width2} handleResize={handleResize2}>
        <div className="component">Component 2</div>
      </ResizableComponent>
      <ResizableComponent width={width3} handleResize={handleResize3}>
        <div className="component">Component 3</div>
      </ResizableComponent>
    </div>
  );
};

export default Layout;
