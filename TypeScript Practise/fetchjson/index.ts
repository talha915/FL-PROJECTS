import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number,
    title: String,
    completed: Boolean
}

const logData=(id:number, title: String, completed:Boolean)=> {
    console.log(`
        Id: ${id},
        Title: ${title},
        Finished?: ${completed}
    `);
}

axios.get(url).then(res=>{
    const todo = res.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logData(id, title, completed);
});