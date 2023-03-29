// const doc = document.querySelector("h1");
// const withClass = document.querySelector(".title");
// const withId = document.querySelector("#myId");

//not much used
// const withId = document.getElementById("myId");

// const elHTML = document.getElementsByClassName("title");
/*array nodeList */
// const allH1 = document.querySelectorAll(".title");

const title = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', presentation);

/**on hover of title */
title.addEventListener('mouseenter', presentation);

document.addEventListener('keydown', presentation);

function presentation() {
  /** manage classes of element. Access methods related to classes of element */
  //   title.classList.add('size-txt');
  console.log('key down ');
}
