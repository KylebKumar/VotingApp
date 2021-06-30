import React, { useState, useRef, useEffect } from 'react'
import Iframe from "react-iframe"
import { ReactSearchAutocomplete } from "react-search-autocomplete"

export default function Map() {
  
   const [selectedItem, setItem] = useState({
      id: 0,
      name: "Cupertino Town Hall",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9946780463742!2d-122.03092228439377!3d37.318953746025336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb44e74e67871%3A0x33f7b0786703deb5!2sCupertino%20City%20Hall!5e0!3m2!1sen!2sus!4v1625027056597!5m2!1sen!2sus"
   })

   const items = [
      {
        id: 1,
        name: 'Kennedy Middle School',
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.334503056169!2d-122.05304548439382!3d37.31090344648365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4583b7c5b0d%3A0x2016271e26c3ad01!2sJohn%20F.%20Kennedy%20Middle%20School!5e0!3m2!1sen!2sus!4v1625026196551!5m2!1sen!2sus"
      },
      {
        id: 2,
        name: 'Lincoln Elementary School',
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.155520515169!2d-122.05623618439382!3d37.31514364624223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb45b93d21ee5%3A0x1fad01b801a004e5!2sAbraham%20Lincoln%20Elementary%20School!5e0!3m2!1sen!2sus!4v1625026766487!5m2!1sen!2sus"
      },
      {
        id: 3,
        name: 'Monta Vista High School'
      },
      {
        id: 4,
        name: 'Quinlann Community Center'
      },
      {
        id: 5,
        name: 'Regnart Elementary School'
      }
    ]

    const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
      console.log(string, results)
    }
  
    const handleOnHover = (result) => {
      // the item hovered
      console.log(result)
    }
  
    const handleOnSelect = (item) => {
      // the item selected
      setItem(item)
    }
  
    const handleOnFocus = () => {
      console.log('Focused')
    }

   return(
      <>
         <div style={{alignItems:"center"}}>
         <ReactSearchAutocomplete
               items={items}
               onSearch={handleOnSearch}
               onHover={handleOnHover}
               onSelect={handleOnSelect}
               onFocus={handleOnFocus}
               autoFocus
            />
            <Iframe url= { selectedItem.url } width="100%" height="750px"/>
         </div>
      </>
   );
}
