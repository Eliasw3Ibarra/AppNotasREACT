import { useContext } from "react";
import ItemsContext from "./items-context";

export default function Menu(){
    
  const itemsContext = useContext(ItemsContext);

    function handleClick(){
      itemsContext.onNew();
    }

    function handleChange(e){
      itemsContext.onSearch(e);
    }
    return(
        <div className="menu">
            
          <input className='search' placeholder='search...' onChange={handleChange}></input>
          <button className='btn' onClick={(e)=> handleClick()}>+ AGREGAR NUEVA NOTA</button>
        </div>
    );
}