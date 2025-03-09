import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { paginationHelper } from './../helper/pagination';
import { useData } from './../helper/getData';

export function Van_hoc_nuoc_ngoai(item) {
    const importAll = (r) => r.keys().map(r);
    const img = importAll(require.context('./../../BackEnd/php/images/van_hoc_nuoc_ngoai', true, /\.(png|webp|svg|jpg)$/));
    const images = useData(img, "van_hoc_nuoc_ngoai");
    const location = useLocation();
    const pathParts = location.pathname;
    const pageNumber = pathParts.includes(item.resultLocation)
      ? pathParts.replace(item.resultLocation + '/', "") 
      : pathParts.replace(item.resultLocation, "1"); 
    const resultLocation = pathParts.replace("/" + pageNumber, "");
    let itemNumber = "";
    if (String(pageNumber) === String(resultLocation)) {
      itemNumber = "1";
    }
    else itemNumber = String(pageNumber);

    return (
      <div>
        <div>
          {paginationHelper(itemNumber, resultLocation, images, item.Width)}
        </div>
      </div>
    );
}