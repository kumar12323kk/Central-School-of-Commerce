// ===== NAV TOGGLE FOR MOBILE =====
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('active');
});

// ===== SCROLL TO ENQUIRY FORM =====
const enrollBtn = document.getElementById('enrollBtn');
const enquirySection = document.getElementById('enquiry');

enrollBtn?.addEventListener('click', () => {
  enquirySection?.scrollIntoView({ behavior: 'smooth' });
});

// ===== WHATSAPP FORM SUBMISSION =====
const enquiryForm = document.getElementById('enquiryForm');
const whatsappNumber = '916383032090';

enquiryForm?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = enquiryForm.name.value.trim();
  const phone = enquiryForm.phone.value.trim();
  const message = enquiryForm.message.value.trim();
  const courses = enquiryForm.querySelectorAll('input[name="course"]:checked');

  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');
  const courseError = document.getElementById('courseError');

  nameError.textContent = '';
  phoneError.textContent = '';
  courseError.textContent = '';

  let isValid = true;

  if (!name) {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  if (!phone) {
    phoneError.textContent = 'Phone number is required';
    isValid = false;
  }

  if (courses.length === 0) {
    courseError.textContent = 'Select at least one course';
    isValid = false;
  }

  if (!isValid) return;

  let whatsappMessage = `Hello, I am *${name}*.%0APhone: ${phone}%0AInterested in: ${Array.from(courses).map(c => c.value).join(', ')}`;
  if (message) {
    whatsappMessage += `%0AMessage: ${message}`;
  }

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
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
