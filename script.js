document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Simple validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        document.getElementById('status-message').textContent = 'Please fill in all fields.';
        return;
    }
    
    // Simulate sending email (you can replace this with actual functionality)
    setTimeout(function() {
        // Clear form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        
        // Provide feedback to the user
        document.getElementById('status-message').textContent = 'Message sent!';
    }, 1000);
});
