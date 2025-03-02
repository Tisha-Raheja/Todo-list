const text = document.getElementById("text");
const button = document.getElementById("button");
const container = document.getElementById("container");
button.addEventListener("click", () =>{
const userinput= text.value;
if(userinput==="")return;
const taskDiv = document.createElement("div");
taskDiv.classList.add("task");
const p = document.createElement("p");
p.textContent = userinput;
const remove = document.createElement("button");
        remove.textContent ="Remove";
        remove.classList.add("remove");
      

remove.addEventListener("click",() =>{
    container.removeChild(taskDiv); 
});
    const edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.classList.add("edit");
       edit.addEventListener("click", () => {
                const newText = prompt("Edit your task:", p.textContent);
                if (newText && newText.trim() !== "") {
                    p.textContent = newText;
                }

            });
            const complete = document.createElement("button");
            complete.textContent = "Complete";
            complete.classList.add("complete");

            complete.addEventListener("click", () => {
                p.classList.toggle("completed");
                // Change button text based on task completion
                if (p.classList.contains("completed")) {
                    complete.textContent = "Undo";
                } else {
                    complete.textContent = "Complete";
                }
            });

    
taskDiv.appendChild(p); 
taskDiv.appendChild(remove);
taskDiv.appendChild(edit);
taskDiv.appendChild(complete);
container.append(taskDiv);
text.value="";
});

