export const removeWhiteSpaces = (data: string) => {
  return data.replace(/[\r\n]/gm, "");
};

export const removeNewLines = (data: string) => {
  return data.replace(/\s/g, "");
};
