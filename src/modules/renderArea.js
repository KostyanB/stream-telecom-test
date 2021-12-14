import { localStore } from './useStore';
import validForm from "./validForm";

const renderArea = () => {
  const dataField = document.getElementById('data-field');

  if (localStore.getStore().length > 0) {
    const str = localStore.getStore().reduce((acc, item) => {
      acc += `
      {"name": "${item.name}", "value": "${item.value}"},
      `;
      return acc;
    }, '');

    const lastCommaIndex = str.lastIndexOf('}') + 1;
    const newStr = str.slice(0, lastCommaIndex) + str.slice(lastCommaIndex + 1, -1);

    dataField.value = `
    [
      ${newStr}
    ]
    `;
  }

  validForm();
};
export default renderArea;