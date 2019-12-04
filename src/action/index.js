import {username, password} from "./secret";

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';


//Fetch data

const  receiveMemes = (json) => {
    const {memes} = json.data;
    return {
        type: RECEIVE_MEMES,
        memes
    }
}

const fetchMemesJson = () => {
    return fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .catch(e=>console.error(e));
}

export const fetchMemes = () => {
    return (dispatch) => {
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))
            .catch(e=>console.error(e));
    }
}



//Post data

export const newMeme = (meme) => {
    return {
        type: NEW_MEME,
        meme
    }
}

const postMemeJson = (params) => {
    params['username'] = username;
    params['password'] = password;
    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');
    // console.log('body params', bodyParams);

    return fetch('https://api.imgflip.com/caption_image', {
        method: 'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    }).then(response => response.json());

}


export const createMeme = (new_meme_object) => {
    return (dispatch) => {
        return postMemeJson(new_meme_object)
            .then(new_meme => dispatch(newMeme(new_meme)))
    }
}














