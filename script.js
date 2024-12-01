document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const checkinDate = document.getElementById('checkin').value;
    const checkoutDate = document.getElementById('checkout').value;
    const rooms = document.getElementById('rooms').value;
    const guests = document.getElementById('guests').value;
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation
    if (!checkinDate || !checkoutDate || !cardName || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill in all fields.');
        return;
    }

    // Check if check-out date is later than check-in date
    if (new Date(checkoutDate) <= new Date(checkinDate)) {
        alert("Check-out date must be after check-in date.");
        return;
    }

    // Calculate total cost (just an example)
    const basePricePerNight = 100; // Price per room per night
    const totalCost = basePricePerNight * rooms * (new Date(checkoutDate) - new Date(checkinDate)) / (1000 * 3600 * 24);

    // Update total cost in the form
    document.getElementById('total-cost').innerText = totalCost.toFixed(2);

    // Simulate payment processing
    setTimeout(() => {
        document.getElementById('confirmation').innerHTML = `
            <p>Booking Details:</p>
            <p><strong>Check-in Date:</strong> ${checkinDate}</p>
            <p><strong>Check-out Date:</strong> ${checkoutDate}</p>
            <p><strong>Rooms:</strong> ${rooms}</p>
            <p><strong>Guests:</strong> ${guests}</p>
            <p><strong>Total Cost:</strong> $${totalCost.toFixed(2)}</p>
            <p><strong>Payment Status:</strong> Payment successfully processed!</p>
        `;
        document.getElementById('booking-form').reset(); // Reset the form
    }, 2000); // Simulate a delay for payment processing
});
