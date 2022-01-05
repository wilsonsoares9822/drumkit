const tl = gsap.timeline({defaults: {duration: 0.2}});
tl.fromTo("h1", { y: -20, opacity: 0}, {duration: 1, y: 0, opacity: 1})
tl.fromTo(".btn", { y: -30, opacity: 0}
, { duration: 1, y: 0, opacity: 1, stagger: 0.2}
)

const btnA = document.querySelector('.a');
const btnB = document.querySelector('.b');
const btnC = document.querySelector('.c');
const btnD = document.querySelector('.d');
const btnE = document.querySelector('.e');
const btnF = document.querySelector('.f');

btnA.addEventListener('click', ()=>{
  var playing = new Audio('./snares/acc.wav');
  playing.play();
  tl.to(".a", { y: -30 }) 
  setTimeout(() => {
    tl.to(".a", { y: 0 })
  }, 100);
})
btnB.addEventListener('click', ()=>{
  var playing = new Audio('./snares/kick.wav');
  playing.play();
  tl.to(".b", { y: -30 });
  setTimeout(() => {
    tl.to(".b", { y: 0 })
  }, 100);
})
btnC.addEventListener('click', ()=>{
  var playing = new Audio('./snares/tom_1.wav');
  playing.play();
  tl.to(".c", { y: -30 });
  setTimeout(() => {
    tl.to(".c", { y: 0 })
  }, 100);
})
btnD.addEventListener('click', ()=>{
  var playing = new Audio('./snares/tom_2.wav');
  playing.play();
  tl.to(".d", { y: -30 });
  setTimeout(() => {
    tl.to(".d", { y: 0 })
  }, 100);
})
btnE.addEventListener('click', ()=>{
  var playing = new Audio('./snares/kicks.wav');
  playing.play();
  tl.to(".e", { y: -30 });
  setTimeout(() => {
    tl.to(".e", { y: 0 })
  }, 100);
})
btnF.addEventListener('click', ()=>{
  var playing = new Audio('./snares/hihat.wav');
  playing.play();
  tl.to(".f", { y: -30 });
  setTimeout(() => {
    tl.to(".f", { y: 0 })
  }, 100);
})

