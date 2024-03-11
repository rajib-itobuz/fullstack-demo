
const submitBtn = document.getElementById("submitBtn");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");


submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const result = await fetch("http://127.0.0.1:4000/user/login",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                mode: 'cors',
                method: "POST",
                body: JSON.stringify({ email })
            });

        console.log(result);
    } catch (error) {
        console.log(error);
    }
})