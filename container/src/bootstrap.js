import { mount as productsMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

productsMount(document.querySelector('#list-products'))
cartMount(document.querySelector('#list-cart'))
