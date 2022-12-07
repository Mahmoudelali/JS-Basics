let username = document.querySelector("input");
username.addEventListener("blur", () => {
    document.querySelector(".target").innerHTML = `thank you for participating`;
});
