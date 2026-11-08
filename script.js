
document.addEventListener('DOMContentLoaded', () => {

    const welcomeBtn = document.getElementById('welcomeBtn');
    const welcomeCard = document.getElementById('welcomeCard');

    if (welcomeBtn && welcomeCard) {
        welcomeBtn.addEventListener('click', () => {
            welcomeCard.classList.toggle('hidden');
        });
    }

    const inquiryForm = document.getElementById('inquiryForm');
    const formAlert = document.getElementById('formAlert');

    if (inquiryForm && formAlert) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('fullName').value.trim();

            formAlert.className = 'alert alert-success';
            formAlert.textContent =
                `Thank you, ${fullName}! Your inquiry has been submitted successfully.`;

            inquiryForm.reset();

            setTimeout(() => {
                formAlert.className = 'alert alert-hidden';
            }, 5000);
        });
    }

});
