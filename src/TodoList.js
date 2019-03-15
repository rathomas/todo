import React, { Component } from 'react';
import Todo from './Todo';
import cx from 'classnames';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        {
          id: 1,
          name: "Item 1",
          done: true
        },
        {
          id: 2,
          name: "Item 2",
          done: false
        }
      ]
    }
  }

  addItem = (event) => {
      event.preventDefault();
      const items = [...this.state.todoItems, {id: this.state.todoItems.length+1, name: this.refs.addInput.value}];
      this.setState({todoItems: items});
  };

  clickHandler = (id) => {
    const items = this.state.todoItems;
    const clickedId = items.findIndex(item => item.id === id);
    items[clickedId].done = !items[clickedId].done;
    this.setState({todoItems: items});
  };

  render() {

    const todos = this.state.todoItems.map((item) => (
        <Todo
          key={item.id}
          classes={cx({"is-done": item.done})}
          data={item}
          click={this.clickHandler}
        />
      )
    );

    return (
      <div className="TodoList">
        <div>
          <h2>
            Todo List
          </h2>
          <div>
            <form onSubmit={this.addItem}>
              <input type="text" ref="addInput"/>
              <input
                type="submit"
                value="+"/>
            </form>
          </div>
        </div>
        <div>
          {todos}
        </div>
        <style>{`
            .is-done {
                text-decoration: line-through;
            }
        `}</style>
      </div>
    );
  }
}

export default TodoList;

