import { API_BASE_URL } from '~/constants';

// URLs ------------------------------------------------------------------------

export const BASE_URL = API_BASE_URL;
//process.env.NODE_ENV === 'production' ? API_BASE_URL : '/';

export const URL = (subUrl) => `${BASE_URL}/${subUrl}`;

//TOKEN

export const LOCAL_STORAGE_TOKENS_KEY = 'auth-token';
