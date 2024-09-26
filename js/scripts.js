document.addEventListener('DOMContentLoaded', function () {
    // Function to show/hide project cards based on category
    function filterProjects(category) {
        document.querySelectorAll('.project-card').forEach(card => {
            if (card.getAttribute('data-category') === category || category === 'all') {
                card.style.display = 'block';  // Show matching projects
            } else {
                card.style.display = 'none';  // Hide non-matching projects
            }
        });
    }

    // Initialize with 'current' category visible
    filterProjects('current');

    // Add event listeners to project category buttons
    document.querySelectorAll('.projects-categories button').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.projects-categories button').forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Get the selected category
            const category = button.getAttribute('data-category');
            // Filter projects by the selected category
            filterProjects(category);
        });
    });

    // Function to show/hide skill bars based on skill type
    function filterSkills(skillType) {
        document.querySelectorAll('.skills-bars').forEach(skillBar => {
            if (skillBar.getAttribute('data-skill-type') === skillType) {
                skillBar.style.display = 'flex';  // Show matching skills
            } else {
                skillBar.style.display = 'none';  // Hide non-matching skills
            }
        });
    }

    // Initialize with 'programming' skills visible
    filterSkills('programming');

    // Add event listeners to skill category buttons
    const skillButtons = document.querySelectorAll('.skills-categories button');
    skillButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            skillButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Get the selected skill type
            const skillType = this.getAttribute('data-skill');
            // Filter skills by the selected skill type
            filterSkills(skillType);
        });
    });
});
