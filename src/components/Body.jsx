import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';

const TOP_RATED_THRESHOLD = 4.0;

const Body = () => {

    const [topList, setTopList] = useState([]);
    const [allList, setAllList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async () => {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4453064&lng=81.8331262&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const json = await data.json();
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setTopList(restaurants);
      setAllList(restaurants);
    }

    useEffect(()=>{
      fetchData();
    },[])

  return (
    <div className='body'>
      <div className='filter'>
        <div className='search'>

          <input type="text" placeholder='Search for restaurants and food' value={searchTerm} onChange={(e)=>{
            setSearchTerm(e.target.value);
          }} />

          <button className='search-btn'onClick={()=>{
            const searchList = allList.filter((restaurant) => 
              restaurant?.info?.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setTopList(searchList);
          }}>Search</button>

        </div>

        <button className='filter-btn' onClick={()=>{
            const filteredList = allList.filter((restaurant) => restaurant?.info?.avgRating > TOP_RATED_THRESHOLD);
            setTopList(filteredList);
        }}>Top Rated Restaurant</button>
        
      </div>
      <div className='res-container'>
        {topList.map((restaurant) => (
            <Link to={"/restaurants/"+restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard
              name={restaurant?.info?.name}
              rating={restaurant?.info?.avgRating}
              cuisine={restaurant?.info?.cuisines}
              time={restaurant?.info?.slaString}
              img_id={restaurant?.info?.cloudinaryImageId}
            /></Link>
        ))}
      </div>
    </div>
  )
}

export default Body;
