import React from 'react';
import PropTypes from 'prop-types';

const Product = ({item, ...props}) => {

    const {trackId, artworkUrl100, trackName, longDescription, trackPrice} = item

    return (
        <section className="product">
            <img src={artworkUrl100} alt={trackName && trackName.length>0?trackName:`Item id=${trackId}`}/>
            <section>
            <h2 >{trackName}</h2>
            <h2 >£{trackPrice}</h2>  
            <h2 >{trackId}</h2>
            <h2 >{longDescription}</h2>
            

            <div className="buttons">
    {item.inBasket ?
      <button className="remove-button" onClick={() => props.removeFromBasket(trackId)}>Remove</button>:
      <button className="add-button" onClick={() => props.addToBasket(trackId)}>Add to Basket</button>
    }
   </div>
    
            {/* <p>
                by { trackId ? trackId.join(', ') : "No trackId Listed" }
                by { trackName ? trackName.join(', ') : "No trackName Listed" }
                by { trackPrice ? trackPrice.join(', ') : "No trackPrice Listed" }
                by { longDescription ? longDescription.join(', ') : "No longDescription Listed" }
                </p>       */}
            </section>
        </section>
    )
}

// Product.propTypes.shape({trackId : PropTypes.string.isRequired})


export default Product;

