document.addEventListener('DOMContentLoaded', function () {
    // Filter Projects
    document.querySelectorAll('.projects-categories button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.projects-categories button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            document.querySelectorAll('.project-card').forEach(card => {
                if (card.getAttribute('data-category') === category || category === 'all') {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Filter Skills
    const skillButtons = document.querySelectorAll('.skills-categories button');
    const skillBars = document.querySelectorAll('.skills-bars');

    skillButtons.forEach(button => {
        button.addEventListener('click', function () {
            skillButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const skillType = this.getAttribute('data-skill');
            skillBars.forEach(skillBar => {
                if (skillBar.getAttribute('data-skill-type') === skillType) {
                    skillBar.style.display = 'flex';
                } else {
                    skillBar.style.display = 'none';
                }
            });
        });
    });
});
