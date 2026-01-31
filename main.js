

let currentColor = 0;

document.querySelectorAll('.palette.top .c').forEach(color => {
  color.addEventListener('click', () => {
    currentColor = getComputedStyle(color).backgroundColor;
  });
});


document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', () => {
    if (currentColor) {
      cell.style.backgroundColor = currentColor;
    }
  });
});


document.querySelectorAll('.palette.bottom .c').forEach(color => {
  color.addEventListener('click', () => {
    const bg = getComputedStyle(color).backgroundColor;
    document.body.style.backgroundColor = bg;
  });
});

