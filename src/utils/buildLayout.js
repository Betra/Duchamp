export const buildLayout = (parent, cols) => {
  const columnCount = cols;
  const columnHeight = [];
  const container = document.getElementById(parent);

  for (let i = 0; i <= columnCount; i++) {
    columnHeight.push(0);
  }

  for (let j = 0; j < container.children.length; j++) {
    var order = (j + 1) % columnCount || columnCount;
    container.children[j].style.order = order;
    columnHeight[order] += parseFloat(container.children[j].style.height);
  }
  // var highest = Math.max.apply(Math, columnHeight);
  // container.style.height = highest+'px';
};
