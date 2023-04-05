function myFunction() {
    document.getElementById("MyInput").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          var input = document.getElementById("MyInput").value.toLowerCase();
          if (input === "włochy") {
            window.location.href = "italy.html";
          } else if (input === "dominikana") {
            window.location.href = "dominikana.html";
        } else if (input === "kenia") {
            window.location.href = "kenia.html";
        } else if (input === "tajlandia") {
            window.location.href = "tajlandia.html";
        } else if (input === "egipt") {
            window.location.href = "egipt.html";
        } else if (input === "turcja") {
            window.location.href = "turcja.html";
        } else if (input === "kuba") {
            window.location.href = "kuba.html";
        } else if (input === "jamajka") {
            window.location.href = "jamajka.html";
        } else if (input === "usa") {
            window.location.href = "usa.html";
        } else if (input === "cypr") {
            window.location.href = "cypr.html";
        } else if (input === "grecja") {
            window.location.href = "grecja.html";
        } else if (input === "malediwy") {
            window.location.href = "malediwy.html";
        } else if (input === "meksyk") {
            window.location.href = "meksyk.html";
        } else if (input === "praga") {
            window.location.href = "praga.html";
        } else if (input === "mauritius") {
            window.location.href = "mauritius.html"; 
        } else if (input === "zanzibar") {
            window.location.href = "zanzibar.html"; 
          } else {
            alert("Nie posiadamy takiego kraju w swojej ofercie!");
          }
        }
      });
}