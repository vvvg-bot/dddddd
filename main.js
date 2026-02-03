document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.palette.top .c').forEach(color => {
    color.addEventListener('click', () => {
      const bg = getComputedStyle(color).backgroundColor;

      document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = bg;
      });
    });
  });

  document.querySelectorAll('.palette.bottom .c').forEach(color => {
    color.addEventListener('click', () => {
      const bg = getComputedStyle(color).backgroundColor;
      document.body.style.backgroundColor = bg;
    });
  });

});
