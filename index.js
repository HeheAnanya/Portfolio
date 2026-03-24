

  const dot = document.getElementById('dot');
  const ring = document.getElementById('cover');
  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    setTimeout(() => {
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    }, 80);
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


//   const dot = document.getElementById('dot');
// const ring = document.getElementById('cover');

// document.addEventListener('mousemove', e => {
//   const x = e.clientX;
//   const y = e.clientY;
//     dot.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
//     setTimeout(() => {
//     ring.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
//   }, 50); 
// });
// const observerOptions = { threshold: 0.15 };
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     }
//   });
// }, observerOptions);

// document.querySelectorAll('.reveal').forEach(el => observer.observe(el));