// новый массив объектов из textarea value
const createNewData = str => {
  const newData = [];

  // получение 'name,value,name,value...'
  const normalizeStr = string => {
    const enterReg = new RegExp("\\r?\\n", "g");
    const nameReg = new RegExp("name:", "gi");
    const valueReg = new RegExp("value:", "gi");
    const arrForNormalize = [' ', '[', ']', '"', '{', enterReg, nameReg, valueReg];

    arrForNormalize.forEach(item => {
      string = string.replaceAll(item, '')
    });

    string = string.replaceAll(/}\,?/gi, ',');

    return string;
  };

  const arr = normalizeStr(str).split(',');

  for (let i = 0; i < arr.length - 1; i += 2) {
    newData.push({name: arr[i], value: arr[i + 1]});
  }

  return newData;
};
export default createNewData;