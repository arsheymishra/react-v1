import { RES_MENU_LIST } from "./constants"
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId)=>{

    const [menuList, setMenuList] = useState([]);
    const [resName, setResName] = useState("");

    const fetchData = async ()=>{
        const data = await fetch(RES_MENU_LIST + resId);
        const json = await data.json();

        
        const name = json?.data?.cards[2]?.card?.card?.info?.name || "Restaurant Menu";
        const menu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

        setMenuList(menu);
        setResName(name);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {menuList,resName};

}

export default useRestaurantMenu;