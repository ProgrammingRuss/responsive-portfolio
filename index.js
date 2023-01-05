const toggler = document.querySelector("#toggler");
const overlay = document.querySelector("#overlay");
const nav = document.querySelector("#nav");
const header = document.querySelector("#header");
const html = document.querySelector("#html");
const goToTop = document.querySelector("#goToTop");
const herosection = document.querySelector("#heroSection");
const menuButton = document.querySelector("#menuButton");
// create overlay element
const overlayElement = document.createElement("div");
overlayElement.id = "overlay";
overlayElement.classList.add("fixed","z-40","inset-0","backdrop-blur-md","bg-[#00000030]");
// inset overlay element after nav element
const insertAfter =(referenceNode, newNode)=> {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
// remove overlay element after nav element
const removeElement =(element)=>{
  element.parentNode.removeChild(element);
}
// toggler toggle button
const menuClick = () => {
  nav.classList.toggle("translate-x-full");
  nav.classList.toggle("opacity-0");
  nav.classList.toggle("invisible");
  insertAfter(nav, overlayElement)
  html.classList.toggle("overflow-hidden");
  toggler.name === "menu" ? ((toggler.name = "close"), insertAfter(nav, overlayElement)) : ((toggler.name = "menu"), removeElement(overlayElement));
};
// menuClick whien click outside menu
document.addEventListener("click", (e) => {
  if (
    e.target.id !== "nav" &&
    e.target.id !== "toggler" &&
    toggler.name === "close"
  ) {
    menuClick();
  }
});
// for javascript media query
const mql = window.matchMedia("(min-width: 768px)");
const handleMatchMediaChange = (event) => {
  if (event.matches) {
    if (!nav.classList.contains("translate-x-full")) {
      menuClick();
    }
  }
};
mql.addListener(handleMatchMediaChange);

// for goto top
window.addEventListener("scroll", () => {
  window.scrollY >= 500
    ? goToTop.classList.remove("hidden")
    : goToTop.classList.add("hidden");
});
// for number animations
const divs = document.querySelectorAll("p[data-target]");
const animationNumber = () => {
  divs.forEach((div) => {
    const speed = 250;
    const targetValue = parseInt(div.dataset.target);
    const increaseValue = targetValue / speed;
    const updateNumber = () => {
      const initialValue = parseInt(div.innerHTML);
      if (initialValue < targetValue) {
        div.innerHTML = `${Math.floor(initialValue + increaseValue)}+`;
        setTimeout(() => {
          updateNumber();
        }, 10);
      }
    };
    updateNumber();
  });
};
// clear


// for sticky elements
const stickyobserver = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    !entry.isIntersecting? header.classList.add("stickyBar"):header.classList.remove("stickyBar");
  },
  {
    root: null,
    threshold: 0,
  }
);

stickyobserver.observe(herosection);

const numberSection = document.querySelector("#number");
const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-[fadeLeft_1s]")
      animationNumber();
      
    } 
  },
  { threshold: 0 }
);
observer.observe(numberSection);
// create overlay element
// fixed z-[49] visible transition-all duration-500 inset-0 backdrop-blur-md bg-[#00000030]
