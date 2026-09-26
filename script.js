// Venue summaries and Google Maps search links for the four Budapest picks.
const suspects = [
  { name: 'Eggdrop Project', location: 'Feh\u00e9r Haj\u00f3 utca 5 \u00b7 Budapest', description: 'Korean-inspired egg sandwiches on fluffy milk bread, with crispy egg tots and bingsu on the menu.', vibe: 'Korean street-food twist', draw: 'Fluffy egg sandos & brioche', caption: 'THE EGG SITUATION', symbol: '\u263c', color: '#d5dfd0', map: 'https://www.google.com/maps/search/?api=1&query=Eggdrop+Project+Feh%C3%A9r+Haj%C3%B3+utca+5+Budapest' },
  { name: 'Cirkusz', location: 'Dob utca 25 \u00b7 Budapest', description: 'An established all-day brunch spot for classic breakfast plates, distinctive Benedicts, and its own Bagira specialty coffee.', vibe: 'Proper Budapest brunch', draw: 'Benedicts & Bagira coffee', caption: 'THE PROPER BRUNCH', symbol: '\u272f', color: '#e5d4be', map: 'https://www.google.com/maps/search/?api=1&query=Cirkusz+Budapest+Dob+utca+25' },
  { name: 'Pink Pistachio Brunch', location: 'Hercegpr\u00edm\u00e1s utca 6 \u00b7 Budapest', description: 'A pistachio-themed brunch near the Basilica, with signature pistachio pancakes, French toast, and matcha.', vibe: 'Colorful & camera-ready', draw: 'Pistachio pancakes & matcha', caption: 'THE INSTAGRAM SUSPECT', symbol: '\u273f', color: '#ead8dd', map: 'https://www.google.com/maps/search/?api=1&query=Pink+Pistachio+Brunch+Hercegpr%C3%ADm%C3%A1s+utca+6+Budapest' },
  { name: 'Goli', location: 'Arany J\u00e1nos utca 32 \u00b7 Budapest', description: 'A fire-driven, farm-to-table wildcard that turns weekend brunch into a colorful, high-energy get-together.', vibe: 'Bold, playful & different', draw: 'Fire-cooked weekend party brunch', caption: 'THE WILDCARD', symbol: '\u274b', color: '#d5dce0', map: 'https://www.google.com/maps/search/?api=1&query=Goli+Budapest+Arany+J%C3%A1nos+utca+32' }
];

const $ = (id) => document.getElementById(id);
let active = 0;
const chosen = new Set();

function renderSuspect() {
  const item = suspects[active];
  $('artIndex').textContent = String(active + 1).padStart(2, '0');
  $('fileLabel').textContent = `SUSPECT NO. ${String(active + 1).padStart(2, '0')}`;
  $('venueName').textContent = item.name;
  $('venueLocation').textContent = item.location;
  $('venueDescription').textContent = item.description;
  $('venueVibe').textContent = item.vibe;
  $('venueDraw').textContent = item.draw;
  $('artCaption').textContent = item.caption;
  $('artIllustration').textContent = item.symbol;
  $('investigateLink').href = item.map;
  $('investigateLink').setAttribute('aria-label', `Open ${item.name} in Google Maps`);
  $('cardArt').style.background = item.color;
  $('progressLabel').textContent = `FILE ${String(active + 1).padStart(2, '0')} / ${String(suspects.length).padStart(2, '0')}`;
  $('progressFill').style.width = `${((active + 1) / suspects.length) * 100}%`;
  $('pickButton').innerHTML = `${chosen.has(active) ? 'REMOVE FROM SHORTLIST' : 'ADD TO SHORTLIST'} <span>${chosen.has(active) ? '\u2199' : '\u2197'}</span>`;
  $('suspectDots').innerHTML = suspects.map((_, i) => `<button aria-label="Show suspect ${i + 1}" aria-current="${i === active}" data-index="${i}"></button>`).join('');
  document.querySelectorAll('#suspectDots button').forEach((button) => button.addEventListener('click', () => { active = Number(button.dataset.index); renderSuspect(); }));
  $('suspectCard').animate([{ opacity: .7, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 240 });
}

function renderShortlist() {
  const indices = [...chosen];
  $('shortlist').innerHTML = indices.length ? indices.map((i) => `<article class="shortlist-item"><span>CONTENDER ${String(i + 1).padStart(2, '0')}</span><button aria-label="Remove ${suspects[i].name}" data-remove="${i}">\u00d7</button><h3>${suspects[i].name}</h3><p>${suspects[i].vibe}</p><a href="${suspects[i].map}" target="_blank" rel="noopener">OPEN IN MAPS \u2197</a></article>`).join('') : '<div class="empty-note"><span>\u2733</span><p>No suspects selected yet.<br><b>The investigation awaits.</b></p></div>';
  document.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => { chosen.delete(Number(button.dataset.remove)); renderShortlist(); renderSuspect(); }));
}

$('beginButton').addEventListener('click', () => $('case').scrollIntoView({ behavior: 'smooth' }));
$('pickButton').addEventListener('click', () => { chosen.has(active) ? chosen.delete(active) : chosen.add(active); renderShortlist(); renderSuspect(); });
$('skipButton').addEventListener('click', () => { active = (active + 1) % suspects.length; renderSuspect(); });
$('verdictButton').addEventListener('click', () => {
  if (!chosen.size) { $('case').scrollIntoView({ behavior: 'smooth' }); $('pickButton').focus({ preventScroll: true }); $('pickButton').animate([{ transform: 'scale(1)' }, { transform: 'scale(1.04)' }, { transform: 'scale(1)' }], { duration: 350 }); return; }
  const names = [...chosen].map((i) => suspects[i].name);
  $('closingHeading').innerHTML = names.length === 1 ? `${names[0]} <em>it is.</em>` : `The shortlist is <em>in.</em>`;
  $('shareButton').href = `mailto:?subject=${encodeURIComponent('The brunch verdict is in!')}&body=${encodeURIComponent(`My brunch shortlist: ${names.join(', ')}. I\u2019d love to go together!`)}`;
  $('closing').hidden = false;
  $('closing').scrollIntoView({ behavior: 'smooth' });
});
$('restartButton').addEventListener('click', () => { chosen.clear(); active = 0; renderSuspect(); renderShortlist(); $('closing').hidden = true; $('case').scrollIntoView({ behavior: 'smooth' }); });
renderSuspect();
renderShortlist();
