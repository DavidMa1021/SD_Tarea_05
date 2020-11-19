getList = function(){
    console.log("Get list")
    fetch('http://localhost:3000/parks')
    .then(response => response.json())
    .then(
        data => {
            var panel = document.createElement("div");
            data.list.forEach(element => {
                var card = document.createElement("h1");
                card.innerText = element.name;
                panel.appendChild(card)
            });
            var body = document.getElementById("main");
            body.appendChild(panel);
        }
    );
}
$(document).ready(function() {
    $( "#buttonJquery" ).click(function() {
        $.ajax({
            url: "http://127.0.0.1:3000/parks",
            success: function( result ) {
                JSON.parse(result).list.forEach(element => {
                    $("body").append('<h1>' + element.name + '</h1>');
                });
            }
        });
    });
});