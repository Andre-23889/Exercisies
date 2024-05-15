import { useEffect, useState } from "react";

export function useGeolocation () {
    const [location, setLocation]= useState("locating...")

    


        useEffect(()=>{ 
        if (navigator.geolocation ){
            navigator.geolocation.getCurrentPosition((position)=>{ console.log(position);
                let latitude= position.coords.latitude
                let longitude= position.coords.longitude
                setLocation(["latitude: ",latitude," _ ","longitude: ", longitude] )
            })
        } else{
            console.error("navigator.geolocation not supported")
            setLocation("your browser don't support geolocation, please check permission settings")
        }
        },[])

    
    return{
        currentLocation: location
    }
}