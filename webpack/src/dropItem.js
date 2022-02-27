export function drawItem(item, i) {
    const itemElement = document.createElement('div');
    itemElement.classList = 'galary-item';
    let r = parseInt(i / 3);
    if (i % 3 == 0) {
        let j = i % 3
        itemElement.style.gridColumn = `${j + 1}/${j + 2}`;
        itemElement.style.gridRow = `${r + 1}/${r + 2}`;
    } else {
        let j = i % 3
        itemElement.style.gridColumn = `${j + 1}/${j + 2}`;
        itemElement.style.gridRow = `${r + 1}/${r + 2}`;
    }
    const typeElement = document.createElement('div');
    typeElement.classList = 'galary-item_type';
    if (item.type === 'image') {
        const imgElement = document.createElement('img');
        imgElement.classList = 'galary-img';
        imgElement.src = item.src;
        typeElement.appendChild(imgElement)
    } else if (item.type === 'video') {
        const videoElement = document.createElement('video');
        videoElement.classList = 'galary-video';
        videoElement.src = item.src;
        videoElement.controls = true;
        typeElement.appendChild(videoElement)
    } else {
        const audioElement = document.createElement('audio');
        audioElement.classList = 'galary-audio';
        audioElement.src = item.src;
        audioElement.controls = true;
        typeElement.appendChild(audioElement)
    }
    const titleElement = document.createElement('h4');
    titleElement.classList = 'galary-title';
    titleElement.textContent = item.title;
    itemElement.appendChild(typeElement);
    itemElement.appendChild(titleElement);
    return itemElement;
}