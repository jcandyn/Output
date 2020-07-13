

  $( document ).ready(function() {
    let count = 0;
    $( "#mainBtn").on( "click", function(event) {
        event.preventDefault();
        if (count == 0) {
        generateSerial();
        date();
        }
        count++
        let type = $("#type").val().toUpperCase();
        let nombre = $("#nombre").val();
        let numero = $("#numero").val();
        let precio = $("#precio").val();
       
        addRow(count,type,numero,precio,nombre);
      });

      $(".typeBtn").on( "click", function() {
        alert($(this).attr("ticketType"))
      });

  
});

function generateSerial() {
    
    'use strict';
    
    var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        
        serialLength = 10,
        
        randomSerial = "",
        
        i,
        
        randomNumber;
    
    for (i = 0; i < serialLength; i = i + 1) {
        
        randomNumber = Math.floor(Math.random() * chars.length);
        
        randomSerial += chars.substring(randomNumber, randomNumber + 1);
        
    }

    var serialNumber = $("h3").text("Serial: " + randomSerial);
    
    $("#serial").append(serialNumber);
};
    
  
    

function addRow(count,type,numero,precio,nombre) {
  
 
    if (nombre.length !== 0) {
    var nombreDiv = $("h1").text(nombre);
    };
    $("#nombreElement").append(nombreDiv);

  var newRow = $("<tr>").append(
    $("<th>").text(count).attr("scope","row"),
    $("<td>").text(type),
    $("<td>").text(numero),
    $("<td>").text("$"+precio+".00")

  
  );

  

  // Append the new row to the table
  $("#ticket-table > tbody").append(newRow);

  $("#type").val("");
  $("#nombre").val("");
   $("#numero").val("");
  $("#precio").val("");
};

function date() {
    
var today = new Date();

var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

if (day < 10) {
  day = '0' + day
}
if (month < 10) {
  month = '0' + month
}

var out = document.getElementById("date");

out.innerHTML = month + "/" + day + "/" + year;
};