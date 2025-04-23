const getCSSVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  
export default getCSSVar;
