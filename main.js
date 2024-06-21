function playAudio(audio){
  const elemento = document.querySelector(audio);

  if(elemento != null && elemento.localName === 'audio') elemento.play();
  else console.log('Elemento não encontrado ou seletor inválido');
}

const listaSons = document.querySelectorAll('.tecla');

let i = 0;

for(let i = 0; i < listaSons.length; i++){
  let som = listaSons[i].classList;
  listaSons[i].onclick = function (){
    playAudio(`#som_${som[1]}`); //template string
  }

  listaSons[i].onkeydown = function(e){
    if(e.code == 'Enter' || e.code == 'Space') som.add('ativa')
  }

  listaSons[i].onkeyup = function(){
    som.remove('ativa')
  }
}