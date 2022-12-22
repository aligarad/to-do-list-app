 const form = document.getElementById("form")

 form.addEventListener('submit', (e) => {
    e.preventDefault();

    getToDo(e.target.input.value)
    form.reset();
 });

 function getToDo(todo){
   const div = document.getElementById("get");

   const para = document.createElement("p");
   const btn = document.createElement("button");

   para.textContent = todo;
   btn.textContent = "Del";

   btn.addEventListener('click', deleteToDo);

   div.appendChild(para);
   para.appendChild(btn);
}

function deleteToDo(e){
   e.target.parentNode.remove();
}