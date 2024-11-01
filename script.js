document.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelector("#intro .intro");
    const introSection = document.getElementById("intro");
    const homeSection = document.getElementById("home");

    // fill color in intro
    gsap.fromTo(introText, 
        { 
            opacity: 1, 
            scale: 1 
        },
        { 
            duration: 1,
            ease: "power3.out", 
            onComplete: () => {
                introText.style.color = "#fff"; 
                introText.style.webkitTextStroke = "0px"; 
            }
        }
    );

    // Transition to home 
    gsap.to(introText, {
        delay: 2, 
        duration: 1,
        opacity: 0, 
        onComplete: () => {
            introSection.classList.add("d-none"); 
            homeSection.classList.remove("d-none"); 

            gsap.from(".navbar, .content", {
                opacity: 0,
                y: 20,
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.2,
            });
        }
    });
    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
    
            gsap.to(container.querySelector('img'), {
                x: (x - rect.width / 2) * 1,
                y: (y - rect.height / 2) * 1,
                duration: 0.3,
                ease: 'power3.out'
            });
        });
    
        container.addEventListener('mouseleave', () => {
            gsap.to(container.querySelector('img'), {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'power3.out'
            });
        });
    });
});

