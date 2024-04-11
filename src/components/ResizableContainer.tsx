// import { useState, useEffect, useRef, FC } from 'react';

// const Resizable: FC = function () {
//   const refBox = useRef(null);
//   const refLeft = useRef<HTMLElement | null>(null);
//   const refTop = useRef<HTMLElement | null>(null);
//   const refRight = useRef<HTMLElement | null>(null);
//   const refBottom = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     // Let's get the reference the div element of resizable-box.
//     const resizableElement = refBox.current as unknown as HTMLElement;

//     // Let's grap the width and height of this div element
//     const styles = window.getComputedStyle(resizableElement);
//     let width = parseInt(styles.width);
//     let height = parseInt(styles.height);

//     // Let's define the initial values for coordinates x & y axxis.
//     let xCord = 0;
//     let yCord = 0;

//     // Handle resizing from the top.
//     const onMouseMoveTopResize = function (event: any) {
//       const vertical = event.clientY - yCord;
//       height = height - vertical;
//       resizableElement.style.height = height + 'px';
//     };

//     const onMouseUpTopResize = function (event: any) {
//       document.removeEventListener('mousemove', onMouseMoveTopResize);
//     };

//     const onMouseDownTopResize = function (event: any) {
//       yCord = event.clientY;
//       const styles = window.getComputedStyle(resizableElement);
//       resizableElement.style.bottom = styles.bottom;
//       resizableElement.style.top = null as unknown as string;

//       // Adding event listeners
//       document.addEventListener('mousemove', onMouseMoveTopResize);
//       document.addEventListener('mouseup', onMouseUpTopResize);
//     };

//     // Handle resizing from the left.
//     const onMouseMoveLeftResize = function (event: any) {
//       const horizental = event.clientX - xCord;
//       xCord = event.clientX;
//       width = width + horizental;
//       resizableElement.style.width = width + 'px';
//     };

//     const onMouseUpLeftResize = function (event: any) {
//       document.removeEventListener('mousemove', onMouseMoveLeftResize);
//     };

//     const onMouseDownLeftResize = function (event: any) {
//       const horizental = event.clientX;
//       resizableElement.style.right = styles.right;
//       resizableElement.style.left = null as unknown as string;
//       document.addEventListener('mousemove', onMouseMoveLeftResize);
//       document.addEventListener('mouseup', onMouseUpLeftResize);
//     };

//     // Handle resizing from the right.
//     const onMouseMoveRightResize = function (event: any) {
//       const horizental = event.clientX - xCord;
//       xCord = event.clientX;
//       width = width + horizental;
//       resizableElement.style.width = width + 'px';
//     };

//     const onMouseUpRightResize = function (event: any) {
//       document.removeEventListener('mousemove', onMouseMoveRightResize);
//     };

//     const onMouseDownRightResize = function (event: any) {
//       xCord = event.clientX;
//       resizableElement.style.left = styles.left;
//       resizableElement.style.right = null as unknown as string;
//       document.addEventListener('mousemove', onMouseMoveRightResize);
//       document.addEventListener('mouseup', onMouseUpRightResize);
//     };

//     // Handle resizing from the Bottom.
//     const onMouseMoveBottomResize = function (event: any) {
//       const vertical = event.clientY - yCord;
//       height = height + vertical;
//       yCord = event.clientY;
//       resizableElement.style.height = height + 'px';
//     };

//     const onMouseUpBottomResize = function (event: any) {
//       document.removeEventListener('mousemove', onMouseMoveBottomResize);
//     };

//     const onMouseDownBottomResize = function (event: any) {
//       yCord = event.clientY;
//       const styles = window.getComputedStyle(resizableElement);
//       resizableElement.style.top = styles.top;
//       resizableElement.style.top = styles.bottom = null as unknown as string;
//       document.addEventListener('mousemove', onMouseMoveBottomResize);
//       document.addEventListener('mouseup', onMouseUpBottomResize);
//     };

