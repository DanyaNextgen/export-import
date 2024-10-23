import { product } from "./components/product.js"
import { productsArr } from "./db/productsArr.js"
import { reload } from "./helpers/reload.js"
import { priceSvg, ratingSvg, countSvg } from "./db/icons.js"
import { user } from "./components/user.js"

const productsDiv = document.querySelector('.products');
const userContainer = document.querySelector('.user_container')
const count = document.querySelector('h1 span');
const arr = [];

count.innerHTML = arr.length;

reload(productsArr, productsDiv, product)
reload(priceSvg, ratingSvg, countSvg, productsDiv, product)
reload(, userContainer, user)
