//defining variables
function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0; //start point
  table = document.getElementById("myTable");
  switching = true; //condition to be met
  dir = "asc"; //direction equals ascending

  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      //compare elements
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      //switch places depending on direction
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break; // if condition is met break loop
        }
      } else if (dir == "desc") {
        //direction equals descending
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break; // if condition is met break loop
        }
      }
    }
    if (shouldSwitch) {
      // makes the switch and marks it as done
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      //if switch is met according to dir reset and ran the loop again
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function bookEd(id) {
  var favDest = ["Australia", "Sweden", "England", "New York"];
  if (id == "btn1") {
    document.getElementById("choice").innerHTML = favDest[0];
  } else if (id == "btn2") {
    document.getElementById("choice").innerHTML = favDest[1];
  } else if (id == "btn3") {
    document.getElementById("choice").innerHTML = favDest[2];
  } else if (id == "btn4") {
    document.getElementById("choice").innerHTML = favDest[3];
  }
  console.log(bookEd);
}

function confirm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var add = document.getElementById("add").value;
  var fon = document.getElementById("tel").value;

  document.getElementById("1").innerHTML = name;
  document.getElementById("2").innerHTML = email;
  document.getElementById("3").innerHTML = add;
  document.getElementById("4").innerHTML = fon;
}
