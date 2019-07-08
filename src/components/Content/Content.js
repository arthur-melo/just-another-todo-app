import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Form from '../Form/Form';
import FormEdit from '../FormEdit/FormEdit';
import FormItem from '../FormItem/FormItem';

import './Content.css';

const contentPropTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  editingItem: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleCancelEditItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleItemCompletion: PropTypes.func.isRequired,
  handleReorderItem: PropTypes.func.isRequired,
  handleSelectEditItem: PropTypes.func.isRequired,
};

const Content = props => {
  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    props.handleReorderItem(result.source.index, result.destination.index);
  };

  return (
    <div className={props.className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Welcome!</h5>
                <p className="card-text">To get started, add some items to your list:</p>
                <div className="d-inline-block">
                  <Form handleAddItem={props.handleAddItem} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.items.length ? (
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="content__todos">
                <ul className="list-group content__todos__ul">
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                      {provided => (
                        <div ref={provided.innerRef}>
                          {props.items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {provided => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="content__todos__li">
                                  {props.editingItem.id === item.id ? (
                                    <FormEdit
                                      item={props.editingItem}
                                      handleEditItem={props.handleEditItem}
                                      handleCancelEditItem={props.handleCancelEditItem}
                                    />
                                  ) : (
                                    <FormItem
                                      item={item}
                                      handleDeleteItem={props.handleDeleteItem}
                                      handleSelectEditItem={props.handleSelectEditItem}
                                      handleItemCompletion={props.handleItemCompletion}
                                    />
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
        ) : null}
      </div>
    </div>
  );
};

Content.propTypes = contentPropTypes;

export default Content;
