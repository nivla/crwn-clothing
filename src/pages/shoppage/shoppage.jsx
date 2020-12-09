import React from "react";
import CollectionPreview from "../../components/collection-preview";

import collections from "./shop.data";

function ShopPage(props) {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
