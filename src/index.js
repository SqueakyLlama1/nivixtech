var navMenuOpen = false;
var navPanel = document.getElementById('navpanel');
var navpanelimg = document.getElementById('navpanelimg');
var header = document.querySelector('header');
var navPanelContent = document.getElementById('navPanelContent');

var navigationButtons = [
    {text:"Home",url:"index.html"},
    {text:"Nivix Studio",url:"studio.html"}
];

function openNavMenu() {
    if (!navMenuOpen) {
        navPanel.classList.remove('closing');
        navPanel.style.display = "block";
        setTimeout(() => navPanel.classList.add('show'), 10);
        navMenuOpen = true;
        navpanelimg.src = "img/menu2.png";
    }
}

function closeNavMenu() {
    if (navMenuOpen) {
        navPanel.classList.remove('show');
        navPanel.classList.add('closing');
        setTimeout(() => {
            navPanel.style.display = "none";
            navPanel.classList.remove('closing');
        }, 350); // matches transition duration
        navMenuOpen = false;
        navpanelimg.src = "img/menu.png";
    }
}

function initNavPanel() {
    if (navPanel && header) {
        const headerHeight = header.offsetHeight;
        navPanel.style.top = headerHeight + "px";
        navPanel.style.height = `calc(100% - ${headerHeight}px)`;
    }
}

function populateNavPanel() {
    navigationButtons.forEach(function(navButton) {
        let a = document.createElement('a');
        a.innerText = navButton.text;
        a.href = navButton.url;
        navPanelContent.appendChild(a);
    });
}

// Toggle with hamburger
document.getElementById('hamburger').addEventListener('click', () => {
    navMenuOpen ? closeNavMenu() : openNavMenu();
});

document.addEventListener('DOMContentLoaded', function() {
    initNavPanel();
    populateNavPanel();
	setTimeout(function() {
    	document.body.classList.add('visible');
	}, 10);
});

document.addEventListener('resize', initNavPanel);