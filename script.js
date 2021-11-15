const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

const dragStart = (e) => {
  e.target.className += ' hold';
  setTimeout(() => {
    e.target.className = 'invisible';
  }, 0);
};

const dragEnd = (e) => {
  e.target.className = 'fill';
};

const dragOver = (e) => {
  e.preventDefault();
};
const dragEnter = (e) => {
  e.preventDefault();
  e.target.className += ' hovered';
};
const dragLeave = (e) => {
  e.target.className = 'empty';
};
const dragDrop = (e) => {
  console.log('drag drop');
  e.target.className = 'empty';
  e.target.append(fill);
};

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((element) => {
  element.addEventListener('dragover', dragOver);
  element.addEventListener('dragenter', dragEnter);
  element.addEventListener('dragleave', dragLeave);
  element.addEventListener('drop', dragDrop);
});