//     // Registering event listeners.
//     const resizerLeft = refLeft.current;
//     resizerLeft?.addEventListener('mousedown', onMouseDownLeftResize);

//     const resizerTop = refTop.current;
//     resizerTop?.addEventListener('mousedown', onMouseDownTopResize);

//     const resizerRight = refRight.current;
//     resizerRight?.addEventListener('mousedown', onMouseDownRightResize);

//     const resizerBottom = refBottom.current;
//     resizerBottom?.addEventListener('mousedown', onMouseDownBottomResize);

//     // Removing event listeners, when the components will remove.
//     return () => {
//       resizerLeft?.removeEventListener('mousedown', onMouseDownLeftResize);
//       resizerTop?.removeEventListener('mousedown', onMouseDownTopResize);
//       resizerRight?.removeEventListener('mousedown', onMouseDownRightResize);
//       resizerBottom?.removeEventListener('mousedown', onMouseDownBottomResize);
//     };
//   }, []);

//   return (
//     <main>
//       <section className='wrapper'>
//         {/* Now we have to use the React ref hook get the current state or more particularly to get the current width and the height of the boxes */}
//         <div ref={refBox} className='resizable-box'>
//           <aside ref={refLeft} className='resizer r-left'></aside>
//           <aside ref={refTop} className='resizer r-top'></aside>
//           <aside ref={refRight} className='resizer r-right'></aside>
//           <aside ref={refBottom} className='resizer r-bottom'></aside>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Resizable;

import { useEffect, useRef, FC } from 'react';
// import './Resizable.css'; // Assuming your CSS file is named Resizable.css

const Resizable: FC = function () {
  const refBox = useRef<HTMLDivElement>(null);
  const refLeft = useRef<HTMLDivElement>(null);
  const refTop = useRef<HTMLDivElement>(null);
  const refRight = useRef<HTMLDivElement>(null);
  const refBottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizableElement = refBox.current!;
    let width = resizableElement.offsetWidth;
    let height = resizableElement.offsetHeight;
    let xCord = 0;
    let yCord = 0;
  
    const onMouseMove = (event: MouseEvent, direction: string) => {
      // your logic for resizing
    };
  
    const onMouseDown = (event: MouseEvent, direction: string) => {
      // your logic for handling mousedown
      document.addEventListener('mousemove', (e) => onMouseMove(e, direction));
      document.addEventListener('mouseup', onMouseUp);
    };
  
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  
    refTop.current?.addEventListener('mousedown', (e) => {
      onMouseDown(e, 'top');
      document.addEventListener('mousemove', (e) => onMouseMove(e, 'top'));
      document.addEventListener('mouseup', onMouseUp);
    });
  
    refLeft.current?.addEventListener('mousedown', (e) => {
      onMouseDown(e, 'left');
      document.addEventListener('mousemove', (e) => onMouseMove(e, 'left'));
      document.addEventListener('mouseup', onMouseUp);
    });
  
    refRight.current?.addEventListener('mousedown', (e) => {
      onMouseDown(e, 'right');
      document.addEventListener('mousemove', (e) => onMouseMove(e, 'right'));
      document.addEventListener('mouseup', onMouseUp);
    });
  
    refBottom.current?.addEventListener('mousedown', (e) => {
      onMouseDown(e, 'bottom');
      document.addEventListener('mousemove', (e) => onMouseMove(e, 'bottom'));
      document.addEventListener('mouseup', onMouseUp);
    });
  
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <main>
      <section className='wrapper'>
        <div ref={refBox} className='resizable-box'>
          <aside ref={refLeft} className='resizer r-left'></aside>
          <aside ref={refTop} className='resizer r-top'></aside>
          <aside ref={refRight} className='resizer r-right'></aside>
          <aside ref={refBottom} className='resizer r-bottom'></aside>
        </div>
      </section>
    </main>
  );
};

export default Resizable;
