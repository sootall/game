'use strict';

const grid = document.querySelector('#cards-grid');
const searchInput = document.querySelector('#card-search');
const clearSearch = document.querySelector('#clear-search');
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');
const filterButtons = [...document.querySelectorAll('.filter-chip')];
const modal = document.querySelector('#card-modal');
const modalStage = document.querySelector('#modal-stage');
const modalType = document.querySelector('#modal-type');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');
const modalTip = document.querySelector('#modal-tip');

let activeFilter = 'all';
let dragState = null;

function cardMatches(card) {
  const query = searchInput.value.trim().toLocaleLowerCase('zh-Hant');
  const type = card.dataset.type;
  const tags = card.dataset.tags || '';
  const searchable = `${card.innerText} ${tags}`.toLocaleLowerCase('zh-Hant');
  const filterMatch = activeFilter === 'all' || type === activeFilter || tags.includes(activeFilter);
  return filterMatch && (!query || searchable.includes(query));
}

function updateResults() {
  const cards = [...grid.querySelectorAll('.deck-card')];
  let visible = 0;
  cards.forEach(card => {
    const show = cardMatches(card);
    card.hidden = !show;
    if (show) visible += 1;
  });
  resultCount.textContent = activeFilter === 'all' && !searchInput.value.trim()
    ? '顯示全部 24 張卡牌'
    : `找到 ${visible} 張卡牌`;
  emptyState.hidden = visible !== 0;
  clearSearch.hidden = !searchInput.value;
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('is-active', item === button));
    updateResults();
  });
});
searchInput.addEventListener('input', updateResults);
clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  updateResults();
});

function openModal(card) {
  const face = card.querySelector('.card-face');
  const info = card.querySelector('.card-info');
  modalStage.replaceChildren(face.cloneNode(true));
  const modalFace = modalStage.querySelector('.card-face');
  modalType.textContent = card.dataset.type === 'support' ? '支持牌・Support' : '症狀牌・Situation';
  modalTitle.textContent = face.querySelector('strong').textContent;
  modalDescription.textContent = info.querySelector('p').textContent;
  modalTip.textContent = info.querySelector('b').textContent.replace(/^理解提示：/, '');
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
  modalFace.setAttribute('aria-hidden', 'true');
  modalStage.style.setProperty('--shine-x', '0%');
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  modalStage.replaceChildren();
  dragState = null;
}

grid.addEventListener('click', event => {
  const face = event.target.closest('.card-face');
  if (face) openModal(face.closest('.deck-card'));
});
modal.addEventListener('click', event => {
  if (event.target.matches('[data-close-modal]')) closeModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});

function moveCard(event) {
  if (!dragState) return;
  const dx = event.clientX - dragState.startX;
  const dy = event.clientY - dragState.startY;
  const ry = Math.max(-22, Math.min(22, dx * 0.16));
  const rx = Math.max(-18, Math.min(18, -dy * 0.12));
  modalStage.style.setProperty('--ry', `${ry}deg`);
  modalStage.style.setProperty('--rx', `${rx}deg`);
  modalStage.style.setProperty('--shine-x', `${dx * 0.55}px`);
}

modalStage.addEventListener('pointerdown', event => {
  if (!modalStage.querySelector('.card-face')) return;
  dragState = {startX: event.clientX, startY: event.clientY};
  modalStage.classList.add('is-dragging');
  modalStage.setPointerCapture(event.pointerId);
});
modalStage.addEventListener('pointermove', moveCard);
modalStage.addEventListener('pointerup', event => {
  if (!dragState) return;
  dragState = null;
  modalStage.classList.remove('is-dragging');
  modalStage.releasePointerCapture(event.pointerId);
  modalStage.style.setProperty('--rx', '0deg');
  modalStage.style.setProperty('--ry', '0deg');
  modalStage.style.setProperty('--shine-x', '0%');
});
modalStage.addEventListener('pointercancel', () => {
  dragState = null;
  modalStage.classList.remove('is-dragging');
  modalStage.style.setProperty('--rx', '0deg');
  modalStage.style.setProperty('--ry', '0deg');
  modalStage.style.setProperty('--shine-x', '0%');
});

updateResults();
