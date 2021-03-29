"use strict";

var humbNav = document.querySelector('.humberger');
var miniNav = document.querySelector('#menu');
var links = document.querySelectorAll('.navlink'); // humberger menu

var activateMenu = function activateMenu() {
  miniNav.classList.toggle('active2');
};

humbNav.addEventListener('click', activateMenu); // active link

var activeNav = function activeNav(e) {
  // e.preventDefault()
  links.forEach(function (link) {
    link.classList.remove('active');
    e.target(link.classList.remove('active'));
  });
};