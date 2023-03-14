import { Error, Loader, SongCard } from "../components";
import { shazamCoreApi, useGetTopChartsQuery } from "../redux/services/shazamCore";
import { genres } from '../assets/constants'
import ChartPage from "../components/ChartItems";

const Discover = () => {
    const { data} = ChartPage();
    const genreTitle = 'pop';

    

    console.log(data);
    

    if (Array.isArray(data)) {
        return (
          <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
              <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
              <select
                onChange={() => { }}
                value=""
                className="bg-black text-gray-300  p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
              </select>
      
              <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data.map((song, i) => (
                  <SongCard
                   
                    title={item.title}
                    
                  />
                ))}
 
              </div>
            </div>
          </div>
        );
      } else {
        return <Loader title="Loading song..." />;
      }
      
}
export default Discover;
