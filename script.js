document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Project Explorer',
            description: 'Interactive Development',
            backgroundImage: 'https://source.unsplash.com/random/800x600?code'
        },
        {
            title: 'Code Craft',
            description: 'Building the Future',
            backgroundImage: 'https://source.unsplash.com/random/800x600?programming'
        },
        {
            title: 'Web Artifacts',
            description: 'Digital Collection',
            backgroundImage: 'https://source.unsplash.com/random/800x600?web'
        },
        {
            title: 'Security Hub',
            description: 'Advanced Protection',
            backgroundImage: 'https://source.unsplash.com/random/800x600?security'
        },
        {
            title: 'Cloud Space',
            description: 'Infinite Storage',
            backgroundImage: 'https://source.unsplash.com/random/800x600?cloud'
        },
        {
            title: 'Data Launch',
            description: 'Fast Deployment',
            backgroundImage: 'https://source.unsplash.com/random/800x600?data'
        }
    ];

    const projectGrid = document.querySelector('.project-grid');

    projects.forEach(project => {
        const card = document.createElement('a');
        card.href = '#';
        card.classList.add('project-card');
        card.style.backgroundImage = `url(${project.backgroundImage})`;
        
        card.innerHTML = `
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        `;

        // Add hover animation
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });

        projectGrid.appendChild(card);
    });

    // Add floating animation to cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
});

