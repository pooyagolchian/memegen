export const RECEIVE_MEMES = 'RECEIVE_MEMES';

function receiveMeme(meme) {
    const {memes} = json.data;
    return {
        type: RECEIVE_MEMES,
        memes
    }  
}


function fetchMemeJson() {
    return fetch('https//api.imgflip.com/get_meme')
    .then(response => response.json);
}


export function fetchMemes() {
    return function(dispatch) {
        return fetchMemeJson()
        .then(json => dispatch(receiveMeme(json)))
    }
}