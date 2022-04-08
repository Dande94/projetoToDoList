var app = new Vue({
    el: '#app',
    data: {
        currentTodo: "",
        todos: [
            { text: "Aprendendo VueJS", done: false },
            { text: "Aprendendo Python", done: false },
            { text: "Aprendendo GO", done: false }
        ]
    },
    methods : {
        toggleTodo(todo){
            todo.done = !todo.done;
            this.sortTodos();
        },
        addTodo(){
            if(!this.currentTodo.trim() || this.checkIfTodoExists()) return;
            this.todos.push({
                text: this.currentTodo, done : false
            });
            this.currentTodo = "";
            this.sortTodos();
        },
        delTodo(todo){
            this.todos = this.todos.filter(el => el.text !== todo.text);
        },
        sortTodos(){
            this.todos.sort((a,b) => a.done - b.done);
        },
        checkIfTodoExists(){
            return this.todos.some((todo) => todo.text === this.currentTodo.trim());
        }
    },
    computed : {
        filteredTodos(){
            return this.todos.filter(
                todo => todo.text.toLowerCase().match(this.currentTodo.toLowerCase())
            );
        }
    }
});