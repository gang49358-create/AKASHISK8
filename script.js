/* =========================================
   AKASHISK8 WEBSITE
   RUST MOBILE // YZ CLAN
========================================= */


/* LOADER */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 900);

});


/* PARTICLES */

const particles = document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 12 + 8) + "s";

    particle.style.animationDelay =
        (Math.random() * 10) + "s";

    particle.style.opacity =
        Math.random() * .5;

    particles.appendChild(particle);
}


/* SCROLL REVEAL */

const revealElements =
    document.querySelectorAll(
        ".section, .signature, .contact"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* STAT COUNTERS */

const counters =
    document.querySelectorAll(".stat-number");


const counterObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const duration = 1500;

                const start =
                    performance.now();


                function update(time) {

                    const progress =
                        Math.min(
                            (time - start) / duration,
                            1
                        );


                    const eased =
                        1 - Math.pow(1 - progress, 3);


                    current =
                        Math.floor(target * eased);


                    counter.textContent =
                        current.toLocaleString();


                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }

                }


                requestAnimationFrame(update);

                observer.unobserve(counter);

            });

        },
        {
            threshold: .7
        }
    );


counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* MOUSE EFFECT */

const heroCard =
    document.querySelector(".hero-card");


if (heroCard) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (window.innerWidth / 2 - event.clientX) / 50;

        const y =
            (window.innerHeight / 2 - event.clientY) / 50;


        if (window.innerWidth > 900) {

            heroCard.style.transform =
                `rotateY(${x}deg) rotateX(${y}deg)`;

        }

    });


    document.addEventListener("mouseleave", () => {

        heroCard.style.transform =
            "rotate(2deg)";

    });

}


/* ACTIVE NAV */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {
            current = section.id;
        }

    });


    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.style.color =
                "var(--accent)";

        }

    });

});


/* BUTTON RIPPLE */

document
    .querySelectorAll(".btn, .contact-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement("span");

                ripple.style.position =
                    "absolute";

                ripple.style.width = "10px";
                ripple.style.height = "10px";

                ripple.style.borderRadius =
                    "50%";

                ripple.style.background =
                    "rgba(215,255,63,.4)";

                ripple.style.pointerEvents =
                    "none";

                ripple.style.transform =
                    "scale(0)";

                ripple.style.animation =
                    "ripple .6s linear";


                this.style.position =
                    "relative";

                this.style.overflow =
                    "hidden";


                const rect =
                    this.getBoundingClientRect();


                ripple.style.left =
                    event.clientX - rect.left + "px";

                ripple.style.top =
                    event.clientY - rect.top + "px";


                this.appendChild(ripple);


                setTimeout(() => {
                    ripple.remove();
                }, 600);

            }
        );

    });


/* GLITCH EFFECT */

const logo =
    document.querySelector(".hero h1");


setInterval(() => {

    if (!logo) return;

    logo.style.textShadow =
        "3px 0 rgba(215,255,63,.15)";

    setTimeout(() => {

        logo.style.textShadow = "";

    }, 80);

}, 5000);