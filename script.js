const candidates = [
  {
    id: 'eggdrop', alias: 'The Egg Situation', symbol: '\u263c', color: '#d5dfd0', art: 'THE EGG IS THE MAIN CHARACTER',
    cardClue: 'A fluffy, handheld breakfast with a Korean-inspired plot twist.',
    teaser: 'Korean street-food inspiration meets a soft Japanese milk-bread toast. This file is suspiciously egg-forward.',
    area: 'Feh\u00e9r Haj\u00f3 utca, central Pest', food: 'Fluffy milk-bread egg toast, crispy egg tots, bingsu, and coffee.',
    vibe: 'Playful, quick-to-love, and a little different from the usual brunch formula.', dish: 'A fluffy egg sando on Japanese milk bread.',
    menu: 'http://eggdropproject.hu/#ourmenu', maps: 'https://www.google.com/maps/search/?api=1&query=Eggdrop+Project+Budapest',
    signals: ['eggy', 'twist', 'korean', 'handheld', 'surprise']
  },
  {
    id: 'stika', alias: 'The Proper Brunch', symbol: '\u272f', color: '#e5d4be', art: 'A VERY SERIOUS BREAKFAST FILE',
    cardClue: 'Classic brunch comfort, with several unexpected side quests.',
    teaser: 'Eggs Benedict comes in many variations; the menu also has hearty breakfast plates and some gloriously unconventional ideas.',
    area: 'Dob utca, Jewish Quarter', food: 'Benedicts, complete breakfasts, pancakes, bagels, sandwiches, and coffee.',
    vibe: 'A proper sit-down brunch, with generous plates and a busy city feel.', dish: 'A pancake breakfast burger, or one of the many Eggs Benedicts.',
    menu: 'https://stikabudapest.com/menus/', maps: 'https://www.google.com/maps/search/?api=1&query=Stika+Budapest',
    signals: ['eggy', 'sweet', 'cozy', 'classic', 'hearty', 'bigplate', 'twist']
  },
  {
    id: 'blueberry', alias: 'The Instagram Suspect', symbol: '\u273f', color: '#dce2e9', art: 'A LITTLE BLUE IN THE EVIDENCE',
    cardClue: 'Pancakes, eggs Benedict, and a bright corner near the Basilica.',
    teaser: 'An all-day breakfast menu balances familiar brunch favorites with blueberry specials. The camera may become involved.',
    area: 'Hercegpr\u00edm\u00e1s utca, by the Basilica', food: 'Pancakes, eggs Benedict, avocado toast, sandwiches, and blueberry sweets.',
    vibe: 'Bright, cozy, central, and made for an unhurried catch-up.', dish: 'Blueberry pancakes with chocolate-coconut cream and fresh fruit.',
    menu: 'https://www.blueberrybrunch.com/menu/', maps: 'https://www.google.com/maps/search/?api=1&query=Blueberry+Brunch+Budapest',
    signals: ['eggy', 'sweet', 'cozy', 'colorful', 'classic', 'bigplate', 'slow', 'pancake']
  },
  {
    id: 'zileat', alias: 'The Wild Card', symbol: '\u274b', color: '#eadbd0', art: 'A PASSPORT-SIZED BRUNCH CLUE',
    cardClue: 'A little Bali inspiration below Buda Castle; the morning can run long.',
    teaser: 'Breakfast until mid-afternoon, brunch all day, and a menu that wanders from familiar favorites into tropical territory.',
    area: 'Tab\u00e1n, below Buda Castle', food: 'Eggs, brioche, avocado, pancakes, smoothies, and all-day brunch plates.',
    vibe: 'A relaxed little escape with room for brunch to turn into the rest of the day.', dish: 'Coconut-cream pancakes, or pistachio French toast.',
    menu: 'https://zileat.hu/hu#menu', maps: 'https://www.google.com/maps/search/?api=1&query=Zileat+Brunch+Bistro+Budapest',
    signals: ['eggy', 'sweet', 'twist', 'colorful', 'escape', 'slow', 'surprise', 'pancake']
  }
];

