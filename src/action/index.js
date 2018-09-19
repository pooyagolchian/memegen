export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const  NEW_MEME = 'NEW_MEME';

function receiveMemes(json) {
    const {memes} = json.data;
    return {
        type: RECEIVE_MEMES,
        memes
    }
}

function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
}

export function fetchMemes() {
    return function (dispatch) {
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))
    }
}

export function newMeme(meme) {
    return {
        type: NEW_MEME,
        meme
    }
}


