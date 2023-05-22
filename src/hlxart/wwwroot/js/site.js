function setProgress(progressSelector, percent) {
    let element = document.querySelector(`${progressSelector} > .progress-bar`);
    element.setAttribute("style", `width: ${percent}%`);
    element.setAttribute("aria-valuenow", `${percent}`);
    element.textContent = `${percent}%`;
}