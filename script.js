/* const tag = document.createElement('script');
tag.src = 'https://cdn.jsdelivr.net/gh/rkgttr/mc@6/script.js';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">*/
const addCss = (fileName)=>{

  let head = document.head;
  let link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}
const init = ()=>{
  const head = document.head;
  const link1 = document.createElement('link');
  link1.rel = 'preconnect';
  link1.href= 'https://fonts.googleapis.com';
  head.appendChild(link1);
  const link2 = document.createElement('link');
  link2.rel = 'preconnect';
  link2.href = 'https://fonts.gstatic.com';
  link2.setAttribute('crossorigin', '');
  head.appendChild(link2);
  const link3 = document.createElement('link');
  link3.rel = 'stylesheet';
  link3.href =
    'https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800;900&display=swap';
  head.appendChild(link3);
  addCss('https://cdn.jsdelivr.net/gh/rkgttr/mc@6/new.css');
  document.body.innerHTML = document.body.innerHTML.replace('Maison Haute', 'Mountain Collection');
  document.querySelector(
    'img[src="https://www.maisonhaute.com/UserFiles/local-miniatures/UserFiles/File/organisme/UserFiles-maisonhaute/File/thumbresize/1400-1000/Carte-CDA-2022.jpg"]'
  ).src = 'https://cdn.jsdelivr.net/gh/rkgttr/mc@6/Carte-CDA-2022.png';
  document.querySelector(
    'img[src="https://www.maisonhaute.com/UserFiles/local-miniatures/UserFiles/File/organisme/UserFiles-maisonhaute/File/thumbresize/1400-1000/Carte-CDA-2022.jpg"]'
  ).src = 'https://cdn.jsdelivr.net/gh/rkgttr/mc@6/Carte-CDA-2022.png';
  document.querySelectorAll(
    'img[src*="logo-header"], img[src*="logo-footer"]'
  ).forEach(i => i.src =
    'https://cdn.jsdelivr.net/gh/rkgttr/mc@6/Logo_Def_Master_Fond_Bleu.png');
}
init();