const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const questionPage = document.getElementById('question-page');
const successPage = document.getElementById('success-page');
const hint = document.getElementById('hint');


let yesSize = 18;

noButton.addEventListener('mouseover', () => {
    //making the the No button fly around the screen
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;


});
//hint popping up once she hovers over YES button
yesButton.addEventListener('mouseover', () =>{
    hint.classList.remove('hidden');
});

//hiding the hint once she isn't hovering over YES anymore
yesButton.addEventListener('mouseout', () =>{
    hint.classList.add('hidden');
});

yesButton.addEventListener('click', () => {
    questionPage.classList.add('hidden');
    successPage.classList.remove('hidden');

});