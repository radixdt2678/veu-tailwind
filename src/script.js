//Javascript to toggle the menu
document.getElementById('nav-toggle').onclick = function() {
    document.getElementById("nav-content").classList.toggle("hidden");
}

var btn = document.getElementById("nav-btn")

function navigation(){
    btn.classList.toggle("fa-bars");
    btn.classList.toggle("fa-xmark");
}

/*  */

// Set the date we're counting down to

var countDownDate = new Date("July 21, 2023 3:30:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;    
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


/* FAQ  */

const accordionItems = document.querySelectorAll(".accordion-item");
const accordionchild = document.querySelectorAll(".accordion-child");

/*  */
accordionItems.forEach((item) => {
  
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    // close other items
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion-content").style.height = 0;
      }
    });

    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      content.style.height = `${content.scrollHeight}px`;
    } else {
      content.style.height = 0;
    }
  });
});
/*  */

accordionchild.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    // close other items
    accordionchild.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("chidactive")) {
        otherItem.classList.remove("chidactive");
        otherItem.querySelector(".accordion-content").style.height = 0;
      }
    });

    item.classList.toggle("chidactive");

    if (item.classList.contains("chidactive")) {
      content.style.height = `${content.scrollHeight}px`;
    } else {
      content.style.height = 0;
    }
  });
});
