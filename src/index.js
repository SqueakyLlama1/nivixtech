const lsClose = document.getElementById('loadshadeClose');
const loadContainer = document.getElementById('loadcontainer');

const desktopNavigaton = document.getElementById('desktop-navigation');
const mobileNavigaton = document.getElementById('mobile-navigation');

const navigationButtons = [
	{ label: "Home", url: "index.html", keyword: " Technology" }
];

document.addEventListener('DOMContentLoaded', function() {
	setTimeout(function() {
    	document.body.classList.add('visible');
    	populateDesktopNavigation();
		populateMobileNavigation();
	}, 10);
});

var navMenuOpen = false;

function openNavMenu() {
    if (!navMenuOpen) {
        let container = document.getElementById('mnavcontainer');
        container.style.display = "block";
        setTimeout(() => {
            container.classList.add('show');
        }, 10);
    }
    navMenuOpen = true;
}

function closeNavMenu() {
    if (navMenuOpen) {
        let container = document.getElementById('mnavcontainer');
        container.classList.remove('show');
        setTimeout(() => {
            container.style.display = "none";
        }, 300);
    }
    navMenuOpen = false;
}

function populateMobileNavigation() {
    let navigationContainer = document.getElementById('mobile-navigation');
    let middleDiv = document.createElement('div');
    middleDiv.classList.add('middle');

    let navbutton = document.createElement('button');
    navbutton.textContent = "Switch Page";
    navbutton.onclick = openNavMenu;

	let menu = document.getElementById("navmenu");
    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancel";
    cancelBtn.onclick = closeNavMenu;

    menu.appendChild(cancelBtn);

    navigationButtons.forEach(button => {
        let option = document.createElement('button');
        option.textContent = button.label;
        option.onclick = function(event) {
            navigate(event, button.url);
        };
        if (document.title.includes(button.keyword)) {
            option.classList.add('active');
        }
        menu.appendChild(option);
    });

    navigationContainer.innerHTML = '';
    middleDiv.appendChild(navbutton);
    navigationContainer.appendChild(middleDiv);
    document.getElementById('mnavcontainer').addEventListener('click', closeNavMenu);
}

function populateDesktopNavigation() {
    let navigationContainer = document.getElementById('desktop-navigation');

    navigationContainer.innerHTML = '';
    navigationButtons.forEach(button => {
        let buttonElement = document.createElement("button");
		buttonElement.textContent = button.label;
        buttonElement.onclick = function(event) {
            navigate(event, button.url);
        };
        if (document.title.includes(button.keyword)) {
            buttonElement.classList.add('active');
        }
        navigationContainer.appendChild(buttonElement);
    });
}

function navigate(event, url) {
    event.preventDefault();
    document.body.classList.remove('visible');
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}