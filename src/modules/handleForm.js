import { globalStore, localStore } from './useStore';
import renderArea from "./renderArea";
import createNewData from "./createNewData";

const handleForm = () => {
  const form = document.forms['data-form'];
  const area = form[0];
  const showBtn = document.getElementById('show-btn');

  const showData = () => {
    localStore.setStore(globalStore.getStore());
    renderArea();
  };

  const resetForm = () => {
    form.reset();
    localStore.clearStore();
    renderArea();
  }

  const sendForm = (e) => {
    e.preventDefault();
    const data = createNewData(area.value);

    if (localStore.getStore().length === 0) {
      globalStore.setStore([...globalStore.getStore(), ...data])
    } else {
      globalStore.setStore(data);
    }

    resetForm();
  };

  form.addEventListener('submit', sendForm);
  showBtn.addEventListener('click', showData);
};
export default handleForm;