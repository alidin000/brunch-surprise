const suspects = [
  { name: 'Eggdrop Project', alias: 'THE EGG SITUATION', location: 'Budapest', description: 'A Korean-inspired brunch with fluffy brioche, egg sandwiches and playful comfort-food energy.', vibe: 'Egg-forward & playful', draw: 'Brioche, eggs & bold flavors', symbol: '🥚', color: '#d5dfd0', map: 'https://www.google.com/maps/search/?api=1&query=Eggdrop+Project+Budapest', site: 'http://eggdropproject.hu/#ourmenu' },
  { name: 'Stika', alias: 'THE PROPER BRUNCH', location: 'Budapest', description: 'A well-established brunch spot with classic breakfast comfort, generous plates and a relaxed gastropub feel.', vibe: 'Classic & cozy', draw: 'Proper brunch plates', symbol: '🍳', color: '#e5d4be', map: 'https://www.google.com/maps/search/?api=1&query=Stika+Budapest', site: 'https://stikabudapest.com/menus/' },
  { name: 'Blueberry Brunch', alias: 'THE INSTAGRAM SUSPECT', location: 'Budapest', description: 'A colorful brunch candidate with pancakes, waffles, eggs and the kind of plates that make you reach for your phone.', vibe: 'Pretty & indulgent', draw: 'Pancakes, waffles & eggs', symbol: '🫐', color: '#ead8dd', map: 'https://www.google.com/maps/search/?api=1&query=Blueberry+Brunch+Budapest', site: 'https://www.blueberrybrunch.com/menu/' },
  { name: 'Zileat Brunch & Bistro', alias: 'THE WILD CARD', location: 'Budapest', description: 'A slightly less obvious brunch option for a slower morning, coffee and a more understated atmosphere.', vibe: 'Chill & unexpected', draw: 'A quieter brunch mood', symbol: '🌿', color: '#d5dce0', map: 'https://www.google.com/maps/search/?api=1&query=Zileat+Brunch+Bistro+Budapest', site: 'https://zileat.hu/hu#menu' }
];

const $ = (id) => document.getElementById(id);
let active = 0;
const chosen = new Set();

function renderSuspect() {
  const item = suspects[active];
  $('artIndex').textContent = String(active + 1).padStart(2, '0');
  $('fileLabel').textContent = `SUSPECT NO. ${String(active + 1).padStart(2, '0')}`;
  $('venueName').textContent = item.alias;
  $('venueLocation').textContent = 'IDENTITY WITHHELD · BUDAPEST';
  $('venueDescription').textContent = item.description;
  $('venueVibe').textContent = item.vibe;
  $('venueDraw').textContent = item.draw;
  $('artCaption').textContent = 'IDENTITY CLASSIFIED';
  $('artIllustration').textContent = item.symbol;
  $('investigateLink').hidden = true;
  $('cardArt').style.background = item.color;
  $('progressLabel').textContent = `FILE ${String(active + 1).padStart(2, '0')} / ${String(suspects.length).padStart(2, '0')}`;
  $('progressFill').style.width = `${((active + 1) / suspects.length) * 100}%`;
  $('pickButton').innerHTML = `${chosen.has(active) ? 'CHOSEN' : 'I LIKE THIS ONE'} <span>${chosen.has(active) ? '✓' : '↗'}</span>`;
  $('suspectDots').innerHTML = suspects.map((_, i) => `<button aria-label="Show suspect ${i + 1}" aria-current="${i === active}" data-index="${i}"></button>`).join('');
  document.querySelectorAll('#suspectDots button').forEach((button) => button.addEventListener('click', () => { active = Number(button.dataset.index); renderSuspect(); }));
  $('suspectCard').animate([{ opacity: .7, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 240 });
}

function renderShortlist() {
  const indices = [...chosen];
  $('shortlist').innerHTML = indices.length ? indices.map((i) => `<article class="shortlist-item"><span>CONTENDER ${String(i + 1).padStart(2, '0')}</span><button aria-label="Remove contender" data-remove="${i}">×</button><h3>${suspects[i].alias}</h3><p>${suspects[i].vibe}</p></article>`).join('') : '<div class="empty-note"><span>✳</span><p>No suspects selected yet.<br><b>The investigation awaits.</b></p></div>';
  document.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => { chosen.delete(Number(button.dataset.remove)); renderShortlist(); renderSuspect(); }));
}

function revealResults() {
  const indices = [...chosen];
  const selected = indices.length ? indices : [active];
  $('closingHeading').innerHTML = 'The identities are <em>revealed.</em>';
  $('closingCopy').textContent = selected.length === 1 ? 'You have a suspect. Here is the evidence you need to make the final call.' : 'You have a shortlist. Here are the identities and links, so the final decision is yours.';
  $('finalResults').innerHTML = selected.map((i) => `<article class="final-result"><span>CASE FILE ${String(i + 1).padStart(2, '0')}</span><h3>${suspects[i].name}</h3><p>${suspects[i].description}</p><div><a href="${suspects[i].site}" target="_blank" rel="noopener">MENU ↗</a><a href="${suspects[i].map}" target="_blank" rel="noopener">GOOGLE MAPS ↗</a></div></article>`).join('');
  $('closing').hidden = false;
  $('closing').scrollIntoView({ behavior: 'smooth' });
}

$('beginButton').addEventListener('click', () => $('case').scrollIntoView({ behavior: 'smooth' }));
$('pickButton').addEventListener('click', () => { if (chosen.has(active)) chosen.delete(active); else chosen.add(active); renderShortlist(); renderSuspect(); });
$('skipButton').addEventListener('click', () => { active = (active + 1) % suspects.length; renderSuspect(); });
$('verdictButton').addEventListener('click', revealResults);
$('restartButton').addEventListener('click', () => { chosen.clear(); active = 0; renderSuspect(); renderShortlist(); $('closing').hidden = true; $('case').scrollIntoView({ behavior: 'smooth' }); });
renderSuspect();
renderShortlist();
