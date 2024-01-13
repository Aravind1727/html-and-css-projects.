const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('mousemove', e => {
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
    const mouseX = e.pageX - box.offsetLeft