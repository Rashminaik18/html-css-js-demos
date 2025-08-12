let todo=[];


while(true)
    
{
    let req=prompt("Enter your request");
    if(req=="quit")
        break;

    else if(req=="list")
    {
        if(todo.length!=0)
        {
            for(x of todo)
                console.log(x);
        }
        else
            console.log("Empty list");
    }

    else if(req=="add")
    {
        let v=prompt("Enter task");
        todo.push(v);
    }

    else if(req=="delete")
    {
        toDel=prompt("Enter task to be deleted");
        if(todo.includes(toDel))
        {
           let v= todo.indexOf(toDel);
           todo.splice(v,1);
        }
        else{
            alert("task do not exist");
        }
    }
    else{
        alert("Invalid request!");
     }
}