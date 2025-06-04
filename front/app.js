<<<<<<< HEAD
=======

>>>>>>> back
const btn = document.querySelector(".btn");
const title = document.querySelector("h1");

    btn.addEventListener("click", () => {
<<<<<<< HEAD
        fetch("http://localhost:3000/api")
        .then((res) => res.json())
        .then((data) => {
            title.innerHTML = data.title;
        });
    });
=======
        fetch("/api")
            .then((res) => res.json())
            .then((data) => {
                title.innerHTML = data.title;
            });
    });
>>>>>>> back
