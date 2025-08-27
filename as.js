const soQuestions = [
  { question: "Qual é a função principal de um Sistema Operacional?", options: ["Executar softwares e gerenciar hardware","Desenvolver programas","Armazenar dados na nuvem"], answer: 0 },
  { question: "Qual sistema é conhecido por código aberto?", options: ["Windows","Linux","MacOS"], answer: 1 },
  { question: "O que é multitarefa em SO?", options: ["Rodar múltiplos programas ao mesmo tempo","Conectar vários computadores","Atualizar o sistema"], answer: 0 },
  { question: "Qual SO é mais usado em servidores?", options: ["Linux","Windows","Android"], answer: 0 },
  { question: "O que é uma memória virtual?", options: ["Espaço em disco usado como RAM","Memória RAM extra","CPU auxiliar"], answer: 0 }
];

let currentSo = 0, soScore = 0;
const soQEl = document.getElementById("so-question");
const soOptionsEl = document.getElementById("so-options");
const soNextBtn = document.getElementById("so-next-btn");
const soResultEl = document.getElementById("so-result");

function loadSoQuestion(){
  const current = soQuestions[currentSo];
  soQEl.textContent = current.question;
  soOptionsEl.innerHTML = "";
  current.options.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", ()=> selectSoAnswer(btn,i));
    soOptionsEl.appendChild(btn);
  });
  soNextBtn.style.display="none";
}

function selectSoAnswer(btn,index){
  const current = soQuestions[currentSo];
  const buttons = soOptionsEl.querySelectorAll("button");
  buttons.forEach((b,i)=> {b.disabled=true; if(i===current.answer) b.classList.add("correct");});
  if(index===current.answer) soScore++; else btn.classList.add("wrong");
  soNextBtn.style.display="block";
}

soNextBtn.addEventListener("click", ()=>{
  currentSo++;
  if(currentSo<soQuestions.length) loadSoQuestion(); else showSoResult();
});

function showSoResult(){
  soQEl.style.display="none"; soOptionsEl.style.display="none"; soNextBtn.style.display="none";
  soResultEl.style.display="block";
  soResultEl.textContent = `🎉 Você acertou ${soScore} de ${soQuestions.length} perguntas!`;
}

loadSoQuestion();

/* ------------------ Quiz Arquitetura de Computadores ------------------ */
const arqQuestions = [
  { question: "Qual componente é considerado o cérebro do computador?", options:["Placa de Vídeo","Memória RAM","Processador","Cooler"], answer:2 },
  { question: "Qual componente armazena dados temporariamente?", options:["HD/SSD","Memória RAM","Placa-Mãe","Fonte"], answer:1 },
  { question: "Qual componente gera gráficos e imagens?", options:["SSD","Placa de Vídeo","Processador","Fonte"], answer:1 },
  { question: "Qual peça armazena arquivos permanentemente?", options:["HD/SSD","RAM","Cooler","Fonte"], answer:0 },
  { question: "Qual componente resfria o processador?", options:["Fonte","Cooler","Placa-Mãe","SSD"], answer:1 }
];

let currentArq = 0, arqScore = 0;
const arqQEl = document.getElementById("arq-question");
const arqOptionsEl = document.getElementById("arq-options");
const arqNextBtn = document.getElementById("arq-next-btn");
const arqResultEl = document.getElementById("arq-result");

function loadArqQuestion(){
  const current = arqQuestions[currentArq];
  arqQEl.textContent = current.question;
  arqOptionsEl.innerHTML = "";
  current.options.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", ()=> selectArqAnswer(btn,i));
    arqOptionsEl.appendChild(btn);
  });
  arqNextBtn.style.display="none";
}

function selectArqAnswer(btn,index){
  const current = arqQuestions[currentArq];
  const buttons = arqOptionsEl.querySelectorAll("button");
  buttons.forEach((b,i)=> {b.disabled=true; if(i===current.answer) b.classList.add("correct");});
  if(index===current.answer) arqScore++; else btn.classList.add("wrong");
  arqNextBtn.style.display="block";
}

arqNextBtn.addEventListener("click", ()=>{
  currentArq++;
  if(currentArq<arqQuestions.length) loadArqQuestion(); else showArqResult();
});

function showArqResult(){
  arqQEl.style.display="none"; arqOptionsEl.style.display="none"; arqNextBtn.style.display="none";
  arqResultEl.style.display="block";
  arqResultEl.textContent = `🎉 Você acertou ${arqScore} de ${arqQuestions.length} perguntas!`;
}

loadArqQuestion();


  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const dropdowns = document.querySelectorAll(".dropdown");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    menu.style.display = menu.classList.contains("show") ? "flex" : "none";
  });

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("active");
    });
  });

