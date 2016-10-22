function getFlattendItem(element) {
  return {
    name: element.name
  };
}

export const flattenList = (list) => {
  return list.reduce((flattenedList, element) => {
    if (element.children) {
      return [...flattenedList, getFlattendItem(element), ...flattenList(element.children)]
    }
    return [...flattenedList, {
      name: element.name
    }];
  }, []);
}

export const filterList = (haystack, needle) => {
  return haystack.filter((listItem) => {
    return listItem.name.toLowerCase().indexOf(needle.toLowerCase()) >= 0;
  });
}