document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    document.getElementById("status").textContent = "Отправка...";

    try {
        const response = await fetch("https://YOUR_SERVER_URL/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.status === "success") {
            document.getElementById("status").textContent = "Заявка отправлена!";
            this.reset();
        } else {
            document.getElementById("status").textContent = "Ошибка отправки.";
        }
    } catch (error) {
        document.getElementById("status").textContent = "Ошибка соединения.";
    }
});