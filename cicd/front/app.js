
const btn = document.querySelector(".btn");
const title = document.querySelector("h1");

    btn.addEventListener("click", () => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => {
                title.innerHTML = data.title;
            });
    });
