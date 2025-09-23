// Animation Observer
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        };
    });
},{});
const Elements1 = document.querySelectorAll(".hero");
const Elements2 = document.querySelectorAll(".Works");
const Elements3 = document.querySelectorAll(".main");
const Elements4 = document.querySelectorAll(".main-header");
const Elements5 = document.querySelectorAll(".study");
const Elements6 = document.querySelectorAll(".tests");
const Elements7 = document.querySelectorAll(".projects-header");
const Elements8 = document.querySelectorAll(".projects");
const Elements9 = document.querySelectorAll(".contact");
const Elements10 = document.querySelectorAll("footer");
Elements1.forEach(el => observer.observe(el));
Elements2.forEach(el => observer.observe(el));
Elements3.forEach(el => observer.observe(el));
Elements4.forEach(el => observer.observe(el));
Elements5.forEach(el => observer.observe(el));
Elements6.forEach(el => observer.observe(el));
Elements7.forEach(el => observer.observe(el));
Elements8.forEach(el => observer.observe(el));
Elements9.forEach(el => observer.observe(el));
Elements10.forEach(el => observer.observe(el));

// Animation Cards
document.querySelectorAll('.share').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    card.style.transform = `perspective(800px) rotateX(${-dy*6}deg) rotateY(${dx*6}deg) translateZ(6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Scroll Animation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href'); 
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'      
      });
    }
  });
});

// Scrollbar Animation
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  document.getElementById("scrollbar").style.width = scrollPercent + "%";
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});