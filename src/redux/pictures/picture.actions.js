import {pictureTypes} from './picture.types';

export const fetchPics = async (dispatch) => {
  const pics = await fetch(
    'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
  ).then((response) => response.json());
  // console.log(pics.map(item=> item.description || item.alt_description));
  const serialized = pics.map((item) => {
    return {
      description:
        item.description || item.alt_description || 'no description avalaible',
      name: item.user.name || item.user.username,
      thumbLink: item.urls.small,
      rawLink: item.urls.full,
      id: item.id,
    };
  });
  dispatch({
    type: pictureTypes.SET_PICTURES,
    payload: serialized,
  });
};