const questions = [
  {
    eyebrow: 'FIRST, THE IMPORTANT THINGS', title: 'What are we feeling?', hint: 'Choose the craving that is calling loudest.',
    answers: [
      { icon: '\ud83e\udd5a', title: 'Something eggy', detail: 'Eggs are the lead character.', key: 'eggy', files: ['eggdrop', 'stika', 'blueberry', 'zileat'] },
      { icon: '\ud83e\udd5e', title: 'Something sweet', detail: 'Pancakes have entered the chat.', key: 'sweet', files: ['stika', 'blueberry', 'zileat'] },
      { icon: '\u2615', title: 'Cozy coffee + brunch', detail: 'A long catch-up sounds right.', key: 'cozy', files: ['stika', 'blueberry'] },
      { icon: '\u2728', title: 'Surprise me', detail: 'I trust the investigation.', key: 'surprise', files: ['eggdrop', 'zileat'] }
    ]
  },
  {
    eyebrow: 'A QUESTION OF ATMOSPHERE', title: 'Set the brunch mood.', hint: 'Picture the table, the light, the first coffee.',
    answers: [
      { icon: '\ud83c\udf73', title: 'A classic, hearty table', detail: 'Pass the hollandaise.', key: 'classic', files: ['stika', 'blueberry'] },
      { icon: '\ud83d\udcf8', title: 'Colorful and camera-ready', detail: 'The plate gets a little entrance.', key: 'colorful', files: ['blueberry', 'zileat'] },
      { icon: '\ud83c\udf3f', title: 'A little twist, please', detail: 'The unexpected order, naturally.', key: 'twist', files: ['eggdrop', 'stika', 'zileat'] },
      { icon: '\ud83c\udf34', title: 'A tiny city escape', detail: 'Somewhere that feels like elsewhere.', key: 'escape', files: ['zileat'] }
    ]
  },
  {
    eyebrow: 'ONE LAST LEAD', title: 'Pick a plot twist.', hint: 'Which clue should we follow next?',
    answers: [
      { icon: '\ud83e\udd6a', title: 'Fluffy, handheld, eggy', detail: 'A breakfast you can pick up.', key: 'handheld', files: ['eggdrop'] },
      { icon: '\ud83c\udf72', title: 'Benedicts and big plates', detail: 'We came hungry and prepared.', key: 'bigplate', files: ['stika', 'blueberry'] },
      { icon: '\ud83e\uddc7', title: 'Pancakes with a side of berries', detail: 'A sweet little photo opportunity.', key: 'pancake', files: ['blueberry', 'zileat', 'stika'] },
      { icon: '\ud83c\udf24\ufe0f', title: 'Let brunch take its time', detail: 'No rush to call it breakfast.', key: 'slow', files: ['blueberry', 'zileat'] }
    ]
  }
];

const $ = (id) => document.getElementById(id);
let questionIndex = 0;
const answers = [null, null, null];
const revealed = new Set();
let activeCandidate = null;

function showScreen(screenId, focusId) {
  document.querySelectorAll('.screen').forEach((screen) => { screen.hidden = screen.id !== screenId; });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (focusId) window.setTimeout(() => $(focusId)?.focus({ preventScroll: true }), 80);
}

function renderQuestion() {
  const question = questions[questionIndex];
  $('questionEyebrow').textContent = question.eyebrow;
  $('questionTitle').textContent = question.title;
  $('questionHint').textContent = question.hint;
  $('questionCount').textContent = `QUESTION ${String(questionIndex + 1).padStart(2, '0')} / ${String(questions.length).padStart(2, '0')}`;
  $('progressFill').style.width = `${((questionIndex + 1) / questions.length) * 100}%`;
  $('progressWord').textContent = ['WARMING UP', 'FOLLOWING A LEAD', 'NEARLY THERE'][questionIndex];
  $('previousQuestion').disabled = questionIndex === 0;
  $('nextQuestion').innerHTML = questionIndex === questions.length - 1 ? 'OPEN THE CASE FILES <span>↗</span>' : 'NEXT CLUE <span>→</span>';
  const picked = answers[questionIndex];
  $('answerNudge').textContent = picked === null ? 'Pick one to continue' : 'Clue noted. Change it if you like.';
  $('nextQuestion').disabled = picked === null;
  $('answerGrid').innerHTML = question.answers.map((answer, index) => `
    <button class="answer-card${picked === index ? ' is-selected' : ''}" type="button" data-answer="${index}" aria-pressed="${picked === index}">
      <span class="answer-icon" aria-hidden="true">${answer.icon}</span><span class="answer-copy"><b>${answer.title}</b><small>${answer.detail}</small></span><span class="answer-check" aria-hidden="true">${picked === index ? '✓' : '↗'}</span>
    </button>`).join('');
  document.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => {
    answers[questionIndex] = Number(button.dataset.answer);
    renderQuestion();
    document.querySelector(`[data-answer="${button.dataset.answer}"]`)?.focus({ preventScroll: true });
  }));
}

function answerMatches(candidate) {
  return answers.flatMap((answerIndex, index) => {
    if (answerIndex === null) return [];
    const answer = questions[index].answers[answerIndex];
    return answer.files.includes(candidate.id) ? [{ title: answer.title, question: index + 1 }] : [];
  });
}

