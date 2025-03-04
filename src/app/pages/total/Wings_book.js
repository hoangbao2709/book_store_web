import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { paginationHelper } from './../helper/pagination';
import { useData } from './../helper/getData';

export function Wings_book(item) {
    const importAll = (r) => r.keys().map(r);
    const img = importAll(require.context('./../../BackEnd/php/images/wings_book', true, /\.(png|webp|svg)$/));
    const images = useData(img);
    const location = useLocation();
    const pathParts = location.pathname;
    const pageNumber = pathParts.includes(item.resultLocation)
  ? pathParts.replace(item.resultLocation + '/', "")  // Thay thế resultLocation bằng "1" nếu có
  : pathParts.replace(item.resultLocation, "1"); // Loại bỏ resultLocation khi không có
    const resultLocation = pathParts.replace("/" + pageNumber, "");
    let itemNumber = "";
    if(String(pageNumber) === String(resultLocation)){
      itemNumber = "1";       
    }
    else itemNumber = String(pageNumber);
    
    console.log(resultLocation); 

    return (
      <div>
        <div className="flex relative">
          { paginationHelper(itemNumber, resultLocation, images) }
        </div>
      </div>
    );
}