const toggleTheme = document.getElementById("toggleTheme");

const rootHtml = document.documentElement;

// FUNÇÃO PARA ALTERNAR O TEMA 
function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun-fill");
    toggleTheme.classList.toggle("bi-moon-fill");
}

toggleTheme.addEventListener("click", changeTheme);