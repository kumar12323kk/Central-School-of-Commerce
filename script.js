// ===== NAV TOGGLE FOR MOBILE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// ===== SCROLL TO ENQUIRY FORM =====
const enrollBtn = document.getElementById('enrollBtn');
const enquirySection = document.getElementById('enquiry');

enrollBtn?.addEventListener('click', () => {
  enquirySection?.scrollIntoView({ behavior: 'smooth' });
});

// ===== WHATSAPP FORM SUBMISSION =====
const enquiryForm = document.getElementById('enquiryForm');

enquiryForm?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = enquiryForm.name.value.trim();
  const phone = enquiryForm.phone.value.trim();
  const message = enquiryForm.message.value.trim();

  const courses = [];
  enquiryForm.querySelectorAll('input[name="course"]:checked').forEach((checkbox) => {
    courses.push(checkbox.value);
  });

  if (!name || !phone || courses.length === 0) {
    alert('Please fill in your name, phone number, and select at least one course.');
    return;
  }

  let whatsappMessage = `Hello, I am *${name}*.%0APhone: ${phone}%0AInterested in: ${courses.join(', ')}`;
  if (message) {
    whatsappMessage += `%0AMessage: ${message}`;
  }

  const whatsappURL = `https://wa.me/916383032090?text=${whatsappMessage}`;
  window.open(whatsappURL, '_blank');
});

// ===== SCROLL ANIMATIONS WITH INTERSECTION OBSERVER =====
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add('invisible');
  observer.observe(section);
});
