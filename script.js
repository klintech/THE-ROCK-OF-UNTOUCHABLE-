document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic team members (example)
    const teamMembers = [
        { name: 'John Doe', role: 'Lead Prophet', image: 'https://source.unsplash.com/random/150x150/?man' },
        { name: 'Jane Smith', role: 'Prayer Coordinator', image: 'https://source.unsplash.com/random/150x150/?woman' },
        { name: 'Mike Johnson', role: 'Event Organizer', image: 'https://source.unsplash.com/random/150x150/?person' }
    ];

    const teamMembersContainer = document.querySelector('.team-members');
    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('team-member-card');
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamMembersContainer.appendChild(memberCard);
    });
});