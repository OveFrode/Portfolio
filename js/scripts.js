document.addEventListener('DOMContentLoaded', function () {
    // Filter Projects
    document.querySelectorAll('.projects-categories button').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.projects-categories button').forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Get the category to filter by
            const category = button.getAttribute('data-category');

            // Show/Hide projects based on the category
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
            // Remove active class from all buttons
            skillButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            // Get the skill type to filter by
            const skillType = this.getAttribute('data-skill');

            // Show/Hide skill bars based on the skill type
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
