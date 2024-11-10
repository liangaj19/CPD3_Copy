function replaceImage(imgElement) {
    // Path to the default image
    const defaultImage = '../images/default_image.jpg';
    // Replace the source with the default image path
    imgElement.src = defaultImage;
    // Optionally, set a different alt text for the default image
    imgElement.alt = "Default profile picture.";
}

// Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // Check the current viewport width
    if (window.innerWidth > 600) { 
        // Only show button for viewport widths greater than 600px
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    } else {
        mybutton.style.display = "none"; // Ensure the button doesn't show on smaller screens
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Lightbox
document.addEventListener("DOMContentLoaded", function() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var captionText = document.getElementById('caption');
    var closeBtn = document.getElementsByClassName('close')[0];

    console.log("DOM fully loaded and parsed");

    function openLightbox(img) {
        console.log("Opening lightbox for image:", img.src);
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        captionText.innerHTML = img.alt;
    }

    var galleryItems = document.getElementsByClassName('gallery-item');
    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].addEventListener('click', function() {
            openLightbox(this);
        });
        galleryItems[i].addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                openLightbox(this);
            }
        });
    }

    closeBtn.addEventListener('click', function() {
        console.log("Close button clicked");
        lightbox.style.display = 'none';
    });

    closeBtn.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            console.log("Close button activated with keyboard");
            lightbox.style.display = 'none';
        }
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target == lightbox) {
            console.log("Clicked outside the image in lightbox");
            lightbox.style.display = 'none';
        }
    });
});