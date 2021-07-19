import './style.css';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function List({ attributes, type, relationships }) {
  const [point, setPoint] = useState(false);

  const handleInfo = (type) => {
    setPoint(type);
  };

  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 text-center anime" onPointerOver={() => handleInfo(true)} onPointerOut={() => handleInfo(false)}>
      <a href="#">
        <div className={ point ? 'card cardSelect' : 'card' }>
          <img
            src={attributes.posterImage.small}
            className={ point ? 'card-img-top imgSelect' : 'card-img-top' }
            alt="..."
          />
        </div>
        <h6 className={ point ? 'card-title text-light aSelect' : 'card-title text-light' }>{attributes.canonicalTitle}</h6>
      </a>
      <div className={ point ? 'infoShow' : 'infoHide' }>
        <div className="title">
          <strong>{ attributes.canonicalTitle }</strong>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label className="float-start">
              <FontAwesomeIcon icon={faStar} className="text-warning"/>
              <strong> {attributes.averageRating}%</strong>
            </label>
          </div>
          <div className="col-lg-6">
            <span className="badge bg-info float-end">{type.toUpperCase()}</span>
          </div>
        </div>
        <p className="synopsis overflow-ellipsis">{attributes.synopsis}</p>
        <div className="col-lg-12">
          <a href={relationships.streamingLinks.links.related} target="_blank" className="badge bg-info text-light">VER ANIME</a>
        </div>
      </div>
    </div>
  );
};