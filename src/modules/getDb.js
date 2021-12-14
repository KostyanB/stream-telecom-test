import { globalStore } from './useStore';
import handleForm from './handleForm';
import renderArea from "./renderArea";

const getDb = async () => {

  try {
    const response = await fetch ('../db/db.json');
    if (!response.ok) throw new Error('Server error');
    const db = await response.json();
    globalStore.setStore(db);
    renderArea();
    handleForm();
  } catch (err) {
    return (err.message);
  }
};
export default getDb;