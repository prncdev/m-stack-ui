import React, { useState } from 'react';

const ResizableDiv: React.FC = () => {
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [currentResizer, setCurrentResizer] = useState<HTMLElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCurrentResizer(e.currentTarget);
    setIsResizing(true);

    let prevX = e.clientX;
    let prevY = e.clientY;

    const handleMouseMove = (e: MouseEvent) => {
      if (!currentResizer) return;

      const el = currentResizer.parentElement as HTMLElement;
      const rect = el.getBoundingClientRect();

      if (!isResizing) {
        const newX = prevX - e.clientX;
        const newY = prevY - e.clientY;

        el.style.left = rect.left - newX + 'px';
        el.style.top = rect.top - newY + 'px';

        prevX = e.clientX;
        prevY = e.clientY;
      } else {
        if (currentResizer.classList.contains('se')) {
          el.style.width = rect.width - (prevX - e.clientX) + 'px';
          el.style.height = rect.height - (prevY - e.clientY) + 'px';
        } else if (currentResizer.classList.contains('sw')) {
          el.style.width = rect.width + (prevX - e.clientX) + 'px';
          el.style.height = rect.height - (prevY - e.clientY) + 'px';
          el.style.left = rect.left - (prevX - e.clientX) + 'px';
        } else if (currentResizer.classList.contains('ne')) {
          el.style.width = rect.width - (prevX - e.clientX) + 'px';
          el.style.height = rect.height + (prevY - e.clientY) + 'px';
          el.style.top = rect.top - (prevY - e.clientY) + 'px';
        } else {
          el.style.width = rect.width + (prevX - e.clientX) + 'px';
          el.style.height = rect.height + (prevY - e.clientY) + 'px';
          el.style.top = rect.top - (prevY - e.clientY) + 'px';
          el.style.left = rect.left - (prevX - e.clientX) + 'px';
        }

        prevX = e.clientX;
        prevY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      setIsResizing(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="item">
      <div className="resizer ne" onMouseDown={handleMouseDown}></div>
      <div className="resizer nw" onMouseDown={handleMouseDown}></div>
      <div className="resizer sw" onMouseDown={handleMouseDown}></div>
      <div className="resizer se" onMouseDown={handleMouseDown}></div>
    </div>
  );
};

export default ResizableDiv;
