
$(document).ready(function () {

  //Declarando ambiente do arborjs---------------
  var sys = arbor.ParticleSystem(1000, 600, 0.5)
  sys.parameters({gravity:true})
  sys.renderer = Renderer("#viewport")
  //---------------------------------------------


  //Declarando variaveis de controle-------------
  var a = 65;
  var x, y;
  var nodes;
  var vetor = new Array();
  //---------------------------------------------


  //Função para adicionar um node ao grafo-------
  var addNode = function () {
    nodes++;
    a++;
    sys.addNode(String.fromCharCode(a-1));
    vetor.push({id: String.fromCharCode(a-1), list:[]});
    console.log(vetor);
  }
  //---------------------------------------------


  //Função para adicionar os nodes iniciais do grafo
  var addNodes = function () {
    nodes = $('#qtdNo').val();
    a = 65;
    for(i = 0;i < nodes; i++){
      sys.addNode(String.fromCharCode(a));
      vetor.push({id: String.fromCharCode(a), list:[]});
      a++;
    }
    console.log(vetor);
  }
  //-----------------------------------------------


  //Função para limpar o grafo---------------------
  var deleteGrafo = function () {
    console.log(nodes+ ' '+ a);
    a = 65; 
    for(i = 0; i < nodes; i++){
      sys.pruneNode(String.fromCharCode(a));
      vetor.shift();
      a++;
    }
    nodes = 0;
    
    $('#btnA').prop("disabled",false);
    $('#qtdNo').prop("disabled", false);
    $('#qtdNo').val('');
  }
  //-----------------------------------------------


  var addEdge = function () {
    x = $('#noX').val();
    y = $('#noY').val();
    peso = $('#peso').val();

    sys.addEdge(x, y,{name: peso});
    for (i=0;i<nodes;i++){
      if(vetor[i].id==x){
        vetor[i].list.push({_aresta:{adj:y, peso:peso}});
        console.log(vetor[i]);
      }
    }
    console.log(sys.addEdge(x,y));
  }


  //Evento que dispara ao clicar no botão de id="btnA" (Chama função de criar grafo)
  $('#btnA').click(function () {
    addNodes();
    $('#btnA').prop("disabled",true);
    $('#qtdNo').prop("disabled", true);
  })
  //--------------------------------------------------------------------------------


  //Evento que dispara ao clicar no botão de id = "btnB" (chama função de limpar o grafo)
  $('#btnB').click(function (){
    if(nodes == 0){
      console.log('Sem Grafos');
    }else{
      console.log(nodes);
      deleteGrafo();
    }
    
  })
  //---------------------------------------------------------------------------------------

  $('#btnC').click(function () {
    addNode();
  })

  $('#btnAddEdge').click(function () {
    addEdge();
  })
  
});



