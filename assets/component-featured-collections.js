if (!customElements.get('featured-collections')) {
  class FeaturedCollections extends HTMLElement {
    #swiper = null;

    constructor() {
      super();
    }

    setupEventListeners() {
      this.querySelector('#swiper-script').addEventListener('load', this.initSwiper.bind(this));
    }

    connectedCallback() {
      this.setupEventListeners();
      if (typeof Swiper !== 'undefined') {
        this.initSwiper();
      }
    }

    initSwiper() {
      this.#swiper = new Swiper('.swiper', {
        autoHeight: true,
        direction: 'horizontal',
        slidesPerView: 1.25,
        spaceBetween: 10,
        breakpoints: {
          // when window width is >= 750px
          750: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
      });
    }
  }

  customElements.define('featured-collections', FeaturedCollections);
}