import './style.css'

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 4);
}, { passive: true });

const captureForm = document.getElementById('capture-form');
const captureConfirm = document.getElementById('capture-confirm');
const captureError = document.getElementById('capture-error');

captureForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = captureForm.elements['email'].value;
  const btn = captureForm.querySelector('.capture__btn');

  btn.disabled = true;
  captureError.hidden = true;

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': import.meta.env.VITE_BREVO_API_KEY,
      },
      body: JSON.stringify({ email, listIds: [3] }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    captureForm.hidden = true;
    captureConfirm.hidden = false;
  } catch {
    captureError.hidden = false;
    btn.disabled = false;
  }
});
