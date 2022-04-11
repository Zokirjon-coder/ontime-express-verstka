document.addEventListener("DOMContentLoaded", () => {
  // one time animation
  //   loading animation
  disableScroll();

  let dots = document.querySelector(".dots");

  // ========
  function animate(element, className) {
    element.classList.add(className);
    setTimeout(() => {
      element.classList.remove(className);
      setTimeout(() => {
        animate(element, className);
      }, 500);
    }, 2500);
  }
  animate(dots, "dots--animate");

  setTimeout(() => {
    document.querySelector(".loader").classList.add("hide");
  }, 5000);

  document.querySelectorAll(".navigation .buttons a span").forEach((navbtn) => {
    navbtn.style.transform = "scale(0)";
  });
  setTimeout(() => {

    enableScroll();
    const navtl = gsap.timeline();
    navtl.to(
      ".navigation .buttons a span",
      {
        delay: 0.8,
        duration: 0.2,
        scale: 1,
        stagger: 0.1,
      },
      "-=.2"
    );

    navtl.from(".quote img", {
      y: 50,
      x: 50,
      scale: 0,
    });

    const homeHeading = gsap.timeline();

    homeHeading.from("#home .title h1", {
      duration: 1.8,
      delay: 0.2,
      y: 200,
      skewY: 10,
      stagger: {
        amount: 0.4,
      },

      ease: "power4.out",
    });

    const btnHeder = gsap.timeline();

    btnHeder.from("#home .header .gs_flipTop", {
      duration: 0.8,
      delay: 0.5,
      y: -50,
      opacity: 0,
      stagger: {
        amount: 0.4,
      },

      ease: "power4.out",
    });

    document.querySelector("#home .banner_img").style =
      "transform: translateX(100px); opacity: 0;";
    gsap.to("#home .banner_img", {
      delay: 1,
      x: 0,
      opacity: 1,
    });    


      }, 5000);
  // }, 500);


  // scroll animation
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
});

// animation functions

function animateFrom(elem, direction) {
  direction = direction || 1;
  let x = 0,
    scale = 1,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromTop")) {
    x = 0;
    y = -100;
  } else if (elem.classList.contains("gs_reveal_fromBottom")) {
    x = 0;
    y = 100;
  } else if (elem.classList.contains("gs_reveal_fromTransparent")) {
    x = 0;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromScale")) {
    x = 0;
    y = 0;
    scale = 0;
  }

  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, scale: scale, autoAlpha: 0 },
    {
      duration: 1.25,
      delay: 0.3,
      x: 0,
      y: 0,
      scale: 1,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

gsap.to(".flip_left",{
  duration: 0.5,
  x: -100,
  opacity: 0,
  scale: 0.5
});
gsap.from(".flip_right",{
  duration: 0.5,
  x: 100,
  opacity: 0,
  scale: 0.5
});