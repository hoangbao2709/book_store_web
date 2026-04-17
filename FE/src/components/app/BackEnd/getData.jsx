import React, { useState, useEffect } from 'react';
import { API_CATALOG_URL } from "../../../config/api";

export function Data(url, variable) {  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${API_CATALOG_URL}/getdata.php?&url=${encodeURIComponent(url)}&variable=${encodeURIComponent(variable)}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url, variable]); 
  return data;
}
