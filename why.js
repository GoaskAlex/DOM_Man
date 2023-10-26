 /// NEW DATA////


const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];


///Phase 1///


const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.classList.add("flex-ctr")

//Creating an H1 element in JS//
const h1Element =document. createElement('h1');
h1Element.textContent = "DOM Manipulation";
h1Element.style.color = "white";
// Adding H1 to the page//
mainEl.appendChild (h1Element);

//nav bar build
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");


menuLinks.forEach(function (element) {
  const newTop = document.createElement("a");
  newTop.setAttribute("href", element.href);
  newTop.textContent = element.text;
  topMenuEl.appendChild(newTop);
})
 //submenu Build

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "#3da4ab";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//Phase 2

const topMenuLinks = document.querySelectorAll("a");

let showingSubMenu = false;

topMenuEl.addEventListener("click", function (element) {
  element.preventDefault();
  let linkName = element.target;
  let newText = linkName.textContent;
  if (linkName.tagName === 'data') {
    // console.log(newText);
  
  };

  if (linkName.classList.contains("active")) {
    linkName.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return
  }

  topMenuLinks.forEach(function (element) {
    element.classList.remove("active");
  });
  linkName.classList.add("active");
  let subLinks
  menuLinks.forEach(function (element) {
    if (element.text === newText && element.subLinks) {
      subLinks = element.subLinks;
    }
  });
  if (subLinks) {
    showingSubMenu = true;
    buildSubMenu(subLinks);
    subMenuEl.style.top = "100%";
  } else {
    showingSubMenu = false;
    subMenuEl.style.top = "0";
  
  }
});
function buildSubMenu(array) {
  subMenuEl.innerHTML = "";
  array.forEach(function (element) {
    const newSub = document.createElement("a");
    newSub.setAttribute("href", element.href);
    newSub.textContent = element.text;
    subMenuEl.appendChild(newSub);
  });
}

subMenuEl.addEventListener("click", function (element) {
  element.preventDefault();
  let linkName = element.target;
  // let newText = linkName.textContent;
  if (linkName.tagName === 'data') {
    //console.log(newText);
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    topMenuLinks.forEach(function (element) {
      element.classList.remove("active");
    });
  

  }
});