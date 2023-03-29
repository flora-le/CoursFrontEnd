const btn = document.querySelector('.btn1');

btn.addEventListener('click', presentation);

function presentation() {
  //add if class exists, else remove class active
  btn.classList.toggle('active');
}

/* manip DOM + add CSS classes*/
