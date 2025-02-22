document.addEventListener('DOMContentLoaded', function () {

    // Function to show/hide project cards based on category
    function filterProjects(category) {
        document.querySelectorAll('.project-card').forEach(card => {
            if (card.getAttribute('data-category') === category || category === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Initialize with 'all' projects visible
    filterProjects('all');

    // Project category buttons event listeners
    document.querySelectorAll('.projects-categories button').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.projects-categories button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Filter projects by selected category
            const category = button.getAttribute('data-category');
            filterProjects(category);
        });
    });

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

    // Initialize with 'programming' skills visible
    filterSkills('programming');

    // Skill category buttons event listeners
    const skillButtons = document.querySelectorAll('.skills-categories button');
    skillButtons.forEach(button => {
        button.addEventListener('click', function () {
            skillButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const skillType = this.getAttribute('data-skill');
            filterSkills(skillType);
        });
    });

    // Assignment details functions
    // These functions allow detailed assignment views to be shown/hidden universally.
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
