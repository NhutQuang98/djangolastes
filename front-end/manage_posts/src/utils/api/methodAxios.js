import { SERVER_URL, SERVER_URL_LOGIN } from '../api/AxiosConnect'

export const METHOD_GET = async (url) => {
    try {
        const res = await SERVER_URL.get(url);
        return {res};
    } catch (error) {
        return null;
    }
};

export const METHOD_POST = async (props) => {
    try {
        const { url, param } = props
        const res = await SERVER_URL.post(url, param);
        return {res}
    } catch (error) {
        return null;
    }
}

export const METHOD_DELETE = async (props) => {
    try {
        const { url, param } = props
        const res = await SERVER_URL.delete(url, param);
        return {res}
    } catch (error) {
        return null;
    }
}

export const METHOD_PUT = async (props) => {
    try {
        const { url, param } = props
        const res = await SERVER_URL.put(url, param);
        return {res}
    } catch (error) {
        return null;
    }
}

// export const METHOD_PUT = async (url) => {
//     try {
//         const res = await SERVER_URL.put(url);
//         return {res};
//     } catch (error) {
//         return null;
//     }
// };

export const METHOD_POST_NOT_HEADER = async (props) => {
    try {
        const { url, param } = props
        const res = await SERVER_URL_LOGIN.post(url, param);
        return {res}
    } catch (error) {
        return null;
    }
}