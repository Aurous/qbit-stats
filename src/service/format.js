const objectToMap = (object) => {
  const results = [];
  for (const id in object) {
    results.push({ ...object[id], id });
  }
  return results;
}

export { objectToMap };