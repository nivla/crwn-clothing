import React from "react";
import { Link, useLocation } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item";

import "./collection-preview.scss";

function CollectionPreview({ title, items }) {
  let location = useLocation();

  return (
    <div className="collection-preview">
      <h1>
        <Link to={`${location.pathname}/${title.toLowerCase()}`}>
          {title.toUpperCase()}
        </Link>
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
