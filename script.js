const codes = document.getElementsByClassName('collapsible');

for (let i = 0; i < codes.length; i++) {
    codes[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}