function renderCandidates() {
  $('answerReceipt').innerHTML = answers.map((answerIndex, index) => {
    const answer = questions[index].answers[answerIndex];
    return `<span><small>CLUE ${String(index + 1).padStart(2, '0')}</small>${answer.icon} ${answer.title}</span>`;
  }).join('');
  $('candidateGrid').innerHTML = candidates.map((candidate, index) => {
    const matches = answerMatches(candidate);
    const echoedBy = matches.map((match) => `<span class="echo-chip">Your clue: ${match.title}</span>`).join('');
    return `<article class="candidate-card${matches.length ? ' has-echo' : ''}" style="--card-tint:${candidate.color}">
      <div class="candidate-art"><span class="candidate-index">FILE ${String(index + 1).padStart(2, '0')}</span><span class="candidate-symbol" aria-hidden="true">${candidate.symbol}</span><span class="candidate-caption">IDENTITY SEALED</span></div>
      <div class="candidate-copy"><span class="candidate-label">${matches.length ? 'A CLUE CAUGHT YOUR EYE' : 'AN UNREAD FILE'}</span><h3>${candidate.alias}</h3><p>${candidate.cardClue}</p>${echoedBy ? `<div class="echo-list">${echoedBy}</div>` : ''}<button class="text-button open-file" type="button" data-candidate="${candidate.id}">OPEN THIS FILE <span>→</span></button></div>
    </article>`;
  }).join('');
  document.querySelectorAll('[data-candidate]').forEach((button) => button.addEventListener('click', () => openCandidate(button.dataset.candidate)));
}

function renderFile(candidate) {
  const index = candidates.findIndex((entry) => entry.id === candidate.id) + 1;
  $('fileNumber').textContent = `CASE NOTE ${String(index).padStart(2, '0')}`;
  $('fileSymbol').textContent = candidate.symbol;
  $('fileCaption').textContent = candidate.art;
  $('fileArt').style.background = candidate.color;
  $('fileTitle').textContent = candidate.alias;
  $('fileTeaser').textContent = candidate.teaser;
  $('fileClues').innerHTML = [
    ['THE FOOD', candidate.food], ['THE VIBE', candidate.vibe], ['A NOTABLE DISH', candidate.dish], ['APPROX. LOCATION', candidate.area]
  ].map(([label, detail], clueIndex) => `<div><span class="clue-icon" aria-hidden="true">${['✳', '◌', '⌁', '⌖'][clueIndex]}</span><span><b>${label}</b><small>${detail}</small></span></div>`).join('');
  $('menuLink').href = candidate.menu;
  $('mapsLink').href = candidate.maps;
  const hasRevealed = revealed.has(candidate.id);
  $('identityBox').hidden = hasRevealed;
  $('revealedBox').hidden = !hasRevealed;
  $('revealedName').textContent = hasRevealed ? candidate.name : '';
  $('fileCard').style.setProperty('--file-tint', candidate.color);
  $('fileCard').animate([{ opacity: .65, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 260 });
  const hiddenCount = candidates.length - revealed.size;
  document.querySelector('.file-bottom span:first-child').textContent = `${revealed.size} FILE${revealed.size === 1 ? '' : 'S'} OPENED. ${hiddenCount} STILL SEALED.`;
}

function openCandidate(candidateId) {
  activeCandidate = candidates.find((candidate) => candidate.id === candidateId);
  if (!activeCandidate) return;
  renderFile(activeCandidate);
  showScreen('candidateFile', 'backToCandidates');
}

$('startButton').addEventListener('click', () => { questionIndex = 0; renderQuestion(); showScreen('quiz', 'questionTitle'); });
$('quizExit').addEventListener('click', () => showScreen('welcome', 'startButton'));
$('previousQuestion').addEventListener('click', () => { if (questionIndex > 0) { questionIndex -= 1; renderQuestion(); } });
$('nextQuestion').addEventListener('click', () => {
  if (answers[questionIndex] === null) return;
  if (questionIndex < questions.length - 1) { questionIndex += 1; renderQuestion(); return; }
  renderCandidates();
  showScreen('candidates', 'candidatesTitle');
});
$('restartQuiz').addEventListener('click', () => { answers.fill(null); questionIndex = 0; renderQuestion(); showScreen('quiz', 'questionTitle'); });
$('backToCandidates').addEventListener('click', () => { renderCandidates(); showScreen('candidates', 'candidatesTitle'); });
$('backAfterReveal').addEventListener('click', () => { renderCandidates(); showScreen('candidates', 'candidatesTitle'); });
$('revealButton').addEventListener('click', () => {
  if (!activeCandidate) return;
  revealed.add(activeCandidate.id);
  $('identityBox').hidden = true;
  $('revealedBox').hidden = false;
  $('revealedName').textContent = activeCandidate.name;
  const hiddenCount = candidates.length - revealed.size;
  document.querySelector('.file-bottom span:first-child').textContent = `${revealed.size} FILE${revealed.size === 1 ? '' : 'S'} OPENED. ${hiddenCount} STILL SEALED.`;
  $('revealedName').focus?.({ preventScroll: true });
});
$('homeLink').addEventListener('click', (event) => { event.preventDefault(); showScreen('welcome', 'startButton'); });

renderQuestion();
