const dynamicText = document.querySelector(".textAnim");
const words = ["Happy Birthday","Feliz cumple","Wszystkiego Najlepszego"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () =>
{
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length)
    {
        charIndex++;
        setTimeout(typeEffect, 200);
    }
    else if(isDeleting && charIndex > 0)
    {
        charIndex--;
        setTimeout(typeEffect, 100);
    }
    else
    {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking")
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

const button = document.querySelector(".button");

button.addEventListener("click", (e) => 
{
    e.preventDefault;
    button.classList.add("animate");
    setTimeout(() => {
        button.classList.remove("animate");
    }, 600);
});

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY + 10)+"px; left: "+(e.pageX + 10)+"px;");
});

const focus = document.getElementById("focus");
let focusHalfWidth = focus.offsetWidth/2;
document.onmousemove = function(e){
    focus.style.left = e.pageX - focusHalfWidth + "px";
    focus.style.top = e.pageY - focusHalfWidth + "px";
}

const dynamicText2 = document.querySelector(".textAnim2");
const words2 = ["I Love You","Te Amo","Kocham Cie"];

let wordIndex2 = 0;
let charIndex2 = 0;
let isDeleting2 = false;

const typeEffect2 = () =>
{
    const currentWord = words2[wordIndex2];
    const currentChar = currentWord.substring(0, charIndex2);
    dynamicText2.textContent = currentChar;
    dynamicText2.classList.add("stop-blinking2");

    if(!isDeleting2 && charIndex2 < currentWord.length)
    {
        charIndex2++;
        setTimeout(typeEffect2, 200);
    }
    else if(isDeleting2 && charIndex2 > 0)
    {
        charIndex2--;
        setTimeout(typeEffect2, 100);
    }
    else
    {
        isDeleting2 = !isDeleting2;
        dynamicText2.classList.remove("stop-blinking2")
        wordIndex2 = !isDeleting2 ? (wordIndex2 + 1) % words2.length : wordIndex2;
        setTimeout(typeEffect2, 1200);
    }
}

typeEffect2();
