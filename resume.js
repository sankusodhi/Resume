document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const h2 = section.querySelector('h2');
        h2.style.cursor = 'pointer';
        h2.addEventListener('click', () => {
            const content = section.querySelectorAll('p, ul');
            content.forEach(item => {
                if (item.style.display === 'none') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
