const containerElement = document.getElementById("title");

let jobs = [
  " Project Manager  ",
  " Business Analyst  ",
  " Project Coordinator  ",
  " Web Developer  ",
  " Computer Nerd  ",
];

let jobIndex = 0;

let indexLetter = 0;


function updateJob(){

  indexLetter++;
  
  containerElement.innerHTML= `
  <h1>I am a ${jobs[jobIndex].slice(0,indexLetter)}</h1>
  `;
  
  if (indexLetter === jobs[jobIndex].length){
    jobIndex++;
    indexLetter = 0;
  }
  
  
  if (jobIndex === jobs.length){
    jobIndex = 0;
  }
  
  setTimeout(updateJob,120);

};

updateJob();
