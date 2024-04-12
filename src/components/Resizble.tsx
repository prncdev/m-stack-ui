import { useResizable } from 'react-resizable-layout';
import { cn } from '../utils/cn';
import SplitterBar from './SplitterBar';
import AddUsers from './AddUsers';

const Resizble = (): JSX.Element => {
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
          File Tree
        </div>

        <SplitterBar isDragging={isFileDragging} {...fileDragBarProps} />

        <div className={cn('grow bg-darker', isEditorDragging)} style={{ width: editorW }}>
          {/* Editor */}
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
      </div>
    </div>
  );
};

export default Resizble;
