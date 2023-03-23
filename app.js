(()=>{//immediately invoked function expression IIFE 👀no valido para testear
    const btn = document.querySelector('[data-form-btn]');
//🔥 const createTask = (event)=>{
//     event.preventDefault();//hace que no se recargue la pagina 
//     const input = document.querySelector('[data-form-input]');
//     console.log(input.value);
// }
// btn.addEventListener('click',createTask);
    const createTask = (event)=>{
        event.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        //creo un elmento lista <li>
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        //agregamos una clase card para que agarre su estilisacion
        task.classList.add("card");
        input.value = '';
        //creamos un elemento <div>
        const taskContent = document.createElement('div');
        //creamos un elemento <span> para el titulo
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        //agreamos hijos a <div>:
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        //agregamos a <li>
        list.appendChild(task);
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
    }
    btn.addEventListener('click',createTask);
//funciones para elmentos hijos
    const checkComplete = ()=>{
        const i = document.createElement('i');
        i.classList.add('far');
        i.classList.add('fa-check-square');
        i.classList.add('icon');
        i.addEventListener('click',completeTask);
        return i;
    }
    //funcion check de "realizado"
    const completeTask = (event)=>{
        const element = event.target;
        //toggle si la clase existe la quito,si no existe la pongo
        element.classList.toggle('fas',);
        element.classList.toggle('completeIcon');
        element.classList.toggle('far');
        return element;
    }
    //para agrega icono eliminar
    const deleteIcon = ()=>{
        const i = document.createElement('i');
        //esta es otra manera de agregar una clase o varias a un lemento DOM
        i.classList.add('fas','fa-trash-alt','trashIcon','icon');
        i.addEventListener('click',deleteTask);
        return i;
    }
    //funcion que elimina
    const deleteTask = (event)=>{
       const parent = event.target.parentElement;
       parent.remove();
       return parent;
    }
})();//para que funcione se manda llamar de inmediato