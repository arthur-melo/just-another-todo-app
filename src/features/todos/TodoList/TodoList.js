import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

import EditTodoItem from '../EditTodoItem/EditTodoItem';
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';
import { selectTodoItems, selectEditingItem, reorderItem } from '../todosSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector(selectTodoItems);
  const editingItem = useSelector(selectEditingItem);

  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    dispatch(
      reorderItem({
        initial: result.source.index,
        destination: result.destination.index,
      }),
    );
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <ul className="list-group">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {provided => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {todoItems.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}>
                        {provided => (
                          <div
                            ref={provided.innerRef}
                            data-testid="todo-list-item"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="todo_list__todos__li">
                            {editingItem.id === item.id ? (
                              <EditTodoItem item={item} />
                            ) : (
                              <TodoItem item={item} />
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
