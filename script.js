// ==========================================
// JOYLAND BEAUTY SALON - SUPABASE CONNECTION
// ==========================================

// Your Supabase project details
const SUPABASE_URL = "https://kpwytwedsfknhzpanutf.supabase.co/rest/v1/";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_7-OLGEkip0r8y2qIxuoBrQ_uADJMLuA";

// Create Supabase connection
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// ==========================================
// BOOKING FORM
// ==========================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        if (!name || !phone || !service || !date || !time) {
            alert("Please complete all booking details.");
            return;
        }

        alert("Your booking details have been received! ✨");

        bookingForm.reset();
    });
}


// ==========================================
// CHECK CURRENT USER
// ==========================================

async function checkUser() {
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
        console.log("Logged in user:", user.email);
    }
}