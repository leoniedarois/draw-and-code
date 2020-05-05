// PARTICULES PART
/* particlesJS.load(@dom-id, @path-json */
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 600
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.7,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 50,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// PARALLAX PART
let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);
parallaxInstance.invert(false, false);

// GSAP PART
TweenLite.defaultEase = Linear.easeNone;

let rideau = new TimelineMax({repeat: -1, yoyo: true});
rideau.to("#RIDEAU", .7, { y: 0, x: -1});

let lights = new TimelineMax({repeat: -1, yoyo: true});
lights.to("#LUMIERES", 1.5, { y: 2, x: -3 });
lights.to("#LUMIERES", .8, { opacity: 0.4 });

let bras = new TimelineMax({repeat: -1, yoyo: true});
bras.to("#bras_mec, #reflet_main, #reflet_main-2", .8, { y: 0, x: -1});

let tete = new TimelineMax({repeat: -1, yoyo: true});
tete.to("#tete_mec, #cheveux_mec, #cheveux_sous_oreille_mec", 1, { y: 0, x: -.8, rotation: -5});

