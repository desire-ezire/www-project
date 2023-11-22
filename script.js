function printPage(){
    print()
}

function submitForm() {
    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);
  
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=desire7995@bazeuniversity.edu.ng&su=Message%20from%20${name}%20(on%20your%20portfolio)&body=${message}%0ASender%20email:${email}`;
  
    window.open(gmailLink, '_blank');
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}