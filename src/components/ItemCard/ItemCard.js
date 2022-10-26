import React from 'react';
import './ItemCard.css';

const ItemCard = (props) => {
    const getInitialItemName = (itemName) => {
        let nameArr = itemName.split(' ');
        let initial = '';
        if (nameArr.length === 1) {
            initial = nameArr[0][0].toUpperCase();
        } else if (['/', '\\', '&'].includes(nameArr[1][0])) {
            initial = nameArr[0][0].toUpperCase();
        } else {
            initial = `${nameArr[0][0].toUpperCase()} . ${nameArr[1][0].toUpperCase()}`;
        }
        return initial;
    }

    const onItemClick = () => {
        props.scrollElem(props.Item._id);
        props.selectItemHandler(props.Item)
    }

    return (
        <div className="item-card" onClick={() => onItemClick()}>
            <div className='image-container'>
                <div className="item-initials">{getInitialItemName(props.Item.name)}</div>
            </div>
            <div className='desc-container'>
                <div className='item-name-location'>
                    <span className='item-name'>{props.Item.name}</span>
                    {props.Item.name && <span className='item-website'>{props.Item.name}</span>}
                    {props.Item.price && <span className='item-location'>{props.Item.price}</span>}
                </div>
                <div className='services-container'>
                    <span className='services'>₹ {props.Item.price}</span>
                </div>
                <div className='client-container'>
                    <div className="item-client-logo_name">
                        <div className="item-client-name">{props.Item.name}</div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}

export { ItemCard };