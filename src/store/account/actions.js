import router from '../../router';
import axios from 'axios';

export function login({ commit }) {
  const url = 'https://randomuser.me/api/';

  axios.get(url)
    .then((response) => {
      const result = response.data.results[0];

      const userData = {
        displayName: result.name.first,
        email: result.email,
        photoURL: result.picture.thumbnail,
        uid: result.login.uuid,
      }

      commit('setUserData', userData);
      router.push('/');
    })
    .catch((error) => {
      console.error(error);
    });
}
