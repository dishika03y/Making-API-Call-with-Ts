import React from "react";
import useFetch from "../customHooks/useFetch";

const Albums: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  if (loading)
    return (
      <div className="d-flex flex-column gap-4 justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        Loading...
      </div>
    );
  if (error) return <div className="text-danger">Error : {String(error)}</div>;
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
      {data?.map((album) => (
        <div className="col " key={album.id}>
          <div className="card bg-secondary bg-opacity-10 h-100 shadow-sm text-white">
            <img
              className="img-fluid w-100"
              src="https://wallpapercave.com/wp/wp4736969.jpg"
              alt={album.title}
            />
            <div className="card-body">
              <h5 className="card-title">{album.title}</h5>
              <p className="card-text">
                Album ID : <strong>{album.id}</strong>
              </p>
            </div>
            <div className="card-footer text-center">
              <a href={album.url} className="btn btn-primary" target="_blank">
                view full img
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Albums;
