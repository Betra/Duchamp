export function buildLayout(parent,cols) {
  var COL_COUNT = cols; 
  var col_heights = []
  var container = document.getElementById(parent);

  for (var i = 0; i <= COL_COUNT; i++) {
    col_heights.push(0);
  }

  for (var j = 0; j < container.children.length; j++) {
    var order = (j + 1) % COL_COUNT || COL_COUNT;
    container.children[j].style.order = order;
    col_heights[order] += parseFloat(container.children[j].style.height);
  }
  // var highest = Math.max.apply(Math, col_heights);
  // container.style.height = highest+'px';
}