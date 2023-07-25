import React, { useState } from 'react';
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material'

const ShoppingCartComp = () => {

    const [itemCount, setItemCount] = useState(0);

    function handleClick(){
        setItemCount(itemCount + 1)

    }

  return (
    <div className="shoppingcart">
        <Badge badgeContent={itemCount} color='secondary'>
            <ShoppingCart/> {" "}
        </Badge>
        <button onClick={handleClick}>Increase</button>

    </div>
  )
}

export default ShoppingCartComp