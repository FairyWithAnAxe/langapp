import React from 'react'
import AddToCartButton from './AddToCartButton';
import AddToCartForm from './AddToCartForm';


export default class Card_Cart extends React.Component {
    render() {
        const { title, price, description, imgLink, addedToCart } = this.props;
        let actionItem;
        if (addedToCart) {
            actionItem = <AddToCartForm addedToCart={addedToCart} />;
        } else {
            actionItem = <AddToCartButton />;
        }
        return (
            <div className="card">
                <div className="card-body">
                    <img src={imgLink} alt={title} />
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <span className="card-price">${price}</span>
                    {actionItem}
                </div>
            </div>
        );
    }
}

