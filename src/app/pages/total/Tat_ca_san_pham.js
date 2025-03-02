import React from 'react';
import Frame from '../helper/frame';
import image1 from './images/Nhím Charlie tài ba - Phiêu lưu nơi đảo xa.webp';
import image2 from './images/Nhím Charlie tài ba - Xông pha trị thủy.webp';
import image3 from './images/Những đứa con của đường rừng.webp';
import image4 from './images/Nàng tiên hạt bụi - Bữa tiệc mặn và ngọt.webp';
import image5 from './images/Nàng tiên hạt bụi - Kì nghỉ hè tí hon.webp';
import image6 from './images/Nàng tiên hạt bụi - Những câu chuyện nhỏ bé.webp';
import image7 from './images/Oddtaxi.webp';
import { useLocation } from 'react-router-dom';
import image8 from './images/ô bạn tôi thầm thích lại quên mang kính rồi.webp';
import { paginationHelper } from './../helper/pagination'; 

let item1 = { img: image1, gia_goc: "50.000", gia: "45.000", giam_gia: "10%", name: "Charlie tài ba - Phiêu lưu nơi đảo xa" };
let item2 = { img: image2, gia_goc: "50.000", gia: "50.000", giam_gia: "10%", name: "Nhím Charlie tài ba - Xông pha trị thủy" };
let item3 = { img: image3, gia_goc: "40.000", gia: "45.000", giam_gia: "10%", name: "Những đứa con của đường rừng"};
let item4 = { img: image4, gia_goc: "50.000", gia: "35.000", giam_gia: "10%", name: "Nàng tiên hạt bụi - Bữa tiệc mặn và ngọt" };
let item5 = { img: image5, gia_goc: "50.000", gia: "25.000", giam_gia: "10%", name: "Nàng tiên hạt bụi - Kì nghỉ hè tí hon" };
let item6 = { img: image6, gia_goc: "50.000", gia: "34.000", giam_gia: "10%", name: "Nàng tiên hạt bụi - Những câu chuyện nhỏ bé" };
let item7 = { img: image7, gia_goc: "50.000", gia: "48.000", giam_gia: "10%", name: "Oddtaxi" };
let item8 = { img: image8, gia_goc: "50.000", gia: "37.000", giam_gia: "10%", name: "ô bạn tôi thầm thích lại quên mang kính rồi", };
let item9 = { img: image1, gia_goc: "50.000", gia: "45.000", giam_gia: "10%", name: "Charlie tài ba - Phiêu lưu nơi đảo xa" };
let item10 = { img: image2, gia_goc: "50.000", gia: "50.000", giam_gia: "10%", name: "Nhím Charlie tài ba - Xông pha trị thủy" };
let item11 = { img: image3, gia_goc: "40.000", gia: "45.000", giam_gia: "10%", name: "Những đứa con của đường rừng"};
let item12 = { img: image4, gia_goc: "50.000", gia: "35.000", giam_gia: "10%", name: "Nàng tiên hạt bụi - Bữa tiệc mặn và ngọt" };
let item13 = { img: image5, gia_goc: "50.000", gia: "25.000", giam_gia: "10%", name: "Nàng tiên hạt bụi - Kì nghỉ hè tí hon" };
let item14 = { img: image6, gia_goc: "50.000", gia: "34.000", giam_gia: "10%", name: "Nàng tiên hạt bụi - Những câu chuyện nhỏ bé" };
let item15 = { img: image7, gia_goc: "50.000", gia: "48.000", giam_gia: "10%", name: "Oddtaxi" };
let item16 = { img: image8, gia_goc: "50.000", gia: "37.000", giam_gia: "10%", name: "ô bạn tôi thầm thích lại quên mang kính rồi", };

let images = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item16,
];

export function Tat_ca_san_pham(item) {
    const location = useLocation();
    const pathParts = location.pathname;
    const pageNumber = pathParts.includes(item.resultLocation)
  ? pathParts.replace(item.resultLocation + '/', "")  
  : pathParts.replace(item.resultLocation, "1"); 
    const resultLocation = pathParts.replace("/" + pageNumber, "");
    let itemNumber = "";
    if(String(pageNumber) === String(resultLocation)){
      itemNumber = "1";       
    }
    else itemNumber = String(pageNumber);

    return (
      <div className='w-full'>
          { paginationHelper(itemNumber, resultLocation, images) }
      </div>
    );
}