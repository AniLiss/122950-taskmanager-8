import {Task} from './task';
import {task} from './data';
import {TaskEdit} from './task-edit';
import {cardsContainer} from './constants';

const taskComponent = new Task(task);
const editTaskComponent = new TaskEdit(task);

cardsContainer.appendChild(taskComponent.render());

taskComponent.onEdit = () => {
  editTaskComponent.render();
  cardsContainer.replaceChild(editTaskComponent.element, taskComponent.element);
  taskComponent.unrender();
};

editTaskComponent.onSubmit = () => {
  taskComponent.render();
  cardsContainer.replaceChild(taskComponent.element, editTaskComponent.element);
  editTaskComponent.unrender();
};
