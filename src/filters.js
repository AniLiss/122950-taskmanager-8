import {filterContainer, cardsContainer, card, createCards} from './constants';

const createFilter = (id, label, count, isDisabled = false, isChecked = false) => {
  return `<input
          type="radio"
          id=${id}
          class="filter__input visually-hidden"
          name="filter"
          ${isChecked ? `checked` : ``}
          ${isDisabled ? `disabled` : ``}
        />
        <label for="filter__all" class="filter__label">${label}<span class="filter__all-count"> ${count}</span></label>`;
};

const allFilter = createFilter(`filter__all`, `ALL`, `15`, false, true);
const overdueFilter = createFilter(`filter__overdue`, `OVERDUE`, `0`, true);
const todayFilter = createFilter(`filter__today`, `TODAY`, `0`, true);
const favoritesFilter = createFilter(`filter__favorites`, `FAVORITES`, `7`);
const repeatingFilter = createFilter(`filter__repeating`, `Repeating`, `2`);
const tagsFilter = createFilter(`filter__input visually-hidden`, `Tags`, `6`);
const archiveFilter = createFilter(`filter__archive`, `ARCHIVE`, `115`);

const filters = [allFilter, overdueFilter, todayFilter, favoritesFilter, repeatingFilter, tagsFilter, archiveFilter];

const appendFilters = (filtersArray) => {
  return filtersArray.map((filter) => {
    filterContainer.innerHTML += filter;
    return filterContainer;
  });
};

appendFilters(filters);

const getRandomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

const switchFilters = () => {
  cardsContainer.innerHTML = ``;
  createCards(getRandomNumber(3, 10), card, cardsContainer);
};

filterContainer.addEventListener(`click`, (e) => {
  const filterLabel = e.target;
  if (filterLabel.classList.contains(`filter__label`)) {
    switchFilters();
  }
});
