


  $( document ).ready(function() {
   readDatabase();
  

    date();
    currentTime();
    let count = 0;
   
    let newPrecio = 0;
    $( "#mainBtn").on( "click", function(event) {
        event.preventDefault();
        if (count == 0) {
        generateSerial();
      
        }
        count++
        $("#totalCount").text(count);
        let type = $("#type").val().toUpperCase();
        let nombre = $("#nombre").val();
        let numero = $("#numero").val();
        let precio = $("#precio").val();
        newPrecio = (Number(newPrecio) + Number(precio));
       $("#totalPrice").text("$" + newPrecio + ".00");
       
        addRow(count,type,numero,precio,nombre);
      });

      $(".typeBtn").on( "click", function() {
        let ticketTypeText = $(this).attr("ticketType")
        $("#typeTicketText").text(ticketTypeText);

      
    // var ticketTypeTextDiv = $("h2").text(ticketTypeText);
  
    // $("#typeTicketText").append(ticketTypeTextDiv);
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

    $("#serial").text("Serial: " + randomSerial);
    
   
};
    
  
    

function addRow(count,type,numero,precio,nombre) {
  
 
    // if (nombre.length !== 0) {
    // var nombreDiv = $("h1").text(nombre);
    // };
    // $("#nombreElement").append(nombreDiv);

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


function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec); document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
  setTimeout( function(){ currentTime()},1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) 
   k= "0" + k;
  
  
    return k;
  
}

currentTime(); /* calling currentTime() function to initiate the process */

function date() {
  var days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
var today = new Date();


var n = today.getDay();

var dayDiv = $("#day").text(days[n]);
$("#day").append(dayDiv);

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

out.innerHTML = month + "-" + day + "-" + year;
};

function writeUserData(ticketNumber) {
  firebase.database().ref().set({
    ticketNumber: ticketNumber
  });
}


function readDatabase() {

firebase.database().ref().once('value').then(function(snapshot) {
        var ticketNumber= snapshot.val().ticketNumber;
  
      
       writeUserData((ticketNumber + 1));
updateTicketNumber(ticketNumber + 1);
    });
  
}


function updateTicketNumber(ticketNumber) {
 
$("#ticketNumber").text("Ticket #: " + ticketNumber);
}