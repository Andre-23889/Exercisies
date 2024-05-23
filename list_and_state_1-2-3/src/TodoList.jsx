import { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"

function TodoList(){
    const [todos, setTodos] = useState([])

    function updateList () {

        let todo=document.getElementById("input").value

        setTodos([ ...todos, todo])

        document.getElementById("input").value= ""

        

    }

    function resetList (){
        setTodos([])
    }

    function editList(event){

        console.log(event.currentTarget.id)

        let i= event.currentTarget.id

        let edit= [...todos]
        edit.splice(i, 1);
        
        setTodos([...edit])
    
    }

    
    
    return(
        
        <div>
            <ul id="todosList">
                {todos.map((todo, index)=> {
                    return <li key={index} >{todo} <button id={index} type="button" name="remove" onClick={editList}>remove</button> </li>
                })}
            </ul>

            <input type="text" name="set_todo" id="input"></input>
            <button type="button" name="add_todo" onClick={updateList}>add</button>
            <button type="button" name="reset" onClick={resetList}>clear</button>
        </div>
    )
}



createRoot(document.getElementById("root")).render(<TodoList />)