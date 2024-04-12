import { useResizable } from 'react-resizable-layout';
import { cn } from '../utils/cn';
import SplitterBar from './SplitterBar';
import AddUsers from './AddUsers';
import { ShowUsers } from './ShowUsers';
import { useState } from 'react';

const Resizble = (): JSX.Element => {
  const [row, setRow] = useState<any>();

  const handleSelectedRow = function(row:any) {
    console.log(row);
    setRow(row)
  }

  const {
    isDragging: isFileDragging,
    position: fileW,
    splitterProps: fileDragBarProps,
  } = useResizable({ axis: 'x', initial: 250, min: 50 });

  const {
    isDragging: isEditorDragging,
    position: editorW,
    splitterProps: editorDragBarProps,
  } = useResizable({ axis: 'x', initial: 250, min: 50 });

  const {
    isDragging: isTerminalDragging,
    position: terminalH,
    splitterProps: terminalDragBarProps,
  } = useResizable({ axis: 'y', initial: 300, min: 50, reverse: true });

  return (
    <div className='flex flex-col h-screen font-mono text-white text-base overflow-hidden'>
      <div className='flex grow'>
        <div className={cn('shrink-0 bg-dark', isFileDragging)} style={{ width: fileW }}>
          <ShowUsers onSelectRow={handleSelectedRow} />
        </div>

        <SplitterBar isDragging={isFileDragging} {...fileDragBarProps} />

        <div className={cn('grow bg-darker overflow-y-auto min-h-1', isEditorDragging)} style={{ width: editorW }}>
          <AddUsers />
        </div>
      </div>

      {/* Terminal Editor */}
      <SplitterBar
        dir={'horizontal'}
        isDragging={isTerminalDragging}
        {...terminalDragBarProps}
      />
      <div className={cn('shrink-0 bg-darker', isTerminalDragging)} style={{ height: terminalH }}>
        Terminal
        {/* {row} */}
      </div>
    </div>
  );
};

export default Resizble;
