
function toggleCss(target) {
    target.classList.toggle("is-active");
}

const lis = document.querySelectorAll('#users .user');

lis.forEach(li => {
    li.onclick = (e) => {
        toggleCss(e.target);
    };
});

