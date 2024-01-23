window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var headMain = document.querySelector(".head-main");

  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > headMain.offsetTop + headMain.offsetHeight) {
      navbar.style.backgroundColor = "rgba(80, 80, 80, 0.8)"; 
  } else {
      navbar.style.backgroundColor = "transparent"; 
  }
}


  function toggleGrids() {
    var grid1 = document.getElementById('grid1');
    var grid2 = document.getElementById('grid2');

    if (grid1.style.display === 'none') {
      grid1.style.display = 'grid';
      grid2.style.display = 'none';
    } else {
      grid1.style.display = 'none';
      grid2.style.display = 'grid';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggleButton');
    const toggleDivs = document.querySelectorAll('.toggleDiv');

    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            toggleDivs.forEach((div, idx) => {
                if (idx !== index) {
                    div.classList.remove('reveal');
                    toggleButtons[idx].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
                }
            });
            toggleDivs[index].classList.toggle('reveal');
            if (toggleDivs[index].classList.contains('reveal')) {
              button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
          } else {
              button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
          }
          
        });
    });
});