import SERVER_URL from '../api/AxiosConnect'

export const METHOD_GET = async (url) => {
    try {
        const res = await SERVER_URL.get(url);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const METHOD_POST = async (props) => {
    try {
        const { url, param } = props
        const res = await SERVER_URL.post(url, param);
        // return {data: res.data, status: res.status}
        return {res}
    } catch (error) {
        return null;
    }
}