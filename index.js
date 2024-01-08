// index.js

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function () {
    // Configuration des particules
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'bubble'
                },
                onclick: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        }
    });
});
// index.js

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function () {
    // ... (votre code existant)

    // Sélectionner le formulaire
    const contactForm = document.querySelector('.contact-form');

    // Ajouter un écouteur d'événement pour le soumission du formulaire
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)

        // Ici, vous pouvez ajouter le code pour traiter l'envoi du formulaire (envoyer à un backend, etc.)

        // Afficher le message de confirmation
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.style.display = 'block';

        // Vous pouvez également masquer le formulaire si nécessaire
        contactForm.style.display = 'none';
    });
});
// Génération de l'objet PDO permettant l'accès à la base de données
$dbHost = 'mysql-mlourdel.alwaysdata.net';
$dbUser = '295165';
$dbPassword = '';
$dbBase = 'mlourdel_base';
$dbPort = '3306';
