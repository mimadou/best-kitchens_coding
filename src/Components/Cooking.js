import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cooking = () => {
    const [dataCooking , setDataCooking] = useState([])
    const[search , setSearch] =useState("")
    const [selectCook, setSelectCook] = useState("")
    const [rangeValue , setRangeValue] =useState(12)

    const special = [ "Turkish" , "American" , "Egyptian"]
    useEffect(()=>{
        
        axios
        .get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
        .then((res) => setDataCooking(res.data.meals))
     
    },[search]);

    return (
         
        <div className='container'>
            
            <h1> Best kitchens</h1>
            <input 
            type='search' 
            placeholder=" Tapez le nom d'un aliment en anglais"
            onChange={(e)=> setSearch(e.target.value)}></input>

            <input type="range"
            min="1"
            max= "25"
            defaultValue={rangeValue}
            onChange={(e)=> setRangeValue(e.target.value)} />
            
            <ul className='inputradio'>
            {special.map((spc)=> 
            
            <li>
                <input type="radio"
                id={spc}
                name='spcchoisi'
                checked ={selectCook === spc}
                onChange={(e)=>setSelectCook(e.target.id)}
                 />
                 <label htmlFor={spc}> {spc}</label>
            </li>
            )}
             </ul>
            {
                selectCook && (
                    <button onClick={()=> setSelectCook("")}> annuler le filtre </button>
                )
                

            }


              <div  className='cooking'> 
              {dataCooking  && dataCooking
              .filter((flat)=> flat.strArea.includes(selectCook))
              .slice(0,rangeValue)
              .map((cook , index)=> (
                
                <Card key ={index} cook = {cook} />
                
               ))}
               </div>
        </div>
    );
};

export default Cooking;