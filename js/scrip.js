const navbtns = document.querySelectorAll(".buttons span");
const navigation = document.querySelector(".navigation");
const footers = document.querySelectorAll(".footer");
const abouts = document.querySelectorAll(".about");
const menus = document.querySelectorAll(".drop_menu");
const sectionBodies = document.querySelectorAll(".section_body");

// btn active
navbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navbtns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");
  });
});

// change section
const wrapper = document.querySelector(".wrapper");
const sections = document.querySelectorAll(".wrapper section");

wrapper.addEventListener("scroll", (e) => {
  abouts.forEach((about) => about.classList.remove("active"));
  menus.forEach((menu) => menu.classList.remove("active"));
  footers.forEach((footer) => footer.classList.remove("disabled"));
  sectionBodies.forEach((sectionBody) =>
    sectionBody.classList.remove("disabled")
  );
  sections.forEach((section) => section.classList.remove("darker"));
  navigation.classList.remove("disabled");

  const scrollY = e.srcElement.scrollTop;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 200;
    section.classList.remove("active");
    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      const sectionId = section.getAttribute("id");
      const activeSection = document.querySelector(`#${sectionId}`);
      activeSection.classList.add("active");
      navbtns.forEach((btn) => {
        if (btn.getAttribute("title") === sectionId) {
          navbtns.forEach((button) => button.classList.remove("active"));
          btn.classList.add("active");
        } else if (sectionId === "join" || sectionId === "quote") {
          navbtns.forEach((btn) => {
            if (btn.getAttribute("title") === "ontime") {
              navbtns.forEach((button) => button.classList.remove("active"));
              btn.classList.add("active");
            }
          });
        }
      });
    }
  });
});

// set watermark to sections
sections.forEach((sec) => {
  const watermark = document.createElement("div");
  watermark.innerHTML = `
          <h1>ontime</h1>
          <h1>express</h1>
          `;
  watermark.className = "watermark";
  sec.appendChild(watermark);
});

// set logo & link icons
const logos = document.querySelectorAll(".header .logo img");
sections.forEach((sec) => {
  if (sec.classList.contains("dark")) {
    sec
      .querySelector(".header .logo img")
      .setAttribute("src", "./assets/icons/logo.svg");
    sec.querySelectorAll(".header .link").forEach((link) => {
      let src = link
        .querySelector("img")
        .getAttribute("src")
        .replace("dark", "light");
      link.querySelector("img").setAttribute("src", src);
    });
  } else {
    sec
      .querySelector(".header .logo img")
      .setAttribute("src", "./assets/icons/darkLogo.svg");
    sec.querySelectorAll(".header .link").forEach((link) => {
      let src = link
        .querySelector("img")
        .getAttribute("src")
        .replace("light", "dark");
      link.querySelector("img").setAttribute("src", src);
    });
  }
});

// about settings
const aboutBtns = document.querySelectorAll(".aboutBtn");

aboutBtns.forEach((aboutBtn) => {
  aboutBtn.addEventListener("click", () => {
    footers.forEach((footer) => footer.classList.add("disabled"));
    sectionBodies.forEach((sectionBody) =>
      sectionBody.classList.add("disabled")
    );
    menus.forEach((menu) => menu.classList.remove("active"));
    sections.forEach((sec) => {
      if (!sec.classList.contains("darker")) sec.classList.add("darker");
      navigation.classList.add("disabled");
    });
    abouts.forEach((about) => {
      if (!about.classList.contains("active")) {
        about.classList.add("active");
        console.log('active');
      }
    });
  });
});

const closeBtns = document.querySelectorAll(".closeBtn");
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    footers.forEach((footer) => footer.classList.remove("disabled"));
    abouts.forEach((about) => about.classList.remove("active"));
    sectionBodies.forEach((sectionBody) =>
      sectionBody.classList.remove("disabled")
    );
    navigation.classList.remove("disabled");
    sections.forEach((sec) => {
      if (sec.classList.contains("darker")) sec.classList.remove("darker");
    });
  });
});

// menu settings

const menuBtns = document.querySelectorAll(".humburgerMenu");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    footers.forEach((footer) => footer.classList.add("disabled"));
    abouts.forEach((about) => about.classList.remove("active"));
    navigation.classList.add("disabled");
    sectionBodies.forEach((sectionBody) =>
      sectionBody.classList.add("disabled")
    );
    sections.forEach((sec) => {
      sec.classList.add("darker");
    });
    menus.forEach((menu) => {
      if (!menu.classList.contains("active")) {
        menu.classList.add("active");
      }
    });
  });
});
// to close
const menuCloseBtns = document.querySelectorAll(".menuCloseBtn");
menuCloseBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    footers.forEach((footer) => footer.classList.remove("disabled"));
    sectionBodies.forEach((sectionBody) =>
      sectionBody.classList.remove("disabled")
    );
    menus.forEach((menu) => menu.classList.remove("active"));
    navigation.classList.remove("disabled");
    sections.forEach((sec) => {
      sec.classList.remove("darker");
    });
  });
});

// Collapse
const text = `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quam, magnam, amet numquam sapiente porro perferendis autem illum veritatis voluptas repellat odit facilis repudiandae laborum, nam vel aliquid maxime? Quas?
`;

