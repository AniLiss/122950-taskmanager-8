const tags = new Set([
  `workout`,
  `skating`,
  `reading`
]);

const colors = [`black`, `yellow`, `blue`, `green`, `pink`];
const getOneItemFromArray = (items) => items[Math.floor(Math.random() * items.length)];
const hashTagsMarkdown = (items) => [...items].map((item) => `<li>${item}</li>`).join(`, `);

export const getTask = () => ({
  title: [
    `learn theory`,
    `do hw`,
    `pass 100% course`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60,
  tags: hashTagsMarkdown(tags),
  picture: `http://picsum.photos/100/100?r=${Math.random()}`,
  color: getOneItemFromArray(colors),
  repeatingDays: {
    'mo': true,
    'tu': false,
    'we': true,
    'th': false,
    'fr': false,
    'sa': true,
    'su': false,
    'checked': false,
  },
  isFavorite: false,
  isDone: false,
});

