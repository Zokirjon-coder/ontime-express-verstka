const navbtns = document.querySelectorAll('.buttons span');
const navigation = document.querySelector('.navigation');
const footers = document.querySelectorAll('.footer');
const abouts = document.querySelectorAll('.about');
const menus = document.querySelectorAll('.drop_menu');
const sectionBodies = document.querySelectorAll('.section_body');

// btn active
navbtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    navbtns.forEach((button) => button.classList.remove('active'));
    btn.classList.add('active');
  });
});

// change section
const wrapper = document.querySelector('.wrapper');
const sections = document.querySelectorAll('.wrapper section');

document.addEventListener('scroll', (e) => {
  const scrollY = e.srcElement.scrollingElement.scrollTop;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 200;
    section.classList.remove('active');
    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      const sectionId = section.getAttribute('id');
      const activeSection = document.querySelector(`#${sectionId}`);

      setTimeout(() => {
        if (!activeSection.classList.contains('active')) {
          abouts.forEach((about) => about.classList.remove('active'));
          menus.forEach((menu) => menu.classList.remove('active'));
          footers.forEach((footer) => footer.classList.remove('disabled'));
          sectionBodies.forEach((sectionBody) =>
            sectionBody.classList.remove('disabled')
          );
          sections.forEach((section) => section.classList.remove('darker'));
          navigation.classList.remove('disabled');
        }
      }, 100);

      activeSection.classList.add('active');
      navbtns.forEach((btn) => {
        if (btn.getAttribute('title') === sectionId) {
          navbtns.forEach((button) => button.classList.remove('active'));
          btn.classList.add('active');
        } else if (sectionId === 'join' || sectionId === 'quote') {
          navbtns.forEach((btn) => {
            if (btn.getAttribute('title') === 'ontime') {
              navbtns.forEach((button) => button.classList.remove('active'));
              btn.classList.add('active');
            }
          });
        }
      });
    }
  });
});

// set watermark to sections
sections.forEach((sec) => {
  const watermark = document.createElement('div');
  watermark.innerHTML = `
          <h1>ontime</h1>
          <h1>express</h1>
          `;
  watermark.className = 'watermark';
  sec.appendChild(watermark);
});

// about settings
const aboutBtns = document.querySelectorAll('.aboutBtn');

aboutBtns.forEach((aboutBtn) => {
  aboutBtn.addEventListener('click', () => {
    footers.forEach((footer) => footer.classList.add('disabled'));
    sectionBodies.forEach((sectionBody) =>
      sectionBody.classList.add('disabled')
    );
    menus.forEach((menu) => menu.classList.remove('active'));
    sections.forEach((sec) => {
      if (!sec.classList.contains('darker')) sec.classList.add('darker');
      navigation.classList.add('disabled');
    });
    abouts.forEach((about) => {
      if (!about.classList.contains('active')) {
        about.classList.add('active');
        toActiveSection();
        disableScroll();
      } else {
        enableScroll();
        about.classList.remove('active');
        menus.forEach((menu) => menu.classList.remove('active'));
        sections.forEach((sec) => {
          if (sec.classList.contains('darker')) sec.classList.remove('darker');
          navigation.classList.remove('disabled');
        });
        footers.forEach((footer) => footer.classList.remove('disabled'));
        sectionBodies.forEach((sectionBody) =>
          sectionBody.classList.remove('disabled')
        );
      }
    });
  });
});

const closeBtns = document.querySelectorAll('.closeBtn');
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    enableScroll();
    footers.forEach((footer) => footer.classList.remove('disabled'));
    abouts.forEach((about) => about.classList.remove('active'));
    sectionBodies.forEach((sectionBody) =>
      sectionBody.classList.remove('disabled')
    );
    navigation.classList.remove('disabled');
    sections.forEach((sec) => {
      if (sec.classList.contains('darker')) sec.classList.remove('darker');
    });
  });
});

// menu settings

const menuBtns = document.querySelectorAll('.humburgerMenu');

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener('click', () => {
    footers.forEach((footer) => footer.classList.add('disabled'));
    abouts.forEach((about) => about.classList.remove('active'));
    navigation.classList.add('disabled');
    sectionBodies.forEach((sectionBody) =>
      sectionBody.classList.add('disabled')
    );
    sections.forEach((sec) => {
      sec.classList.add('darker');
    });
    menus.forEach((menu) => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active');
        toActiveSection();
        disableScroll();
      } else {
        enableScroll();
        menu.classList.remove('active');
        abouts.forEach((about) => about.classList.remove('active'));
        sections.forEach((sec) => {
          if (sec.classList.contains('darker')) sec.classList.remove('darker');
        });
        navigation.classList.remove('disabled');
        footers.forEach((footer) => footer.classList.remove('disabled'));
        sectionBodies.forEach((sectionBody) =>
          sectionBody.classList.remove('disabled')
        );
      }
    });
  });
});
// to close
const menuCloseBtns = document.querySelectorAll('.menuCloseBtn');
menuCloseBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    enableScroll();
    footers.forEach((footer) => footer.classList.remove('disabled'));
    sectionBodies.forEach((sectionBody) =>
      sectionBody.classList.remove('disabled')
    );
    menus.forEach((menu) => menu.classList.remove('active'));
    navigation.classList.remove('disabled');
    sections.forEach((sec) => {
      sec.classList.remove('darker');
    });
  });
});

