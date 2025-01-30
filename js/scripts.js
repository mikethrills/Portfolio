
        // Dark Mode Persistence
        document.addEventListener('DOMContentLoaded', function() {
            const toggleButton = document.getElementById('dark-mode-toggle');
            const body = document.body;

            if (localStorage.getItem('dark-mode') === 'enabled') {
                body.classList.add('dark-mode');
            }

            toggleButton.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('dark-mode', 'enabled');
                } else {
                    localStorage.removeItem('dark-mode');
                }
            });
        });

        // Scroll-triggered Animations
        document.addEventListener('scroll', () => {
            document.querySelectorAll('.fade-in').forEach(element => {
                if (element.getBoundingClientRect().top < window.innerHeight * 0.85) {
                    element.classList.add('show');
                }
            });
        });
    