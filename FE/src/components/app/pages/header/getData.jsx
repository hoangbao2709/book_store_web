import { each } from 'jquery';
import React, { useState, useEffect } from 'react';
import { API_CATALOG_URL } from "../../../../config/api";

export function Data(url) {  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_CATALOG_URL}/getSearch.php?&url=${encodeURIComponent(url)}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]); 
  console.log(`${API_CATALOG_URL}/getSearch.php?&url=${encodeURIComponent(url)}`);
  return data;
}