function toActiveSection() {
  // const activeSection = null;
  sections.forEach((sec) => {
    if (sec.classList.contains('active')) sec.scrollIntoView();
  });
  // activeSection.scrollIntoView();
}

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable

// collapse

const collapse = document.querySelector('.collapse');

const collap = collapse.querySelectorAll('.collap');
collap.forEach((col) => {
  col.addEventListener('click', () => {
    const contentHieght = col.querySelector('.body div').scrollHeight;
    col
      .querySelector('.body')
      .addEventListener('click', (e) => e.stopPropagation());
    if (col.classList.contains('active')) {
      col.classList.remove('active');
      col.querySelector('.btn').classList.remove('active');
      col.querySelector('.body').style.height = 0 + 'px';
    } else {
      collap.forEach((col) => {
        col.classList.remove('active');
        col.querySelector('.btn').classList.remove('active');
        col.querySelector('.body').style.height = 0 + 'px';
      });
      col.classList.add('active');
      col.querySelector('.body').style.height = contentHieght + 'px';
      col.querySelector('.btn').classList.add('active');
    }
  });
});

// slider trucks

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slide = document.querySelector('.slider_truck .slide');
const params1 = document.querySelector('.slider_truck .params1');
const params2 = document.querySelector('.slider_truck .params2');

const dataSlider = [
  {
    id: 1,
    // image: img1,
    param1: [
      { id: 1, param: 'Governed at 80 mph' },
      { id: 2, param: 'Inverter' },
      { id: 3, param: 'Automatic' },
      { id: 4, param: 'Combo sleeper' },
    ],
    param2: [
      { id: 1, param: 'High roof' },
      { id: 2, param: 'Diesel APU' },
      { id: 3, param: 'Minifridge' },
      { id: 4, param: 'Removable rider seat' },
    ],
  },
  {
    id: 2,
    // image: img2,
    param1: [
      { id: 1, param: 'Governed at 70 mph' },
      { id: 2, param: 'Inverter' },
      { id: 3, param: 'Automatic' },
      { id: 4, param: 'Combo sleeper' },
    ],
    param2: [
      { id: 1, param: 'High roof' },
      { id: 2, param: 'Diesel APU' },
      { id: 3, param: 'Minifridge' },
      { id: 4, param: 'Removable rider seat' },
    ],
  },
  {
    id: 3,
    // image: img3,
    param1: [
      { id: 1, param: 'Governed at 70 mph' },
      { id: 2, param: 'Inverter' },
      { id: 3, param: 'Automatic' },
      { id: 4, param: 'Combo sleeper' },
    ],
    param2: [
      { id: 1, param: 'High roof' },
      { id: 2, param: 'Diesel APU' },
      { id: 3, param: 'Minifridge' },
      { id: 4, param: 'Removable rider seat' },
    ],
  },
];

