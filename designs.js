// Select color input
// Select size input
var width, height, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    width = $('#inputWidth').val();
    height = $('#inputHeight').val();
    makeGrid(height, width);
})


function makeGrid(x , y) {
    $('tr').remove();

    // Your code go es here!
    for (var v = 1; v <= x; v++){
        $('#pixelCanvas').append('<tr id=table' + v + '></tr>');
        for (var h = 1; h <= y; h++){
            $('#table' + v).append('<td></td>');
        }
    }

    //add color to cell
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        }else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
