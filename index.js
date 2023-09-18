const tarefas = [];


function criarTarefa() {
  const titulo = prompt("Digite o título da tarefa:");
  const descricao = prompt("Digite a descrição da tarefa:");
  const status = "pendente";

  const novaTarefa = {
    titulo,
    descricao,
    status
  };

  tarefas.push(novaTarefa);
 console.log('A tarefa foi criada');
}



function visualizarTarefas() {
  if (tarefas.length === 0) {
   console.log('nenhuma tarefa foi cadastrada');
  } else {
    console.log("Lista de tarefas:");
    tarefas.forEach((tarefa, indicie) => {
    console.log(`Tarefa ${indicie + 1}:`);
   console.log(`Título: ${tarefa.titulo}`);
      console.log(`Descrição: ${tarefa.descricao}`);
      console.log(`Status: ${tarefa.status}`);
  console.log("");
    });
  }
}


function edita…
 function editarTarefa() {
  const indice = prompt("Digite o índice da tarefa que deseja editar:") - 1;

  if ( indice < 0 || indice >= tarefas.length) {
    console.log("Índice inválido");
  } else {
    const novoTitulo = prompt("Digite o novo título da tarefa:");
    const novaDescricao = prompt("Digite a nova descrição da tarefa:");

    tarefas[indice].titulo = novoTitulo;
    tarefas[indice].descricao = novaDescricao;
    console.log("Tarefa editada com sucesso");
  }
}


function apagarTarefa() {
  const indice = prompt("Digite o índice da tarefa que deseja apagar:") - 1;

  if (indice || indice < 0 || indice >= tarefas.length) {
    console.log("Índice inválido.");
  } else {
    tarefas.splice(indice, 1);
    console.log("Tarefa apagada com sucesso");
  }


}


let escolha;
do {
  escolha = prompt("Escolha uma opção: Numero1: Criar Tarefa,  Numero2: Visualizar Tarefas,  Numero3: Editar Tarefa,  Numero4: Apagar Tarefa,  Numero5: Sair");
  switch (escolha) {
    case "1":
      criarTarefa();
    break;
    case "2":
      visualizarTarefas();
  
      break;
    case "3":
      editarTarefa();
  
      break;
    case "4":
      apagarTarefa();
   break;
    case "5":
      console.log("Saindo do programa");
   break;
    default:
      console.log("Opção inválida. Tente novamente");
  }
} while (escolha !== "5");
