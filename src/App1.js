

import React from "react";
import "./App.css";
//import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onAddTask = this.onAddTask.bind(this);
    this.onRemoveTask = this.onRemoveTask.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onAddTask(e) {
    const obj = {
      id: Date.now(),
      title: this.state.value,
      isCompleated: false,
    };
    if (this.state.value.trim()) {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ value: "" });
    }
  }

  onRemoveTask(itemId) {
    this.setState({
      todos: [...this.state.todos].filter((todo) => todo.id !== itemId),
    });
  }

  render() {
    const list = this.state.todos.map((todo) => (
      <li key={todo.id}>
        {todo.title}
        <button onClick={() => this.onRemoveTask(todo.id)}>
          Remove
        </button>
      </li>
    ));
    return (
      <div>
        <div>
          <input
            placeholder="task name"
            value={this.state.value}
            onChange={this.onChange}
          ></input>
          <button onClick={this.onAddTask}>Add</button>
        </div>
        <ol>{list}</ol>
      </div>
    );
  }
}

export default App;