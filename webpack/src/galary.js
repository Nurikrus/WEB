const imagesReq = require.context("../media/images", true);
const videosReq = require.context("../media/video", true);
const audiosReq = require.context("../media/audio", true);
const images = imagesReq.keys();
const videos = videosReq.keys();
const audios = audiosReq.keys();

const imgObj = [];
const videoObj = [];
const audioObj = [];

images.map((image, i) => {
    const regExt = /\.jpe?g$/i;
    if (image.includes('.jpg') || image.includes('.jpeg')) {
        let str = image.replace(regExt, '.webp').slice(1);
        imgObj[i] = {
            src: `${str}`,
            type: 'image',
            title: `Картинка ${i + 1}`
        }
    } else {
        let str = image.slice(1);
        imgObj[i] = {
            src: `${str}`,
            type: 'image',
            title: `Картинка ${i + 1}`
        }
    }
})
videos.map((video, i) => {
    const str = video.slice(1);
    videoObj[i] = {
        src: `${str}`,
        type: 'video',
        title: `Видео ${i + 1}`
    }

})
audios.map((audio, i) => {
    const str = audio.slice(1);
    audioObj[i] = {
        src: `${str}`,
        type: 'audio',
        title: `Аудио ${i + 1}`
    }
})

const items = [...imgObj, ...videoObj, ...audioObj];

export default items;