import { useState } from "react";


let menuFunSensor = true;  
export const menuFun = () => {
    if ( menuFunSensor ) {
        document.querySelector(".header__menu").style.display = "block";
        menuFunSensor = false;
    } else {
        document.querySelector(".header__menu").style.display = "none";
        menuFunSensor = true;
    }
}

let filterFunSensor = true;  
export const filterFun = () => {
    if ( filterFunSensor ) {
        document.querySelector(".projects__filtersWrapper").style.display = "block";
        document.querySelector(".projects__filter").style.animation = "rtg 1 5s linear";
        filterFunSensor = false;
    } else {
        document.querySelector(".projects__filtersWrapper").style.display = "none";
        document.querySelector(".projects__filter").style.animation = "rtg infinite 5s linear";
        filterFunSensor = true;
    }
}


let arr = [];
// const [handelLoopStr, setHandelLoopStr] = useState('');
// export const handelLoop = (String1, String2) => {
//     setHandelLoopStr(String1);
//     for(var i = 0; i<document.querySelectorAll(handelLoopStr).length; i++){
//         document.querySelectorAll(handelLoopStr)[i].style.display = String2
//     }     
// }
export  const projectsFun = (e) => {
    if (e.target.checked) {        
      arr.push(e.target.nextSibling.textContent);
      for(let i = 0; i<document.querySelectorAll('.projects__wrapper__item').length; i++){
        document.querySelectorAll('.projects__wrapper__item')[i].style.display = 'none'
      }           
    // setHandelLoopStr('.projects__wrapper__item');
    // handelLoop('none');
      if( arr.length === 1 ) {
        for(let i = 0; i<document.querySelectorAll('.projects__wrapper__item.'+arr[0]+'').length; i++){
          document.querySelectorAll('.projects__wrapper__item.'+arr[0]+'')[i].style.display = 'block'
        } 
      } else if( arr.length > 1 ){
          for(let i = 0; i<document.querySelectorAll('.projects__wrapper__item.'+arr.join(".")+'').length; i++){
            document.querySelectorAll('.projects__wrapper__item.'+arr.join(".")+'')[i].style.display = 'block'
          }
      } else{
        for(let i = 0; i<document.querySelectorAll('.projects__wrapper__item').length; i++){
          document.querySelectorAll('.projects__wrapper__item')[i].style.display = 'block'
        } 
      } 
      console.log(arr);

    } else{

      arr.splice( arr.indexOf(e.target.nextSibling.textContent) ,1);
      for(let i = 0; i<document.querySelectorAll('.projects__wrapper__item').length; i++){
        document.querySelectorAll('.projects__wrapper__item')[i].style.display = 'none'
      }            
      if( arr.length === 1 ) {
        for(let i = 0; i<document.querySelectorAll('.projects__wrapper__item.'+arr[0]+'').length; i++){
          document.querySelectorAll('.projects__wrapper__item.'+arr[0]+'')[i].style.display = 'block'
        } 
      } else if( arr.length > 1 ){
          for(let i = 0; i<document.querySelectorAll('.projects__wrapper__item.'+arr.join(".")+'').length; i++){
            document.querySelectorAll('.projects__wrapper__item.'+arr.join(".")+'')[i].style.display = 'block'
          }
      } else{
        for(let i = 0; i<document.querySelectorAll('.projects__wrapper__item').length; i++){
          document.querySelectorAll('.projects__wrapper__item')[i].style.display = 'block'
        } 
      } 
      console.log(arr);        
    }
    console.log( e.target.getAttribute("checked") , e.target.checked );
}

export  const colorMoodFun = (e) => {
    if( e.target === document.querySelector('.header__colorMoodWrapper__sun') ){      
        document.querySelector('.header__colorMoodWrapper__moon').style.display = "block";
        document.querySelector('.header__colorMoodWrapper__sun').style.display = "none";

        document.documentElement.style.setProperty("--backwallperColor", "#051e34");
        document.documentElement.style.setProperty("--backmenuColor", "#f6f7f9");
        document.documentElement.style.setProperty("--lightColor", "#051e34");
        document.documentElement.style.setProperty("--textColor", "#f6f7f9");
        document.documentElement.style.setProperty("--projectBrdColor", "#f6f7f9a8");   
        document.documentElement.style.setProperty("--pensShadow", "rgb(70 74 77) 0px 1px 2px 0px, rgb(70 74 77) 0px 1px 3px 1px");         
        document.documentElement.style.setProperty("--footerPolygon", "polygon(100% 0%, 0% 100%, 100% 100%)");
    }
    else{
        document.querySelector('.header__colorMoodWrapper__sun').style.display = "block";
        document.querySelector('.header__colorMoodWrapper__moon').style.display = "none";

        document.documentElement.style.setProperty("--backwallperColor", "#f6f7f9");
        document.documentElement.style.setProperty("--backmenuColor", "#333");
        document.documentElement.style.setProperty("--lightColor", "#f6f7f9");
        document.documentElement.style.setProperty("--textColor", "#051e34");
        document.documentElement.style.setProperty("--projectBrdColor", "#545b6261");
        document.documentElement.style.setProperty("--pensShadow", "rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 1px 3px 1px");   
        document.documentElement.style.setProperty("--footerPolygon", "polygon(0% 0%, 0% 100%, 100% 100%)");
    }
}