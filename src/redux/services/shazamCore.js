import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



/* /search/multi?query=metallica&search_type=SONGS_ARTISTS' */

    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
		baseQuery: fetchBaseQuery({
			baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com',
			prepareHeaders: (headers) => {
				
				headers.set('X-RapidAPI-Key' , 'api key', )
				
				return headers;
			},
		}),
		endpoints:(builder)  => ({
			getTopCharts: builder.query({query:() => '/chart/songs/?per_page=50&page=1'})  // chart/songs/
		}),
    });

	export const {
		useGetTopChartsQuery,
	} = shazamCoreApi;



/*	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '973ce6005emshf482200cc920742p1bd00djsn3b63037e4123',
			'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
		}
	};
	
	fetch('https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=10&page=1', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err)); */
