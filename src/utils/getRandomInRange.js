export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max = Math.floor(max) - Math.ceil(min))) + Math.ceil(min);

