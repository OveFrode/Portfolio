document.addEventListener('DOMContentLoaded', function () {

    // Check if the page has project categories (index.html only)
    const projectCategoryButtons = document.querySelector('.projects-categories');

    // Function to show/hide project cards based on category
    function filterProjects(category) {
        document.querySelectorAll('.project-card').forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // If we're on the main project page, set default category to 'Current'
    if (projectCategoryButtons) {
        const defaultCategory = 'current';
        filterProjects(defaultCategory);

        // Set the "Current" button as active
        document.querySelectorAll('.projects-categories button').forEach(button => {
            if (button.getAttribute('data-category') === defaultCategory) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Project category buttons event listeners
        document.querySelectorAll('.projects-categories button').forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                document.querySelectorAll('.projects-categories button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Get category and filter projects
                const category = button.getAttribute('data-category');
                filterProjects(category);
            });
        });
    }

    // Function to show/hide skill bars based on skill type
    function filterSkills(skillType) {
        document.querySelectorAll('.skills-bars').forEach(skillBar => {
            if (skillBar.getAttribute('data-skill-type') === skillType) {
                skillBar.style.display = 'flex';
            } else {
                skillBar.style.display = 'none';
            }
        });
    }

    // Ensure only 'programming' skills are visible on page load
    filterSkills('programming');

    // Skill category buttons event listeners
    const skillButtons = document.querySelectorAll('.skills-categories button');
    skillButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all skill buttons
            skillButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Get skill type and filter skills
            const skillType = this.getAttribute('data-skill');
            filterSkills(skillType);
        });
    });

    // Ensure Java Projects page cards are always visible
    if (document.body.classList.contains('java-projects-page')) {
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.display = 'block';
        });
    }

    // Function to toggle Quick Preview of code snippets
    window.togglePreview = function(id) {
        var codeBlock = document.getElementById(id);
        if (codeBlock.style.display === "none" || codeBlock.style.display === "") {
            codeBlock.style.display = "block"; // Show code
        } else {
            codeBlock.style.display = "none"; // Hide code
        }
    };

    // Function to show/hide code snippets when clicked
    window.toggleCode = function(id) {
        let codeBlock = document.getElementById(id);
        if (codeBlock.style.display === "none" || codeBlock.style.display === "") {
            codeBlock.style.display = "block"; // Show code
        } else {
            codeBlock.style.display = "none"; // Hide code
        }
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
        const projectCards = document.getElementById("project-cards");
        if (projectCards) projectCards.style.display = "flex";
    };

});
