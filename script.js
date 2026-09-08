const enterButton = document.getElementById("enterButton");
const intro = document.getElementById("intro");
const mainWebsite = document.getElementById("mainWebsite");


/* =========================
   ENTER WEBSITE
========================= */

enterButton.addEventListener("click", () => {

    // Fade away intro
    intro.style.opacity = "0";

    // Prevent clicking intro while fading
    intro.style.pointerEvents = "none";


    setTimeout(() => {

        // Hide intro
        intro.style.display = "none";

        // Show website
        mainWebsite.style.display = "block";

        // Start at the top
        window.scrollTo(0, 0);

    }, 900);

});


/* =========================
   SMOOTH SCROLL
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                const targetID =
                    this.getAttribute("href");

                const target =
                    document.querySelector(targetID);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });