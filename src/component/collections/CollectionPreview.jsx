import React from "react";
import "./collectionPreview.scss";
import SHOP_DATA from "../../page/Shop-page/shopData";
import CollectionItem from "../collection-item/CollectionItem";

function Collection() {
  return (
    <>
      {SHOP_DATA.map((collection) => (
          <div className="collection-preview" key={collection.id}>
            <div className="title">
              <h1>{collection.title}</h1>
            </div>
            <div className="preview">
              {collection.items.slice(0, 4).map((product) => (
                
                  <CollectionItem product={product} key={product.id} />
                
              ))}
            </div>
          </div>
        ))
      }
    </>
  );
}

export default Collection;
