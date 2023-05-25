function toggleAccordion(header) {
  let accordion = header.parentNode;
  let content = accordion.querySelector('.accordion-content');

  if (accordion.classList.contains('active')) {
    accordion.classList.remove('active');
    content.style.display = 'none';
  } else {
    // Закрити всі активні блоки перед відкриттям поточного
    let activeAccordions = document.querySelectorAll('.accordion.active');
    activeAccordions.forEach(function(acc) {
      acc.classList.remove('active');
      acc.querySelector('.accordion-content').style.display = 'none';
    });

    accordion.classList.add('active');
    content.style.display = 'block';
  }
}