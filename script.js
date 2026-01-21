"use strict";

var slider = tns({
  container: ".my-slider",
  items: 3,
  slideBy: 1,
  gutter: 24,
  mouseDrag: true,
  autoplay: false,
  autoplayButtonOutput: false,
  controlsContainer: "#custom-control",
  nav: false,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
  },
});
