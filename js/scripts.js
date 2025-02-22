document.addEventListener('DOMContentLoaded', function () {
    // Check if the page has project categories (index.html only)
    const projectCategoryButtons = document.querySelector('.projects-categories');

    // Function to show/hide project cards based on category
    function filterProjects(category) {
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.display = (category === 'all' || card.getAttribute('data-category') === category) ? 'block' : 'none';
        });
    }

    // If we're on the main project page, set default category to 'Current'
    if (projectCategoryButtons) {
        const defaultCategory = 'current';
        filterProjects(defaultCategory);

        // Set the "Current" button as active
        document.querySelectorAll('.projects-categories button').forEach(button => {
            button.classList.toggle('active', button.getAttribute('data-category') === defaultCategory);
        });

        // Project category buttons event listeners
        document.querySelectorAll('.projects-categories button').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.projects-categories button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                filterProjects(button.getAttribute('data-category'));
            });
        });
    }

    // Function to show/hide skill bars based on skill type
    function filterSkills(skillType) {
        document.querySelectorAll('.skills-bars').forEach(skillBar => {
            skillBar.style.display = (skillBar.getAttribute('data-skill-type') === skillType) ? 'flex' : 'none';
        });
    }

    // Ensure only 'programming' skills are visible on page load
    filterSkills('programming');

    // Skill category buttons event listeners
    document.querySelectorAll('.skills-categories button').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.skills-categories button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterSkills(this.getAttribute('data-skill'));
        });
    });

    // Function to toggle Quick Preview of code
    window.togglePreview = function(id) {
        let codeBlock = document.getElementById(id);
        codeBlock.style.display = codeBlock.style.display === "block" ? "none" : "block";
    };

    // Assignment details functions
    window.showAssignment = function(id) {
        const detailsSection = document.getElementById("project-details");
        if (!detailsSection) return;

        if (window.assignments && window.assignments[id]) {
            detailsSection.innerHTML = window.assignments[id].content;
            const projectCards = document.getElementById("project-cards");
            if (projectCards) projectCards.style.display = "none";
            detailsSection.style.display = "block";
        }
    };

    window.hideAssignment = function() {
        const detailsSection = document.getElementById("project-details");
        if (!detailsSection) return;
        detailsSection.style.display = "none";
        document.getElementById("project-cards")?.style.display = "flex";
    };
});
