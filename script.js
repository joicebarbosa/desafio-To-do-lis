const inputBox = document.querySelector(".inputField input");
const todoBox = document.querySelector(".todoList");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value; //obter o valor inserido pelo usuário
    if(userData.trim() != 0){ //se os valores não são apenas espaços
          addBtn.classList.add("active"); //ativa o botão adicionar 
    }else{
          addBtn.classList.remove("active");// desativa o botão adicionar
    }
} 

// se o usuario clicar no botão adicionar 
addBtn.onclick =  ()=>{
    let userData = inputBox.value; //obter o valor inserido pelo usuário
    let getLocalStorage = localStorage.getItem("New Todo"); // recebendo armazenamento local 
    if(getLocalStorage == null){ //se o armazenamento local for nulo
        listArr = []; // criando matriz em branco
    }else{
        listArr = JSON.parse(getLocalStorage);// transformar string json em um objeto js
    }
    listArr.push(userData); //Enviar ou adicionar dados do usuario
    localStorage.setItem("New Todo", JSON.stringify(listArr)); // transformando o objeto js em uma string json
    showTasks(); //chamando a função showTasks
    addBtn.classList.remove("active");// desativa o botão 
}

//função para adicionar lista de tarefa dentro de ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){ //se o armazenamento local for nulo
      listArr = []; // criando matriz em branco
    }else{
      listArr = JSON.parse(getLocalStorage);// transformar string json em um objeto js
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length; //passando o valor de pendingNumb
    if(listArr.length > 0){ //se o comprimento da matriz for maior que 0
      deleteAllBtn.classList.add("active"); //ativa o botão 
    }else{deleteAllBtn.classList.remove("active"); //inativa o botã
        
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; // Adicionando nova tag li a tag ul
    inputBox.value = ""; // Uma vez que a tarefa é adicionada, deixe o campo de entrada em branco

  }

  //exluir tarefa de função
  function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); //delete ou remova o li indexado particular
    // depois de remover o li novamente atualize o armazenamento local 
    localStorage.setItem("New Todo", JSON.stringify(listArr)); // transformando o objeto js em uma string json
    showTasks(); //chamando a função showTasks
  }

  //apagas todas as funcções da tarafa
   deleteAllBtn.onclick = ()=>{
      listArr = []; //esvaziar um array
      //após excluir todas as tarefas novamente atualize o armazenamento loca
      localStorage.setItem("New Todo", JSON.stringify(listArr)); // transformando o objeto js em uma string json
      showTasks(); //chamando a função showTasks
       
  }





















































/* var checkbox = document. querySelector("#checkbox"); 
function ativarCheckbox(el) {
    el. checked = true;
    ativarCheckbox(checkbox);*/


/*const form = document.getElementById('div');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.createElement('div');
    addTask(inputField.value);
    form.requestFullscreen();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}*/
