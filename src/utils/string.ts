export const capitalize = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};

export const normalizeString = (str: string): string => {
  return (str[0].toUpperCase() + str.slice(1)).replaceAll('-', ' ');
};
