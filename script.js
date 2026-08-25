/* =========================================================
   AKASHISK8 — INTERACTIVE CYBER EFFECTS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section, .stat-card, .panel, .timeline-item"
    );

    revealElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";
    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =====================================================
       PLAYER ID — CLICK TO COPY
       ===================================================== */

    const playerId =
        "69218804691894274";

    const idElements =
        document.querySelectorAll(".profile-row strong");


    idElements.forEach((element) => {

        if (
            element.textContent.trim() ===
            playerId
        ) {

            element.style.cursor = "pointer";

            element.title =
                "Нажмите, чтобы скопировать ID";

            element.addEventListener(
                "click",
                async () => {

                    try {

                        await navigator.clipboard.writeText(
                            playerId
                        );

                        const oldText =
                            element.textContent;

                        element.textContent =
                            "COPIED ✓";

                        element.style.color =
                            "#59d77b";

                        setTimeout(() => {

                            element.textContent =
                                oldText;

                            element.style.color =
                                "";

                        }, 1400);

                    } catch (error) {

                        console.log(
                            "Clipboard error:",
                            error
                        );

                    }

                }
            );

        }

    });


    /* =====================================================
       MOUSE / TOUCH GLOW
       ===================================================== */

    const glow = document.createElement("div");

    glow.className =
        "cursor-glow";

    document.body.appendChild(glow);


    const glowStyle =
        document.createElement("style");

    glowStyle.textContent = `

        .cursor-glow {

            position: fixed;

            width: 180px;
            height: 180px;

            border-radius: 50%;

            pointer-events: none;

            z-index: 9999;

            transform:
                translate(-50%, -50%);

            background:
                radial-gradient(
                    circle,
                    rgba(208,160,75,0.09),
                    transparent 70%
                );

            opacity: 0;

            transition:
                opacity 0.25s ease;

        }

        @media (max-width: 600px) {

            .cursor-glow {
                display: none;
            }

        }

    `;

    document.head.appendChild(
        glowStyle
    );


    document.addEventListener(
        "mousemove",
        (event) => {

            glow.style.left =
                event.clientX + "px";

            glow.style.top =
                event.clientY + "px";

            glow.style.opacity = "1";

        }
    );


    document.addEventListener(
        "mouseleave",
        () => {

            glow.style.opacity = "0";

        }
    );


    /* =====================================================
       CARD TILT
       ===================================================== */

    const cards =
        document.querySelectorAll(
            ".stat-card, .panel"
        );


    cards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth < 800) {
                    return;
                }

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -2.5;

                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    2.5;


                card.style.transform =
                    `
                    perspective(700px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-4px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       HERO IMAGE PARALLAX
       ===================================================== */

    const heroImage =
        document.querySelector(
            ".hero-image"
        );


    if (heroImage) {

        document.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth < 800) {
                    return;
                }

                const x =
                    (event.clientX /
                        window.innerWidth -
                        0.5);

                const y =
                    (event.clientY /
                        window.innerHeight -
                        0.5);


                heroImage.style.transform =
                    `
                    translate(
                        ${x * 8}px,
                        ${y * 8}px
                    )
                    `;

            }
        );

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-year]"
        );


    yearElements.forEach(
        (element) => {

            element.textContent =
                new Date()
                    .getFullYear();

        }
    );


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    const navObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            navLinks.forEach(
                                (link) => {

                                    link.style.color =
                                        "";

                                    if (
                                        link.getAttribute(
                                            "href"
                                        ) ===
                                        "#" +
                                        entry.target.id
                                    ) {

                                        link.style.color =
                                            "#d0a04b";

                                    }

                                }
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.45
            }
        );


    sections.forEach(
        (section) => {

            navObserver.observe(
                section
            );

        }
    );


    /* =====================================================
       CONSOLE EASTER EGG
       ===================================================== */

    console.log(
        "%c AKASHISK8 ",
        `
        background:#d0a04b;
        color:#050607;
        padding:8px 14px;
        font-weight:900;
        letter-spacing:3px;
        `
    );

    console.log(
        "%c RUST MOBILE / TENCENT ",
        `
        color:#888;
        font-size:12px;
        `
    );


});