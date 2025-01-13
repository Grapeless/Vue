import axios from "axios";

export default async function useMovieData() {
    const res = await axios({
        url: '/api/j/search_subjects',
        params: {
            tag: '全部',
            sort: 'recommend',
            'page_limit': 1,
            'page_start': 0,
        }
    })
    return res.data['subjects'][0];

}
