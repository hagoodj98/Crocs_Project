var divs = new Array();
divs[0] = "errFirst";
divs[1] = "errLast";
divs[2] = "errEmail";
divs[3] = "errUid";
divs[4] = "errPassword";
divs[5] = "errConfirm";


/*function application()
{
  document.getElementById('fn').innerHTML = document.myform.first.value;
  document.getElementById('last').innerHTML = document.myform.last.value;
  document.getElementById('email').innerHTML = document.myform.email.value;
  document.getElementById('user').innerHTML = document.myform.uid.value;
}
*/

function teenboy() {
//  alert();
  if (document.getElementById('male').checked) {

      document.getElementById('formplaceboy').style.display = "block";
      document.getElementById('formplacegirl').style.display = "none";
  }
/*  else {
    document.getElementById('formplaceboy').style.display = "none";
  }*/
}
//copy paste teenboy for girl

//shoes for girls

//function
//images\shoesforsalewomen\205483_6L0_ALT140.jpg
function teengirl() {
  if (document.getElementById('female').checked) {

      document.getElementById('formplacegirl').style.display = "block";
      document.getElementById('formplaceboy').style.display = "none";

  }
  /*else {
    document.getElementById('formplacegirl').style.display = "none";
  }*/
}



    //////
