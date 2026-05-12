function parseCount(value) {
  const result = Number.parseFloat(value);

  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  }

  return result;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}