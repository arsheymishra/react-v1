import { CARD_URL } from "../utils/constants";




const RestaurantCard = ({name,rating,cuisine,time,img_id}) => {
  return (
    <div className='restaurant-card'>
      <img src={CARD_URL+img_id} alt="Restaurant" />
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
      <p>Cuisines: {cuisine.join(", ")}</p>
      <p>Delivery Time: {time} mins</p>
    </div>
  );
}

export default RestaurantCard;