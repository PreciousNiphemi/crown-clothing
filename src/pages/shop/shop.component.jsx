import React from 'react';
import {Component} from 'react';
import Shop_Data from './shop.data.js';
import  CollectionPreview from '../../components/collection-preview/collection-preview.component'



class ShopPage extends Component{
    constructor(props){
        super(props);

        this.state ={
            collections: Shop_Data  
        }
    }


    render(){
        const {collections} =  this.state
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps})=>(
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }


}

export default ShopPage;