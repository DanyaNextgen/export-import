function product(item) {
        const product = document.createElement('div');
        const product__info = document.createElement('div');
        const rates = document.createElement('div');
        const priceDiv = document.createElement('div');
        const rateDiv = document.createElement('div');
        const countDiv = document.createElement('div');
        const price = document.createElement('span');
        const rate = document.createElement('span');
        const count = document.createElement('span');
        const image = document.createElement('img');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const addToFavorite = document.createElement('button');
    
        title.innerHTML = item.title.split(' ').slice(0, 3).join(' ') + '...';
        description.innerHTML = item.description.split(' ').slice(0, 15).join(' ') + '...';
        price.innerHTML = item.price;        
        rate.innerHTML = item.rating.rate;        
        count.innerHTML = item.rating.count;
        addToFavorite.innerHTML = 'В избранное';
        priceDiv.innerHTML += priceSvg();
        rateDiv.innerHTML += ratingSvg();
        countDiv.innerHTML += countSvg();

        product.classList.add('product');
        image.src = './public/images/img.png';
        product__info.classList.add('product__info');
        rates.classList.add('rates');

        priceDiv.append(price);
        rateDiv.append(rate);
        countDiv.append(count);

        rates.append(priceDiv, rateDiv, countDiv);

        product__info.append(title, description, rates, addToFavorite);
    
        product.append(image, product__info);

        return product
}

export { product }
