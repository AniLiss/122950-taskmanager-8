// const tags = new Set([
//   `workout`,
//   `skating`,
//   `reading`
// ]);

import moment from 'moment';


const colors = [`black`, `yellow`, `blue`, `green`, `pink`];
const getOneItemFromArray = (items) => items[Math.floor(Math.random() * items.length)];
// const hashTagsMarkdown = (items) => [...items].map((item) => `<li>${item}</li>`).join(``);

export const task = {
  title: [
    `learn theory`,
    `do hw`,
    `pass 100% course`,
  ][Math.floor(Math.random() * 3)],
  // dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60,
  dueDate: moment().format(`D MMMM HH:mm`),
  // tags: hashTagsMarkdown(tags),
  tags: new Set([
    `cinema`,
    `entertainment`,
    `myself`,
    `cinema`,
  ]),
  picture: `http://picsum.photos/100/100?r=${Math.random()}`,
  color: getOneItemFromArray(colors),
  repeatingDays: {
    'mo': false,
    'tu': false,
    'we': false,
    'th': false,
    'fr': false,
    'sa': false,
    'su': false,
  }
};
