// Get elements
const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const openPopup1 = document.getElementById('openPopup1');
const openPopup2 = document.getElementById('openPopup2');
const openPopup3 = document.getElementById('openPopup3');
const openPopup4 = document.getElementById('openPopup4');
const openPopup5 = document.getElementById('openPopup5');
const openPopup6 = document.getElementById('openPopup6');
const closePopup1 = document.getElementById('closePopup1');
const closePopup2 = document.getElementById('closePopup2');
const closePopup3 = document.getElementById('closePopup3');
const closePopup4 = document.getElementById('closePopup4');
const closePopup5 = document.getElementById('closePopup5');
const closePopup6 = document.getElementById('closePopup6');

// Open first popup
openPopup1.onclick = function() {
    playMusic();
    popup1.style.display = 'block';
}

function playMusic() {
    var music = document.getElementById('backgroundMusic');
    music.play().catch(function(error) {
        console.log('Error playing music:', error);
    });
}


// Open second popup on top of the first one
openPopup2.onclick = function() {
    popup2.style.display = 'block';
}

// Close first popup
closePopup1.onclick = function() {
    popup1.style.display = 'none';
}

// Open second popup on top of the first one
openPopup3.onclick = function() {
    popup3.style.display = 'block';
}

// Close second popup
closePopup2.onclick = function() {
    popup2.style.display = 'none';
}

// Open second popup on top of the first one
openPopup4.onclick = function() {
    popup4.style.display = 'block';
}

// Close second popup
closePopup3.onclick = function() {
    popup3.style.display = 'none';
}

// Open second popup on top of the first one
openPopup5.onclick = function() {
    popup5.style.display = 'block';
}

// Close second popup
closePopup4.onclick = function() {
    popup4.style.display = 'none';
}

// Open second popup on top of the first one
openPopup6.onclick = function() {
    popup6.style.display = 'block';
}

// Close second popup
closePopup5.onclick = function() {
    popup5.style.display = 'none';
}

// Close second popup
closePopup6.onclick = function() {
    popup6.style.display = 'none';
}

// Close popup when clicking outside the content
window.onclick = function(event) {
    if (event.target === popup1) {
        popup1.style.display = 'none';
    }
    if (event.target === popup2) {
        popup2.style.display = 'none';
    }
    if (event.target === popup3) {
        popup3.style.display = 'none';
    }
    if (event.target === popup4) {
        popup4.style.display = 'none';
    }
    if (event.target === popup5) {
        popup5.style.display = 'none';
    }
    if (event.target === popup6) {
        popup6.style.display = 'none';
    }
}

    