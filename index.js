const check = document.querySelector('#check');
const section = document.querySelector('section')
const links = document.querySelectorAll('a');
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    section.style.opacity = "0";
})
const cancel = document.querySelector('#cancel');
cancel.addEventListener('click', () => {
    section.style.opacity = "1";
})
for (let link of links) {
    link.addEventListener('click', () => {
        check.checked = false;
        section.style.opacity = "1";
    })
}



//intersection observer
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });

});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer1.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        } else {
            entry.target.classList.remove('show1');
        }
    });

});
const contactElements = document.querySelectorAll('.contact');
contactElements.forEach((el) => observer2.observe(el));


const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    });

});
const skills_para = document.querySelectorAll('.skills_para');
skills_para.forEach((el) => observer3.observe(el));




function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
}
document.querySelector('.scrollable').removeEventListener('wheel', preventScroll);

function slowScroll(target) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var currentPosition = window.pageYOffset;
    var distance = targetPosition - currentPosition;
    var duration = 1000; // Adjust the duration (in milliseconds) as desired
    var startTime;

    function scrollAnimation(currentTime) {
        if (startTime === undefined) startTime = currentTime;
        var elapsedTime = currentTime - startTime;
        var scrollProgress = ease(elapsedTime, currentPosition, distance, duration);
        window.scrollTo(0, scrollProgress);
        if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    // Easing function (you can change this to achieve different scrolling effects)
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollAnimation);
}
