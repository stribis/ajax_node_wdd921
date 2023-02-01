const setTheme = (theme) => {
  document.documentElement.className = theme;
  localStorage.setItem('dark-mode', theme)
}
localStorage.getItem('dark-mode') === null ? 
localStorage.setItem('dark-mode', document.documentElement.className) : 
document.documentElement.className = localStorage.getItem('dark-mode');