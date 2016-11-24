import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { logout } from 'event/user'
import * as todo from 'event/todo'
import { urls } from 'lib/userspace'
import { InputText } from 'view'

const Home = ({actions, todos, username, token}) =>
      <section className="main-content">
        <div className="login-box" style={{textAlign: "center"}}>
          <h3>{username}</h3>
          <h2>
              <a onClick={actions.logout}>Logout</a>
              <span> - </span>
              <a href={urls.dashboard(token)}>Dashboard</a>
          </h2>
        </div>
        <div className="panel">
            <div className="left">
                Items <InputText onClick={ actions.add } text="agregar" enabled={true}/>
            </div>
            <div className="right">
                <h4>todos</h4>
                <ul>{todos.map((sp,idx)=>

                    <li key={sp.id}>
                        <span style={{textDecoration: sp.attributes.completed ? "line-through" : "inherit"}}> {sp.attributes.task} </span>
                        <span style={{color: "red"}} onClick={ ev => actions.complete(sp) }> X </span>
                    </li>
                )}</ul>
            </div>
        </div>
      </section>

const HomeClass = React.createClass({
    componentWillMount: function() {
        this.props.actions.list();
    },
    render: function() {
        return Home(this.props)
    }
})
export default connect(
    state => ({
        todos: state.todo.list,
        username: state.user.id,
        token: state.user.token.token,
    }),
  {logout, list: todo.list, add: todo.add, complete: todo.complete}
)(HomeClass);
