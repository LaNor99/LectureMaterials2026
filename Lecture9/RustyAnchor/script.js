document.addEventListener("DOMContentLoaded", function () {
    // 1. Definer elementene fra HTML
    const confirmBookingBtn = document.getElementById("confirm-booking");
    const bookingToastElement = document.getElementById("bookingToast");
    const bookingModalElement = document.getElementById("bookingModal");

    // 2. Initialiser Bootstrap-objektene
    const bookToast = new bootstrap.Toast(bookingToastElement);
    const modal = new bootstrap.Modal(bookingModalElement);

    // 3. Håndter klikk på bekreftelsesknappen
    if (confirmBookingBtn) {
        confirmBookingBtn.addEventListener("click", function () {
            // Lukk modalen
            modal.hide();
            
            // Vis toast-meldingen
            bookToast.show();
        });
    }
});