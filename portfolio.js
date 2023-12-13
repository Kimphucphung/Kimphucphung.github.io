function handleScroll() {
  const section = document.getElementById('faq-section');
  const sectionPosition = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionPosition < screenHeight * 0.75) { // Adjust the value as needed for the trigger point
      // Add classes to trigger animations when the section is in the viewport
      section.querySelector('.faq-big-text').classList.add('animated', 'gentleMovementLeft');
      section.querySelector('.faq-text').classList.add('animated', 'gentleMovementUp');
      section.querySelector('.faq-big-text-2').classList.add('animated', 'gentleMovementRight');

      // Remove the scroll event listener once the animations have been triggered
      window.removeEventListener('scroll', handleScroll);
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
