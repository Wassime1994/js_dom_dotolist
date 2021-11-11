let btn_add = document.getElementById('btn_add');
let root = document.getElementById('root');
let clear = document.querySelector('.clear')
let children = [];
// mon input pour changer quand on clique sur modifier
let input = document.createElement('input')
input.style.width = "100%";
input.style.height = "43px";
// Ma div de creation
let divCreate;
let allDiv = document.querySelectorAll('.div')
// Mes deux variables de modification
let modifier;
let supprime;
let btn_do = document.querySelector('.btn_do')
console.log(btn_do)
let btnto_do = document.querySelector('.btn_todo')
let btnAll = document.querySelector('.btn_all')
let btnCreate;
let array_do = []
let stock = []
let screen = document.getElementById('screen');

export  {btn_do, btnto_do, btnAll , btnCreate,array_do,stock,screen,supprime,modifier,allDiv,divCreate,input,children,clear,root,btn_add} 