function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    toastContainer.textContent = message;
    toastContainer.style.display = 'block';

    // Hide the toast after 4 seconds
    setTimeout(function () {
        toastContainer.style.display = 'none';
    }, 4000);
}
