import React from 'react'
import '../styles/Special.css'
import ImageComp from './ImageComp'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'
import img4 from '../imgs/img4.png'

const Special = () => {
  return (
    <div className="Special">
        <div className="special-text">
            <h2>
                Special Meals of the day!
            </h2>
            <p>Check out specials of the day and get discounts on all our meals and swift delivery to what ever location within ilorin.</p>
        </div>
        <div className="special-components">
            <ImageComp name={'Stir fry Pasta'}text={'Stir fry pasta yada yada yada because of Sesan'}
            head={'rgba(251, 221, 187, 1)'}
            image={img2}
            body={'rgba(255, 255, 255, 0.83)'}
            />
            <ImageComp 
            name={'Meat Balls'}
            image={img3}
            text={'Stir fry pasta yada yada yada because of Sesan.'}
            body={'rgba(255, 255, 255, 0.83)'}
            head={'rgba(251, 221, 187, 1)'}
            />
            <ImageComp
            name={'Burger Meal'}
            text={'Stir fry pasta yada yada yada because of Sesan'}
            image={img4}
            body={'rgba(255, 255, 255, 0.83)'}
            head={'rgba(251, 221, 187, 1)'}
            />
        </div>
    </div>
  )
}

export default Special