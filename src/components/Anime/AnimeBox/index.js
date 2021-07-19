import './style.css';
import List from "./List";
import useFetch from "../../../hook/fetch";
import Pagination from "./Pagination";

const Loading = () => {
  return(
    <div className="row spinner">
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

const Error = () => {
  return(
    <div className="row error">
      <h3 className="text-light">Error de api</h3>
    </div>
  );
}

export default function AnimeBox({ url, onAnimeBox }) {
  const { loading, data, error } = useFetch(url);
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;
  
  return (
    <>
      <div className="row justify-content-center animes" style={{ backgroundColor: '#000000' }}>
        {data.data.map((anime, i) => (
          <List key={i} {...anime} />
        ))}
      </div>
      <Pagination {...data.links} onPagination={onAnimeBox} />
    </>
  );
}
