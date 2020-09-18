
// Select color input
var color = $("#colorPicker").val();
// Select size input
var width, height;

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (event) {
  event.preventDefault();
  width = $("#inputWidth").val();
  height = $("#inputHeight").val();
  makeGrid(height, width);
});
// pick the color
$("#colorPicker").change(function (event) {
  event.preventDefault();
  return color;
});


function makeGrid(h, w) {
  // remove previous table rows
  $('tr').remove();
    // add height
    for (var rw = 0; rw < h; rw++) {
    $('#pixelCanvas').append('<tr></tr>');
    }
    // add width
    for (var clm = 0; clm < w; clm++) {
    $('tr').append('<td></td>');
    }
    // change color of the cell
    $("td").click(function (event){
      $(this).css("background-color", color);
    });
}
