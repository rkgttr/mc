const addCss = (fileName)=>{

  let head = document.head;
  let link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}
const init = ()=>{
  addCss('https://cdn.jsdelivr.net/gh/rkgttr/mc@latest/new.css');
  document.body.innerHTML = document.body.innerHTML.replace('Maison Haute', 'Mountain Collection');
  document.querySelector(
    'img[src="https://www.maisonhaute.com/UserFiles/local-miniatures/UserFiles/File/organisme/UserFiles-maisonhaute/File/thumbresize/1400-1000/Carte-CDA-2022.jpg"]'
  ).src = 'https://cdn.jsdelivr.net/gh/rkgttr/mc@latest/Carte-CDA-2022.png';
  document.querySelector(
    'img[src="https://www.maisonhaute.com/UserFiles/local-miniatures/UserFiles/File/organisme/UserFiles-maisonhaute/File/thumbresize/1400-1000/Carte-CDA-2022.jpg"]'
  ).src = 'https://cdn.jsdelivr.net/gh/rkgttr/mc@latest/Carte-CDA-2022.png';
  document.querySelector(
    'img[src="/images-mb-maisonhaute/logo-header.jpg"]'
  ).src =
    'https://cdn.jsdelivr.net/gh/rkgttr/mc@latest/Logo_Def_Master_Fond_Bleu.png';
}
init();