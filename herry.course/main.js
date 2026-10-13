//selected dom element
 const input = document.getElementById('todo-input');
 const addbtn = document.getElementById('add-btn');
 const list = document.getElementById('todo-list');
   

     //try to load saved todos from lcalStorage (if any)
     const saved = localStroage.getItem('todos');
     const todos = saved? Json.parse(saved):[];
  function savetodo(){
   //save current todos array to local storage
    localStorage.setItem('todos', JSON.stringify(todos));

  }
  
  //Create a dom node for a todo object and append it to the list
   function createTodonode(todo, index){
     const li = document.createElement('li');
     //checkbox to toogle completion
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = !!todo.completed;
     
   }

  //rander the whole todo list from todos array
  function rander(){
     list.innerHTML= '';
      //Recreate each item
      todos.forEach(( todo, index)=>{
        const node = createTodonode(todo, index);
        list.appendChild(node);
      });
  } 