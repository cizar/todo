import { Observable } from 'rxjs';
import { todo } from '../event';
import {userspace} from '../lib/userspace'

const Parse = userspace('main')
const ToDo = Parse.Object.extend('ToDo')
const query = new (Parse.Query)(ToDo)

export default (action$) =>
  Observable.merge(

    action$.ofType(todo.LIST)
        .flatMap(action => query.limit(10).addDescending("createdAt").find() )
        .map(result => ({
          type: todo.LIST_OK,
          payload: result,
        }))
        .catch(error => Observable.of({
            type: todo.LIST_FAIL,
            payload: error.xhr.response,
            error: true
        })),

    action$.ofType(todo.ADD)
        .flatMap(action => new ToDo().save({task : action.payload, completed: false}) )
        .map(response => ({
            type : todo.LIST
        })),

    action$.ofType(todo.COMPLETE)
        .map(action => {
            action.payload.set("completed",true)
            action.payload.save()
            return action
        })
        .map(response => ({
            type : todo.LIST
        })),

  )
