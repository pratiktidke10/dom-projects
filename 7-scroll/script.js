
window.addEventListener("scroll" , ()=>{
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    document.querySelector(".progress").style.width = scrolled + "%";
});