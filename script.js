// Mobile nav
const hamburger = document.getElementById('hamburger');
hamburger?.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '64px';
  nav.style.right = '20px';
  nav.style.background = '#0d0f10';
  nav.style.border = '1px solid #212325';
  nav.style.borderRadius = '12px';
  nav.style.padding = '10px';
});

// Cards data (mock)
const items = [
  { id: 1, title: 'Enduro Mountain Bike', type: 'Enduro', location: 'Pirineos', price: 70, img: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1400&auto=format&fit=crop' },
  { id: 2, title: 'Downhill Bike', type: 'Downhill', location: 'Andorra', price: 85, img: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=1400&auto=format&fit=crop' },
  { id: 3, title: 'Casco integral', type: 'Protecciones', location: 'Asturias', price: 10, img: 'https://images.unsplash.com/photo-1603449282208-0ca0f2ef3b3f?q=80&w=1400&auto=format&fit=crop' },
  { id: 4, title: 'Enduro Bike – Talla L', type: 'Enduro', location: 'Andorra', price: 75, img: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47a?q=80&w=1400&auto=format&fit=crop' }
];

function renderCards(list){
  const el = document.getElementById('cards');
  if(!el) return;
  el.innerHTML = list.map(item => `
    <article class="card">
      <div class="media"><img src="${item.img}" alt="${item.title}" loading="lazy"></div>
      <div class="body">
        <span class="badge">${item.type} · ${item.location}</span>
        <h3>${item.title}</h3>
        <div class="price">${item.price} €/día</div>
        <div class="actions">
          <button class="btn small" onclick="alert('Reserva demo: ${item.title}')">Reservar</button>
          <button class="btn small btn-outline" onclick="alert('Añadido a favoritos')">♡</button>
        </div>
      </div>
    </article>
  `).join('');
}

function applyFilters(){
  const type = document.getElementById('typeFilter').value;
  const loc = document.getElementById('locationFilter').value;
  const q = (document.getElementById('searchInput').value || '').toLowerCase();
  const filtered = items.filter(i => 
    (!type || i.type===type) &&
    (!loc || i.location===loc) &&
    (!q || i.title.toLowerCase().includes(q) || i.location.toLowerCase().includes(q))
  );
  renderCards(filtered);
}

document.getElementById('typeFilter')?.addEventListener('change', applyFilters);
document.getElementById('locationFilter')?.addEventListener('change', applyFilters);
document.getElementById('searchBtn')?.addEventListener('click', applyFilters);
document.getElementById('searchInput')?.addEventListener('input', applyFilters);

renderCards(items);

// Modals
function openModal(id){
  const m = document.getElementById(id);
  if(m){ m.style.display='flex'; m.setAttribute('aria-hidden','false'); }
}
function closeModal(id){
  const m = document.getElementById(id);
  if(m){ m.style.display='none'; m.setAttribute('aria-hidden','true'); }
}
window.openModal=openModal; window.closeModal=closeModal;