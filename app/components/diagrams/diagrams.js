const element = document.querySelector(".diagrams-list");

const Visible = function(target) {
  const targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (
    targetPosition.bottom > windowPosition.top && //
    targetPosition.top < windowPosition.bottom &&
    targetPosition.right > windowPosition.left &&
    targetPosition.left < windowPosition.right
  ) {
    function pieSlicer() {
      const percentValue = (utilslider.value / 100) * circumference;
      pie.style.strokeDasharray = percentValue + " " + circumference;
      percentDisplay.innerHTML = utilslider.value + "%";
    }

    const utilslider = document.getElementById("utilslider"),
      circle = document.getElementById("pie"),
      radius = parseInt(circle.getAttribute("r"), 10),
      circumference = 2 * radius * Math.PI,
      percentDisplay = document.querySelector("#readout output");
    utilslider.addEventListener("input", function() {
      pieSlicer();
    });
    pieSlicer();

    function pieSlicer2() {
      const percentValue2 = (utilslider2.value / 100) * circumference2;
      pie2.style.strokeDasharray = percentValue2 + " " + circumference2;
      percentDisplay2.innerHTML = utilslider2.value + "%";
    }

    const utilslider2 = document.getElementById("utilslider2"),
      circle2 = document.getElementById("pie2"),
      radius2 = parseInt(circle2.getAttribute("r"), 10),
      circumference2 = 2 * radius2 * Math.PI,
      percentDisplay2 = document.querySelector("#readout2 output");
    utilslider2.addEventListener("input", function() {
      pieSlicer2();
    });
    pieSlicer2();

    function pieSlicer3() {
      const percentValue3 = (utilslider3.value / 100) * circumference3;
      pie3.style.strokeDasharray = percentValue3 + " " + circumference3;
      percentDisplay3.innerHTML = utilslider3.value + "%";
    }

    const utilslider3 = document.getElementById("utilslider3"),
      circle3 = document.getElementById("pie3"),
      radius3 = parseInt(circle3.getAttribute("r"), 10),
      circumference3 = 2 * radius3 * Math.PI,
      percentDisplay3 = document.querySelector("#readout3 output");
    utilslider3.addEventListener("input", function() {
      pieSlicer3();
    });
    pieSlicer3();

    function pieSlicer4() {
      const percentValue4 = (utilslider4.value / 100) * circumference4;
      pie4.style.strokeDasharray = percentValue4 + " " + circumference4;
      percentDisplay4.innerHTML = utilslider4.value + "%";
    }

    const utilslider4 = document.getElementById("utilslider4"),
      circle4 = document.getElementById("pie4"),
      radius4 = parseInt(circle4.getAttribute("r"), 10),
      circumference4 = 2 * radius4 * Math.PI,
      percentDisplay4 = document.querySelector("#readout4 output");
    utilslider4.addEventListener("input", function() {
      pieSlicer4();
    });
    pieSlicer4();
  }
};

window.addEventListener("scroll", function() {
  Visible(element);
});

Visible(element);
