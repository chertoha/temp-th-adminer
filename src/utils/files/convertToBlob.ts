const convertToBlob = async (url: string) =>
  fetch(url).then(response => response.blob());

export default convertToBlob;
