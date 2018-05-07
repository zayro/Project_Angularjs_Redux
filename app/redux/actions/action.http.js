function testing(data){
  console.log('ingreso a action testing');
  return {
      type: 'TESTING',
      Test: data
  }
}

function addObject(data){
  console.log('ingreso a action addObject');
  return {
      type: 'HTTP_DATA_OBJECT',
      DataInfo: data
  }
}

function addArray(data){
  return {
      type: 'HTTP_DATA_ARRAY',
      DataInfo: data
  };
}

export default { testing, addObject, addArray };
