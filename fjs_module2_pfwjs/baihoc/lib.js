function getFormData(elementList) {
  const data = {};

  for (let i = 0; i < elementList.length; i++) {
    if (elementList[i].tagName === "BUTTON") {
      continue;
    }

    data[elementList[i].name] = elementList[i].value;
  }

  return data;
}
