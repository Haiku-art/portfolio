const naytaNapit = document.querySelectorAll('.naytaNappi');
const sisaltoListat = document.querySelectorAll('.sisaltoLista');

naytaNapit.forEach((naytaNappi, index) => {
  naytaNappi.addEventListener('click', function () {
    const sisaltoLista = sisaltoListat[index];

    if (sisaltoLista.classList.contains('laajennettu')) {
      sisaltoLista.style.maxHeight = '0';
      sisaltoLista.classList.remove('laajennettu');
      naytaNappi.textContent = "▶ " + naytaNappi.textContent.slice(2);
    
    } else {
      const sisallonKorkeus = sisaltoLista.scrollHeight + 'px';
      sisaltoLista.style.maxHeight = sisallonKorkeus;
      sisaltoLista.classList.add('laajennettu');
      naytaNappi.textContent = "▼ " + naytaNappi.textContent.slice(2);
      
    }
  });
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

