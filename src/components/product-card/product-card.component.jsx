import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'

import { addItemToCart } from '../../store/cart/cart.action'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import {ProductCartContainer, Footer, Name, Price } from './product-card.styles'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    return (
        <ProductCartContainer>
            <img src={imageUrl} alt = {`${name}`} />
            <Footer>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add To Cart</Button>
        </ProductCartContainer>
    )
}


export default ProductCard