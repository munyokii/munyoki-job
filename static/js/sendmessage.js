const form = document.querySelector('form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.style.display = 'none';
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    if (!data.name || !data.email || !data.topic || !data.message) {
        showMessage('Please fill all fields!', 'error');
        return;
    }
    
    if (!validateEmail(data.email)) {
        showMessage('Please enter a valid email!', 'error');
        return;
    }
    
    showMessage(`Thank you, ${data.name}! I have received your message. We'll get back to you soon.`, 'success');
    this.reset();
    
    emailjs.send("service_abo3bwt", "template_ddtwcpe", data)
        .then(() => showMessage("Message sent successfully!", "success"))
        .catch(() => showMessage("Failed to send message.", "error"));
});

function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.style.display = 'block';
    formMessage.style.background = type === 'error' ? '#ffebee' : '#e8f5e9';
    formMessage.style.color = type === 'error' ? '#c62828' : '#2e7d32';
}