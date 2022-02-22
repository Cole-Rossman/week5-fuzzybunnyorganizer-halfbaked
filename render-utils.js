export function renderFamily(family) {
    const div = document.createElement('div');
    div.classList.add('family');

    const h3 = document.createElement('h3');
    h3.textContent = family.name;

    div.append(h3);
    return div;
}

export function renderBunny(bunny) {
    const div = document.createElement('div');
    div.classList.add('bunnies');

    const bunnyDiv = document.createElement('div');
    bunnyDiv.classList.add('bunny');
    bunnyDiv.textContent = bunny.name;
    
    div.append(bunnyDiv);
    return div;
}