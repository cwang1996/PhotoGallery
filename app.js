const grey = document.querySelector('.bigimgbg');
const close = document.querySelector('.closebtn');
const menuBtn = document.querySelector('.menu');
const linkAppear = document.querySelector('.links');

function myFunction(imgs) {
    const expandImg = document.getElementById('expandedImg');

    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = 'block';
    grey.classList.add('bigimgbgtog');
}

function exit(){
    close.parentElement.style.display='none';
    grey.classList.remove('bigimgbgtog');
}

function navBarResponse() {
    menuBtn.addEventListener('click', function(){
        linkAppear.classList.toggle('links-active');
    });
}

navBarResponse();
exit();