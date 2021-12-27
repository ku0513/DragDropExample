import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';

function App() {
  return (
    <div className="dragDropArea">
      <DragDropContext>
        <Droppable droppableId="doppable">
          {(provided) =>
            <div
            {...provided.droppableProps}
            ref={provided.innerRef}>
              <Draggable draggableId="item0" index={0}>
                {(provided) =>
                <div className="item"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                  item0
                </div>}
              </Draggable>
            </div>
          }
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