function setImageSlide(data) {
  const images = slide.querySelectorAll('img');
  const { id, param1, param2 } = data;
  let img = null;
  images.forEach((image) => {
    let disabled = image.getAttribute('disabled');
    if (disabled === 'false') {
      img = image;
    }
    gsap.fromTo(
      img,
      {
        x: 0,
        opacity: 1,
      },
      {
        opacity: 0,
        x: -100,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      params2,
      {
        x: 0,
        opacity: 1,
      },
      {
        opacity: 0,
        x: -100,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      params1,
      {
        x: 0,
        opacity: 1,
      },
      {
        opacity: 0,
        x: 100,
        duration: 0.5,
      }
    );
  });

  setTimeout(() => {
    images.forEach((image, index) => {
      if (id === index + 1) {
        image.setAttribute('disabled', 'false');
        img = image;
      } else image.setAttribute('disabled', 'true');
    });
    params1.innerHTML = '';
    params2.innerHTML = '';
    param1.forEach(({ param }) => (params1.innerHTML += `<div>${param}</div>`));
    param2.forEach(({ param }) => (params2.innerHTML += `<div>${param}</div>`));

    gsap.fromTo(
      img,
      {
        x: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      params1,
      {
        x: -50,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      params2,
      {
        x: 50,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      }
    );
  }, 600);
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

const setSlide = () => {
  n = slideCheck(++n);
  setImageSlide(dataSlider[n]);
};

const intervalSlide = setInterval(setSlide, 10000);

const onChangeSlide = (change) => {
  if (change === 'next') {
    n++;
  } else {
    n--;
  }
  n = slideCheck(n);
  setImageSlide(dataSlider[n]);
};

prevBtn.addEventListener('click', () => {
  onChangeSlide('prev');
  clearInterval(intervalSlide);
});
nextBtn.addEventListener('click', () => {
  onChangeSlide('next');
  clearInterval(intervalSlide);
});

// ontime page

const ontimeContents = document.querySelector('#ontime .contents');

const dataOntimePage = [
  {
    id: 1,
    number: '01',
    text: 'Close-knit community of experienced drivers',
  },
  {
    id: 2,
    number: '07',
    text: 'Above-average pay, always on time',
  },
  {
    id: 3,
    number: '02',
    text: 'Friendly, family-type atmosphere',
  },
  {
    id: 4,
    number: '08',
    text: 'Big emphasis on safety',
  },
  {
    id: 5,
    number: '03',
    text: 'Amazing, brand new VNL,FRT, INC trucks',
  },
  {
    id: 6,
    number: '09',
    text: 'Helpful and easy-to-talkto dispatchers',
  },
  {
    id: 7,
    number: '04',
    text: 'Healthy work-life balance with ample hometime',
  },
  {
    id: 8,
    number: '10',
    text: 'Knowledgeable office staff',
  },
  {
    id: 9,
    number: '05',
    text: 'Great travels across the country',
  },
  {
    id: 10,
    number: '11',
    text: 'Minimal time spent while waiting for loads',
  },
  {
    id: 11,
    number: '06',
    text: 'Liberal passenger and pet policy',
  },
  {
    id: 12,
    number: '12',
    text: 'Flexible lease purchase program',
  },
];

dataOntimePage.forEach((data) => {
  ontimeContents.innerHTML += `
  <div class="content">
                  <div class="number gs_reveal gs_reveal_fromLeft">
                    ${data.number}</div>
                  <div class="text gs_reveal gs_reveal_fromRight">
                    ${data.text}
                  </div>
                </div>
  `;
});

// join page

const selections = document.querySelectorAll('.input.select');

selections.forEach((selection) => {
  selection.addEventListener('click', () => {
    selection.classList.toggle('selected');
  });
});

// quote page
let checkEmail = '';
let letter = 0;
const letterCount = document.querySelector('#quote .letterCount');
const textArea = document.querySelector('#quote .text_area');
const email = document.querySelector('#quote #e-mail');
const submit = document.querySelector('#quote #submit');
const validation = document.querySelector('#quote .validation');

const countLetters = (e) => {
  const text = e.target.value;
  const length = text.length;
  letterCount.innerHTML = length;
};

textArea.addEventListener('input', (e) => {
  countLetters(e);
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const checkEmailAddress = (email) => {
  const result = validateEmail(email);
  validation.innerHTML = result ? 'It`s ok' : 'Valide email address required';
  validation.style.color = result ? 'green' : 'red';
};

submit.addEventListener('click', (e) => {
  e.preventDefault();

  checkEmailAddress(email.value);
});

// testimonials slider
const sliderTest = document.querySelector('.slider_test');
const leftArrowBtn = document.querySelector(
  '.slider_container .prev .btn_slider'
);
const rightArrowBtn = document.querySelector(
  '.slider_container .next .btn_slider'
);

const img = './assets/images/user.jpg';

const dataTestimonials = [
  {
    id: 1,
    name: 'Brian Vega',
    image: img,
    position: 'Company Driver',
    testimonial: `“Awsome Company. They are professional and caring. They go way out of their way to meet your needs. They put the needs of you and community ahead of anything else.`,
  },
  {
    id: 2,
    name: 'Mohammad lidle',
    image: img,
    position: 'Lease Driver',
    testimonial: `Very good company. They pay well, offer good home time and treat employees well.`,
  },
  {
    id: 3,
    name: 'Hasan Ali',
    image: img,
    position: 'Company Driver',
    testimonial: `Very good company. They pay well, offer good home time and treat employees well.`,
  },
  {
    id: 4,
    name: 'Ahmad Tarek',
    image: img,
    position: 'Company Driver',
    testimonial: `Very good company. They pay well, offer good home time and treat employees well.`,
  },
  {
    id: 5,
    name: 'Aziz Salim',
    image: img,
    position: 'Company Driver',
    testimonial: `Very good company. They pay well, offer good home time and treat employees well.`,
  },
];

dataTestimonials.forEach((data) => {
  const slide = document.createElement('div');
  slide.className = 'slide_test';
  slide.innerHTML = `
  <div class="header_slider">
      <div class="avatar">
        <img src=${data.image} alt="avatar" />
      </div>
      <div class="user_info">
        <div class="name">${data.name}</div>
        <div class="position">${data.position}</div>
      </div>
    </div>
    <div class="text">${data.testimonial}</div>
  `;
  sliderTest.appendChild(slide);
});

rightArrowBtn.addEventListener('click', () => {
  sliderTest.scrollLeft += 300;
});
leftArrowBtn.addEventListener('click', () => {
  sliderTest.scrollLeft -= 300;
});
