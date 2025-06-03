const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiConfig = {
  baseUrl: `${BASE_URL}/api/auth/login`,
  profileUrl: `${BASE_URL}/api/user/profile`,
  favouritesUrl: `${BASE_URL}/api/favourites`,
  removeFavouritesUrl: `${BASE_URL}/api/user/removefavourites`,
  userDetailsUrl: `${BASE_URL}/api/user/details/`,
  registerUrl: `${BASE_URL}/api/auth/signup`,
  uploadProfileImgUrl: `${BASE_URL}/api/user/profile/img`,
  baseUserUrl: `${BASE_URL}/api/user`,
  botonDisableUserUrl: `${BASE_URL}/api/user`,
  botonUpdateUserUrl: `${BASE_URL}/api/user/update`,
  refreshTokenUrl: `${BASE_URL}/api/auth/refresh_token`,
};
