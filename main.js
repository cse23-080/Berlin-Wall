// Voices from History
if (document.getElementById('voices')) {
  fetch('data/quotes.json')
    .then(res => res.json())
    .then(quotes => {
      const container = document.getElementById('voices');
      quotes.forEach(q => {
        const card = document.createElement('div');
        card.className = 'voice-card';
        card.innerHTML = `
          <div class="voice-quote">"${q.quote}"</div>
          <div class="voice-author">${q.author}</div>
          <div class="voice-context">${q.context || ''}</div>
          ${q.audio ? `<audio controls src="assets/audio/${q.audio}"></audio>` : ''}
        `;
        container.appendChild(card);
      });
    });
}

// Gallery
if (document.getElementById('gallery')) {
  fetch('data/gallery.json')
    .then(res => res.json())
    .then(images => {
      const grid = document.getElementById('gallery');
      images.forEach(img => {
        const el = document.createElement('img');
        el.src = `assets/images/${img.file}`;
        el.alt = img.caption;
        el.className = 'gallery-img';
        el.tabIndex = 0;
        el.addEventListener('click', () => openModal(img));
        grid.appendChild(el);
      });
    });

  // Modal handling
  function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');
    modal.style.display = "flex";
    modalImg.src = `assets/images/${img.file}`;
    caption.innerText = img.caption;
  }
  document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = "none";
    }
  }
}
