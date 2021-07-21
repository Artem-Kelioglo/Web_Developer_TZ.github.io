const color={
  "light":{
    hedFot:"cadetblue",
    main:"paleturquoise",
    text:"black"
  },
  "dark":{
    hedFot:"black",
    main:"slategray",
    text:"white"
  },
  "gray":{
    hedFot:"gray",
    main:"silver",
    text:"white"
  }
};

const main=document.querySelector('main');
const header=document.querySelector('header');
const footer=document.querySelector('footer');
const select = document.getElementById('paint');
const textColor=document.querySelectorAll('.color');
const buttons=document.querySelectorAll('.button-theme__button');
const radio=document.querySelectorAll('.inputs-radio');

function changeSelect(){
  let theme=select.options[select.selectedIndex].value;
  themeColor(theme);
}

function clickButton(i){
  let theme=buttons[i].value;
  themeColor(theme);
}

function clickRadio(){
  let theme=null;

  for(let i=0;i<radio.length;i++){
    if(radio[i].checked){
        theme=radio[i].value;
    }
  }
  
  themeColor(theme);
}

function themeColor(theme){
  main.style.backgroundColor = color[`${theme}`].main;
  header.style.backgroundColor =color[`${theme}`].hedFot ;
  footer.style.backgroundColor =color[`${theme}`].hedFot ;

  for(let i=0;i<textColor.length;i++){
    textColor[i].style.color=color[`${theme}`].text;
  }
}

let modal=document.querySelector("#myModal");
let mod=document.querySelector(".foto-img");
let gallary=document.querySelector(".gallery");
let span=document.querySelector(".close");

gallary.onclick=function(event){
  let target=event.target;
  if(target.tagName=="IMG"){
    let a= target.cloneNode(true);
    mod.append(a);
    modal.style.display="block" ;
  }
}

span.onclick=function(){
  closeModal();
}
window.onclick=function(event){
  if(event.target==modal){
    closeModal();
  }
}
function closeModal(){
  mod.lastElementChild.remove();
  modal.style.display="none";
}