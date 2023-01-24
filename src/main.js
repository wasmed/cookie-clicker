import "./index.css";
import * as toastr from 'toastr';

(() => {

  var clickdouble = false;
  var clickboost = false;
  var clickBonus = false;
  var clickAuto = false;
  var score = 0;
  var cptDouble = 1;
  var cptBooster = 1;
  var cptBonus = 1;
  var cptAuto = 1;

  let buttonRun = document.querySelector("#run");
  buttonRun.disabled = true;
  let buttonRun1 = document.querySelector("#run1");
  buttonRun1.disabled = true;
  let buttonRun2 = document.querySelector("#run2");
  buttonRun2.disabled = true;
  let buttonRun3 = document.querySelector("#run3");
  buttonRun3.disabled = true;

  document.getElementById("reset").addEventListener("click", () => {
    clickdouble = false;
    clickboost = false;
    clickBonus = false;
    clickAuto = false;
    score = 0;
    cptDouble = 1;
    cptBooster = 1;
    cptBonus = 1;
    cptAuto = 1;


    buttonRun.disabled = true;

    buttonRun1.disabled = true;

    buttonRun2.disabled = true;

    buttonRun3.disabled = true;
    document.getElementById('run').innerHTML = "Bonus";
    document.getElementById('run1').innerHTML = "Bonus x2";
    document.getElementById('run2').innerHTML = "Booster";
    document.getElementById('run3').innerHTML = "Auto click";

    document.getElementById('run').style.backgroundColor = "gray";
    document.getElementById('run1').style.backgroundColor = "gray";
    document.getElementById('run2').style.backgroundColor = "gray";
    document.getElementById('run3').style.backgroundColor = "gray";
    document.getElementById('clicker-counter').innerHTML = +score;


  });

  document.getElementById("cookie").addEventListener("click", () => {
    if (score > 50) {
      buttonRun1.disabled = false;
      document.getElementById('run1').style.backgroundColor = "blue";

    } if (score > 80) {
      buttonRun2.disabled = false;
      document.getElementById('run2').style.backgroundColor = "blue";
    } if (score > 200) {
      buttonRun3.disabled = false;
      document.getElementById('run3').style.backgroundColor = "blue";
    } if (score > 250) {
      buttonRun.disabled = false;
      document.getElementById('run').style.backgroundColor = "blue";

    }

    if (clickdouble == true) {
      score += 1;

    } else if (clickboost == true) {
      score += 3;

    } else if (clickAuto == true) {

      score += 4;
      setTimeout(() => { clickAuto = false }, 30000);


    } else if (clickBonus == true) {
      score += 450;
      clickBonus = false;
    }
    score++;

    document.getElementById('clicker-counter').innerHTML = +score;
  });




  document.getElementById("run").addEventListener("click", () => {
    if (cptBonus == 1) {

      toastr.info("Voulez-vous acheter ce Bonus  à 250 pts pour obtenir 200% ?", "Confirmation", {
        closeButton: true,
        tapToDismiss: false,
        timeOut: 0,
        extendedTimeOut: 0,
        buttons: {
          confirm: {
            label: 'OK',
            className: 'btn-success'
          },
          cancel: {
            label: 'Annuler',
            className: 'btn-danger'
          }
        },
        onclick: function () {
          if (score > 250) {
            score -= 250;
            toastr.success("Félicitation, vous avez obtenu le bonus 200%");
            document.getElementById('clicker-counter').innerHTML = +score;

            document.getElementById('run').innerHTML = "250 ptns";


            clickAuto = false;
            clickdouble = false;
            clickBonus = true;
            clickboost = false;



          } else {
            toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce bonus");
          }
        }
      });


    } else if (cptBonus > 1) {

      toastr.info("Voulez-vous acheter ce Bonus  à 250 pts pour obtenir 200% ? " + (50 * cptDouble) + "pts ?", "Confirmation", {
        closeButton: true,
        tapToDismiss: false,
        timeOut: 0,
        extendedTimeOut: 0,
        buttons: {
          confirm: {
            label: 'OK',
            className: 'btn-success'
          },
          cancel: {
            label: 'Annuler',
            className: 'btn-danger'
          }
        },
        onclick: function () {
          if (score > 250 * cptBonus) {
            score -= 250 * cptBonus;
            toastr.success("Félicitation, vous avez obtenu le bonus 200%");
            document.getElementById('clicker-counter').innerHTML = +score;

            document.getElementById('run').innerHTML = 250 * cptBonus + " ptns";

            clickAuto = false;
            clickdouble = false;
            clickBonus = true;
            clickboost = false;

          } else {
            cptBonus--;
            toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce bonus");
          }
        }
      });
    }
    cptBonus++;

  });






  document.getElementById("run1").addEventListener("click", () => {

    if (cptDouble == 1) {

      toastr.info("Voulez-vous acheter ce multiplicateur x2 à 50 pts ?", "Confirmation", {
        closeButton: true,
        tapToDismiss: false,
        timeOut: 0,
        extendedTimeOut: 0,
        buttons: {
          confirm: {
            label: 'OK',
            className: 'btn-success'
          },
          cancel: {
            label: 'Annuler',
            className: 'btn-danger'
          }
        },
        onclick: function () {
          // action à effectuer si l'utilisateur clique sur OK
          if (score > 50) {
            score -= 50;
            toastr.success("Félicitation, vous avez obtenu le bonus x2");
            bonusx2();

            document.getElementById('clicker-counter').innerHTML = + score;
            document.getElementById('run1').innerHTML = "50 pts";

            clickdouble = true;
            clickBonus = false;
            clickboost = false;
            clickAuto = false;
          } else {
            toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce multiplicateur");
          }
        }
      });
    } else if (cptDouble > 1) {
      toastr.info("Voulez-vous acheter ce multiplicateur *2 à " + (50 * cptDouble) + "pts ?", "Confirmation", {
        closeButton: true,
        tapToDismiss: false,
        timeOut: 0,
        extendedTimeOut: 0,
        buttons: {
          confirm: {
            label: 'OK',
            className: 'btn-success'
          },
          cancel: {
            label: 'Annuler',
            className: 'btn-danger'
          }
        },
        onclick: function () {
          // action à effectuer si l'utilisateur clique sur OK
          if (score > 50 * cptDouble) {
            score -= 50 * cptDouble;
            toastr.success("Félicitation, vous avez obtenu le bonus x2");

            document.getElementById('clicker-counter').innerHTML = + score;
            document.getElementById('run1').innerHTML = 50 * cptDouble + 'pts ';

            clickdouble = true;
            clickBonus = false;
            clickboost = false;
            clickAuto = false;
          } else {
            cptDouble--;
            toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce multiplicateur");
          }
        }
      });
    }
    cptDouble++;
  });


  document.getElementById("run2").addEventListener("click", () => {

    if (cptBooster == 1) {

      toastr.info("Voulez-vous acheter ce multiplicateur x5 à 80 pts ?", "Confirmation", {
        closeButton: true,
        tapToDismiss: false,
        timeOut: 0,
        extendedTimeOut: 0,
        buttons: {
          confirm: {
            label: 'OK',
            className: 'btn-success'
          },
          cancel: {
            label: 'Annuler',
            className: 'btn-danger'
          }
        },
        onclick: function () {
          if (score > 80) {
            score -= 80;
            toastr.success("Félicitation, vous avez obtenu le bonus x5");
            booster();
            document.getElementById('clicker-counter').innerHTML = +score;
            document.getElementById('run2').innerHTML = "80 pts";


            clickboost = true;
            clickdouble = false;
            clickBonus = false;
            clickAuto = false;
            booster();

          } else {

            toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce multiplicateur");

            cptBooster--;
          }
        }
      });

    } else if (cptBooster > 1) {
      toastr.info("Voulez-vous acheter ce multiplicateur x5 à " + (80 * cptDouble) + "pts ?", "Confirmation", {
        closeButton: true,
        tapToDismiss: false,
        timeOut: 0,
        extendedTimeOut: 0,
        buttons: {
          confirm: {
            label: 'OK',
            className: 'btn-success'
          },
          cancel: {
            label: 'Annuler',
            className: 'btn-danger'
          }
        },

        onclick: function () {
          if (score > 80 * cptDouble) {
            score -= 80 * cptDouble;
            toastr.success("Félicitation, vous avez obtenu le bonus x5");
            document.getElementById('clicker-counter').innerHTML = +score;
            document.getElementById('run2').innerHTML = 80 * cptDouble + " pts";

            booster();


            clickboost = true;
            clickdouble = false;
            clickBonus = false;
            clickAuto = false;

          } else {
            cptBooster--;
            toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce multiplicateur");
          }
        }
      });
    }
    cptBooster++;
  });

  document.getElementById("run3").addEventListener("click", () => {

    if (cptAuto == 1) {

      toastr.info("Voulez-vous acheter ce Bonus x5 à 200 pts pendant 30 secondes ?", "Confirmation", {
        closeButton: true,
        tapToDismiss: false,
        timeOut: 0,
        extendedTimeOut: 0,
        buttons: {
          confirm: {
            label: 'OK',
            className: 'btn-success'
          },
          cancel: {
            label: 'Annuler',
            className: 'btn-danger'
          }
        },
        onclick: function () {
          if (score > 200) {
            score -= 200;
            toastr.success("Félicitation, vous avez obtenu le Bonus x5 pendant 30 secondes");
            bonusx5();
            document.getElementById('clicker-counter').innerHTML = +score;
            document.getElementById('run3').innerHTML = "200 ptns";
            clickAuto = true;
            clickdouble = false;
            clickBonus = false;
            clickboost = false;
            timeSeconde();


          } else {
            cptAuto--;
            toastr.error("erreur : vous n'avez pas assez de points pour acheter ce Bonus");
          }
        }
      });
    } else if (cptAuto > 1) {
      toastr.info("Voulez-vous acheter ce Bonus x5 à " + (200 * cptAuto) + "pts pendant 30 secondes ?", "Confirmation", {
        closeButton: true,
        tapToDismiss: false,
        timeOut: 0,
        extendedTimeOut: 0,
        buttons: {
          confirm: {
            label: 'OK',
            className: 'btn-success'
          },
          cancel: {
            label: 'Annuler',
            className: 'btn-danger'
          }
        },
        onclick: function () {
          if (score > 200 * cptAuto) {
            score -= 200 * cptAuto;
            toastr.success("Félicitation, vous avez obtenu le Bonus x5 pendant 30 secondes");
            bonusx5();
            document.getElementById('clicker-counter').innerHTML = +score;
            document.getElementById('run3').innerHTML = 200 * cptAuto + " ptns";
            clickAuto = true;
            clickdouble = false;
            clickBonus = false;
            clickboost = false;
            timeSeconde();

          } else {
            cptAuto--;
            toastr.error("Désolé, vous n'avez pas assez de points pour acheter ce Bonus");
          }
        }
      });
    }

    cptAuto++;
  });


  function bonusx2() {
    const image = document.getElementById("bonusx2");
    image.style.display = "block";
    setTimeout(() => {
      image.style.display = "none";
    }, 4000);
  }

  function bonusx5() {
    const image = document.getElementById("bonusx5");
    image.style.display = "block";
    setTimeout(() => {
      image.style.display = "none";
    }, 4000);
  }

  function booster() {
    const image = document.getElementById("booster");
    image.style.display = "block";
    setTimeout(() => {
      image.style.display = "none";
    }, 4000);
  }


  function timeSeconde() {
    //const departMinutes = 1;
    let temps = 0.5 * 60;



    const timerElement = document.getElementById("timeInSeconde");

    setInterval(() => {
      let minutes = parseInt(temps / 60, 10);
      let secondes = parseInt(temps % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      secondes = secondes < 10 ? "0" + secondes : secondes;

      timerElement.innerText = `${minutes}:${secondes}`;
      temps = temps <= 0 ? 0 : temps - 1;
    }, 1000);



  }
})();




