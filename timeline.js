document.addEventListener("DOMContentLoaded", () => {
  fetch('data/events.json')
    .then(res => res.json())
    .then(events => {
      const timeline = document.getElementById('timeline');
      events.forEach(event => {
        const div = document.createElement('div');
        div.className = 'timeline-event';
        div.innerHTML = `
          <div class="timeline-date">${event.date}</div>
          <div class="timeline-title">${event.title}</div>
          <div class="timeline-desc">${event.description}</div>
          ${event.image ? `<img src="assets/images/${event.image}" class="timeline-img" alt="${event.title}">` : ''}
        `;
        timeline.appendChild(div);
      });
    });
});
