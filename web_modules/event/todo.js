import namesGenerator from "lib/namesGenerator"

const events = namesGenerator({
    namespace: "event/todo",
    actions: ["LIST","ADD","COMPLETE"]
})


export function list() {
    return { type : events.LIST }
}
export function add(task) {
    return { type : events.ADD, payload: task }
}
export function complete(todo) {
    return { type : events.COMPLETE, payload: todo }
}


export default events;
