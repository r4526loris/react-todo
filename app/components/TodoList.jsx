var React = require('react');
var {connect} = require('react-redux');

import Todo from "Todo";
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({

  render: function(){

    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = ()=>{
      var filterTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
      if(filterTodos.length === 0){
        return (
          <p className="container_message">Nothing To Do</p>
        )
      };
      return filterTodos.map((todo)=>{
        return (
          <Todo {...todo} key={todo.id}/>
        );
      })
    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }

});

export default connect(
  (state)=>{
    return state;
  }
)(TodoList);
