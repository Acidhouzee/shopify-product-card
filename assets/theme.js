document.querySelectorAll('.color-swatches input').forEach(input => {
  input.addEventListener('change', function () {
    const card = this.closest('.collection-product');
    if (!card) return;

    // image hover
    const card = this.closest('.collection-product');
    const mainImage = card.querySelector('.product-image');
    const hoverImage = card.querySelector('.product-image-hover');
    const newMain = this.dataset.image;
    const newHover = this.dataset.imageHover;

    if (newMain) mainImage.src = newMain;
    if (newHover) hoverImage.src = newHover;

    // price block
    const priceBlock = card.querySelector('.product-price');
    const compareEl = priceBlock.querySelector('.price-compare');
    const currentEl = priceBlock.querySelector('.price-current');

    if (this.dataset.price) {
      currentEl.textContent = this.dataset.price;
    }

    if (this.dataset.compare && this.dataset.compare !== this.dataset.price) {
      compareEl.style.display = 'inline';
      compareEl.textContent = this.dataset.compare;
    } else {
      compareEl.style.display = 'none';
    }
  });
});