const dataOffer = [
  { id: 1, title: "REGIONAL DRY VAN SOLO", text: text },
  { id: 2, title: "OTR DRY VAN SOLO", text: text },
  { id: 3, title: "OTR DRY VAN TEAMS", text: text },
  { id: 4, title: "DRY VAN LEASE PURCHASE", text: text },
];

const collapse = document.querySelector(".collapse");

dataOffer.forEach((offer) => {
  const collap = document.createElement("div");
  collap.className = "collap";
  collap.innerHTML = `
  <div class="collap_header">
            <div class="title">
              <div class="arrow">
                <img src='./assets/icons/arrow.svg' alt="arrow" />
              </div>
              ${offer.title}
            </div>
            <div class="btn">
            </div>
          </div>
          <div 
          class="body">${offer.text}</div>
  `;
  collapse.appendChild(collap);
});

const collap = collapse.querySelectorAll(".collap");
collap.forEach((col) => {
  col.addEventListener("click", () => {
    collap.forEach((col) => col.classList.remove("active"));
    col.classList.toggle("active");
  });
});

// slider trucks
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const slide = document.querySelector(".slider_truck .slide");
const params1 = document.querySelector(".slider_truck .params1")
const params2 = document.querySelector(".slider_truck .params2")
// images
const img1 = "./assets/images/img1.png";
const img2 = "./assets/images/img2.png";

const dataSlider = [
  {
    id: 1,
    image: img1,
    param1: [
      { id: 1, param: "Governed at 80 mph" },
      { id: 2, param: "Inverter" },
      { id: 3, param: "Automatic" },
      { id: 4, param: "Combo sleeper" },
    ],
    param2: [
      { id: 1, param: "High roof" },
      { id: 2, param: "Diesel APU" },
      { id: 3, param: "Minifridge" },
      { id: 4, param: "Removable rider seat" },
    ],
  },
  {
    id: 2,
    image: img2,
    param1: [
      { id: 1, param: "Governed at 70 mph" },
      { id: 2, param: "Inverter" },
      { id: 3, param: "Automatic" },
      { id: 4, param: "Combo sleeper" },
    ],
    param2: [
      { id: 1, param: "High roof" },
      { id: 2, param: "Diesel APU" },
      { id: 3, param: "Minifridge" },
      { id: 4, param: "Removable rider seat" },
    ],
  },
];

function setImageSlide(data) {
  const { image, param1, param2 } = data;
  const img = document.createElement("img");
  params1.innerHTML="";
  params2.innerHTML="";
  slide.innerHTML = "";
  param1.forEach(({ param }) => (params1.innerHTML += `<div>${param}</div>`));
  param2.forEach(({ param }) => (params2.innerHTML += `<div>${param}</div>`));
  img.setAttribute("src", image);
  slide.appendChild(img);
}

const slideCheck = (index) => {
  const lastIndex = dataSlider.length - 1;
  if (index < 0) {
    return lastIndex;
  }
  if (index > lastIndex) {
    return 0;
  }
  return index;
};

let n = 0;

setImageSlide(dataSlider[n]);

setInterval(() => {
  n = slideCheck(++n);
  setImageSlide(dataSlider[n]);
}, 5000);

const onChangeSlide = (change) => {
  if (change === "next") {
    n++;
  } else {
    n--;
  }
  n = slideCheck(n);
  setImageSlide(dataSlider[n]);
};

prevBtn.addEventListener("click", () => {
  onChangeSlide("prev");
});
nextBtn.addEventListener("click", () => {
  onChangeSlide("next");
});


// ontime page

const ontimeContents = document.querySelector("#ontime .contents");

const dataOntimePage = [
  {
    id: 1,
    number: "01",
    text: "Close-knit community of experienced drivers",
  },
  {
    id: 2,
    number: "07",
    text: "Above-average pay, always on time",
  },
  {
    id: 3,
    number: "02",
    text: "Friendly, family-type atmosphere",
  },
  {
    id: 4,
    number: "08",
    text: "Big emphasis on safety",
  },
  {
    id: 5,
    number: "03",
    text: "Amazing, brand new VNL,FRT, INC trucks",
  },
  {
    id: 6,
    number: "09",
    text: "Helpful and easy-to-talkto dispatchers",
  },
  {
    id: 7,
    number: "04",
    text: "Healthy work-life balance with ample hometime",
  },
  {
    id: 8,
    number: "10",
    text: "Knowledgeable office staff",
  },
  {
    id: 9,
    number: "05",
    text: "Great travels across the country",
  },
  {
    id: 10,
    number: "11",
    text: "Minimal time spent while waiting for loads",
  },
  {
    id: 11,
    number: "06",
    text: "Liberal passenger and pet policy",
  },
  {
    id: 12,
    number: "12",
    text: "Flexible lease purchase program",
  },
];


dataOntimePage.forEach(data=>{
  ontimeContents.innerHTML += `
  <div class="content">
                  <div class="number">
                    ${data.number}</div>
                  <div class="text">
                    ${data.text}
                  </div>
                </div>
  `;
})