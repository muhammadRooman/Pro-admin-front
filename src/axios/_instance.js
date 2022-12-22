import axios from 'axios';
import debug from 'debug';

import {store} from '../store';
// import logout from '../utils/auth/logout';

// Create separate debug function for separate purposes of debugging
const debugHttpRequestError = debug('digno:error:http:request');
const debugHttpResponse = debug('digno:http:response');
const debugHttpResponseError = debug('digno:error:http:response');

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
});

// Add a request interceptor on this `instance` of `axios`
function insertString(origString,stringToAdd,indexPosition) {
    // let origString = "GeeksGeeks";
    // let stringToAdd = "For";
    // let indexPosition = 5;

    var newString = origString.slice(0, indexPosition)
            + stringToAdd
            + origString.slice(indexPosition);
    return newString;
}
instance.interceptors.request.use(
    function (config) {
        // Do something before the request is sent

        // Get access token from Redux store and add it to request headers
        // const accessToken = appState.auth.accessToken || null;
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        var indexes=[3,5,6,9,11,14,18,26,30,55,58]
        // console.log("charactersLength",charactersLength,"charactersLength")
        for ( var i = 0; i < charactersLength; i++ ) {
            result += characters.charAt(Math. floor(Math. random() *charactersLength));
        }
        var newToken=result;
        for(let i=0; i < indexes.length; i++){
            if(indexes[i]%2==0){
                newToken=insertString(newToken,"a",indexes[i])
            }else{
                newToken=insertString(newToken,"s",indexes[i])
            }
        }
        // console.log("newToken=========",newToken)

        const accessToken  = store.getState().authSlice.accessToken;

        if (accessToken !== '') {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
            config.headers['x-access-token'] = `${accessToken}`;
            config.headers['site-auth-token'] = newToken;
        }

        // Return the modified request config object for proceeding
        return config;
    },
    function (error) {
        if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            debugHttpRequestError('%o', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            debugHttpRequestError('Error %s', error.message);
        }

        // log a detailed information about the HTTP error
        debugHttpRequestError(error.toJSON());

        // Return the error object for next Promise chain
        return Promise.reject(error);
    }
);

// Add a response interceptor on this `instance` of `axios`
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger

        // Log the HTTP response on console
        debugHttpResponse(`${response.config.method} ${response.config.url} %o`, response.data);

        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger

        if (axios.isCancel(error)) {
            debugHttpResponseError(error.message);
        } else {
            if (error.response) {
                // Log the HTTP error info
                debugHttpResponseError(`${error.config.method} ${error.config.url} %o`, error.response.data);

                // Clear the Redux store if response code is 401 (Unauthenticated)
                if (error.response.status === 401) {
                    // logout();
                }
            }

            // log a detailed information about the HTTP error
            debugHttpResponseError(error.toJSON());
        }

        // Return the error object for next Promise chain
        return Promise.reject(error);
    }
);

export default instance;
