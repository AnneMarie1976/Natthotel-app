// hämtar alla HTML-element 
const bookingForm = document.getElementById('booking-form');
const bookingView = document.getElementById('booking-view');
const confirmationView = document.getElementById('confirmation-view');
const newBookingBtn = document.getElementById('new-booking-btn');

const careType = document.getElementById('care-type');
const hoursInput = document.getElementById('hours');
const totalPrice = document.getElementById('total-price');

// kalkylator-funktionen 
function calculate() {
    // körs bara om price-elementet finns på sidan (dvs. bara på index filen) 
    if (!totalPrice) return; //med denna rad hoppar JavaScript helt enkelt över kalkylatorn på about och kontaktsidan och fortsätter med hamburgare-meny så att den fungerar perfekt överallt.
    
    const pricePerHour = parseInt(careType.value);
    const totalHours = parseInt(hoursInput.value) || 0;
    totalPrice.innerText = "€" + (pricePerHour * totalHours);
}

// lyssnar på ändringar live (Körs bara på startsidan) 
if (careType && hoursInput) {
    careType.addEventListener('change', calculate); // Den här rad är jätteviktigt för att utan den skulle kalkylator inte alls fungera
    hoursInput.addEventListener('input', calculate);
    hoursInput.addEventListener('change', calculate);
}

// hanterar bokningsformuläret och tack-skärm (körs bara på startsidan)
if (bookingForm) {
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        bookingView.classList.add('hidden');
        confirmationView.classList.remove('hidden');
    });
}

if (newBookingBtn) {
    newBookingBtn.addEventListener('click', function() {
        bookingForm.reset();
        calculate();
        confirmationView.classList.add('hidden');
        bookingView.classList.remove('hidden');
    });
}

// kör kalkylatorn en gång i starten (om vi är på startsidan) 
calculate();

// mobilmeny hamburgare-toggle (fungerar på alla sidor) 

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}