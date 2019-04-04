export const cardsContainer = document.querySelector(`.board__tasks`);
export const filterContainer = document.querySelector(`.main__filter`);

export const appendDOMElement = (arrayOfItems, container) => {
  return arrayOfItems.map((item) => {
    container.innerHTML += item;
    return container;
  });
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const colorMap = {
  blue: `card--blue`,
  black: `card--black`,
  yellow: `card--yellow`,
  green: `card--green`,
  pink: `card--pink`,
};

// export const createCards = (amountOfCards, container) => {
//   return Array(amountOfCards).fill().map(() => {
//     container.innerHTML += makeCard(getTask());
//     return container;
//   });
// };

// export const createCards = (amountOfCards, cardNode, container) => {
//   return Array(amountOfCards).fill().map(() => {
//     container.innerHTML += cardNode;
//     return container;
//   });
// };
