document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navigation a');

    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});

document.getElementById('backButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('navbar').scrollIntoView({
        behavior: 'smooth'
    });
});
