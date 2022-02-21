export function renderFamily(family) {
    const div = document.createElement('div');
    div.classList.add('family');

    const p = document.createElement('p');
    p.classList.add('family-name');
    p.textContent = family.name;

    div.append(p);
    return div;
}

export function renderBunny(bunny) {
    const p = document.createElement('p');
    p.classList.add('bunny-name');
    p.textContent = bunny.name;
    
    return p;
}