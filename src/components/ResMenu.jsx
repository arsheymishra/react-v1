import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
const ResMenu = () => {

  const {resId} = useParams();

  const {resName,menuList} = useRestaurantMenu(resId);

  return (
    <div className="res-menu">
      <h1>{resName}</h1>

      <div className="recommendations">
        <h2>Recommended ({menuList.length})</h2>

        {menuList.map((item) => {
          const info = item.card.info;
          return (
            <div className="menu-item" key={info.id}>
              <div className="item-details">
                <h3>{info.name}</h3>
                <span className="price">
                  ₹{(info.defaultPrice ?? info.price) / 100}
                </span>
                {info.ratings?.aggregatedRating?.rating && (
                  <span className="rating">
                    ★ {info.ratings.aggregatedRating.rating} (
                    {info.ratings.aggregatedRating.ratingCountV2})
                  </span>
                )}
                <p>{info.description}</p>
              </div>

              <div className="item-image">
                {info.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`}
                    alt={info.name}
                    width={100}
                    height={100}
                  />
                )}
                <button className="add-btn">ADD</button>
                {info.addons?.length > 0 && (
                  <span className="customizable">Customisable</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResMenu;
