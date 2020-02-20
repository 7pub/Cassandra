
$(document).on('keypress', ':input:not(textarea):not([type=submit])', function (e) {
  if (e.which == 13) e.preventDefault();
});

function showPassword() {
  var x = document.getElementById("password-box");
  if (x.type === "password") { x.type = "text"; }
  else { x.type = "password"; }
}

function PasswordShowHide(button) {
  var password = document.getElementById("password-box");
  if (password.type == "password") { button.innerHTML = '<i id="fa-eye" class="fa fa-eye"></i>'; password.type = "text"; }
  else { button.innerHTML = '<i id="fa-eye" class="fa fa-eye-slash"></i>'; password.type = "password"; }
}

var myWindow;
function Index()          /**Index()          **/ { location.href = "/index.html"; }
function openTerms()      /**openTerms()      **/ { location.href = "/de-at/legal/Terms.html"; }
function openPolicy()     /**openPolicy()     **/ { location.href = "/de-at/legal/Policy.html"; }
function openPrevision()  /**openPrevision()  **/ { location.href = "/de-at/legal/Prevision.html"; }
function AuditPasswords() /**AuditPasswords() **/ { location.href = "/de-at/Audit.Password.html"; }
function ContactMe()      /**ContactMe()      **/ { location.href = "/de-at/ContactMe.html"; }
function EarlyAccessMode()/**EarlyAccessMode()**/ { location.href = "/de-at/EarlyAccessMode.html"; }
function ablage()         /**ablage()         **/ { location.href = "/testfiles/ablage.html"; }
function kAnonymity()     /**kAnonymity()     **/ { location.href = "/de-at/k.Anonymity.html"; }
function Databases()      /**ModalButtons()   **/ { location.href = "/de-at/Databases.html"; }
function GLRFC3986()      /**GLRFC3986()      **/ { location.href = "/de-at/GLRFC3986.html"; }
function RESTful()        /**RESTful()        **/ { location.href = "/RESTful/enough.html"; }
function dUtil()          /**RESTful()        **/ { location.href = "/de-at/utilization.domains.html"; }
function pUtil()          /**RESTful()        **/ { location.href = "/de-at/utilization.password.html"; }
function dbUtil()         /**Databases()      **/ { location.href = "/de-at/utilization.databases.html"; }
function video()          /**video()          **/ { location.href = "/de-at/video.html"; }

$(document).ready(function () {   //Vid
  $("#500").on("click", function (e) {
    e.preventDefault();
    $("#k18mj6IACB").modal({
      backdrop: "static",       //remove ability to close modal with click
      keyboard: false,          //remove option to close with keyboard
      show: true                //Display loader!
    });
    setTimeout(function () {
      $("#k18mj6IACB").modal("hide");
      $('#cfSZPxbvup').modal();
    }, 500);
  });
});

function OKatI4QL5Q()  /**leakdist_table   **/ { $('#OKatI4QL5Q').modal(); }
function YqN01LOWyH()  /**domaindist_table **/ { $('#YqN01LOWyH').modal(); }
function wlLRVstozn()  /**pUtil            **/ { $('#wlLRVstozn').modal(); }
function cfSZPxbvup()  /**Vid              **/ { $('#cfSZPxbvup').modal(); }
function F5gfQnBa8g()  /**Get API Response **/ { $('#F5gfQnBa8g').modal(); }
function mDe8GjqK2G()  /**common           **/ { $('#mDe8GjqK2G').modal(); }

function responsiveTopNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function instSearch() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("dbUtilInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("dbUtilTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}