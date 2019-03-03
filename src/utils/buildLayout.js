export function buildLayout(parent,cols) {
  var COL_COUNT = cols; 
  var col_heights = []
  var container = document.getElementById(parent);

  for (var i = 0; i <= COL_COUNT; i++) {
    col_heights.push(0);
  }

  for (var i = 0; i < container.children.length; i++) {
    var order = (i + 1) % COL_COUNT || COL_COUNT;
    container.children[i].style.order = order;
    col_heights[order] += parseFloat(container.children[i].style.height);
  }
  // var highest = Math.max.apply(Math, col_heights);
  // container.style.height = highest+'px';
}