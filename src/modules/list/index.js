function getFlattendItem(item) {
  return {
    text: item.text
  };
}

export const flattenList = (list) => {
  return Object.keys(list).reduce((flattenedList, key) => {
    if (list[key].children) {
      return [...flattenedList, getFlattendItem(list[key]), ...flattenList(list[key].children)]
    }
    return [...flattenedList, {
      text: list[key].text
    }];
  }, []);
}

export const filterList = (haystack, needle) => {
  return haystack.filter((listItem) => {
    return listItem.text.toLowerCase().indexOf(needle.toLowerCase()) >= 0;
  });
}