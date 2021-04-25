import Swiper from 'swiper';

class Options {
    constructor(selector) {
        this.root = document.getElementById('options')
        this.sliderTimeSelector = '#optionsSliderTime'
        this.sliderIntSelector = '#optionsSliderInt'
        this.sliderTimeElWrap = this.root.querySelector(`${this.sliderTimeSelector} .swiper-wrapper`)
        this.sliderIntElWrap = this.root.querySelector(`${this.sliderIntSelector} .swiper-wrapper`)
        this.sliderTime = null
        this.sliderInt = null
        this.intCheckbox = document.getElementById('optionsCheckbox')
    }

    init() {
        this.completeSliderInt()
        this.initSliderInt()

        this.initCheckbox()
    }

    completeSliderInt() {
        for(let num = 1; num < 51; num++){
            let slideEl = document.createElement('div')
            slideEl.classList.add('swiper-slide')
            slideEl.setAttribute('data-num', num);
            slideEl.innerHTML = num;
            this.sliderIntElWrap.appendChild(slideEl)
          }
    }

    initSliderInt() {
        const _this = this;

        this.sliderInt = new Swiper(this.sliderIntSelector, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            slideToClickedSlide: true,
            loop: false,
            on: {
                slideChangeTransitionStart: function () {
                    _this.sliderChange()
                },
            },
        });
    }

    sliderChange() {}

    initCheckbox() {
        this.intCheckbox.addEventListener('change', () => {
            let isChecked = this.intCheckbox.checked

            if(isChecked) {
                let lastSlideIndex = this.sliderInt.slides.length - 1
                console.log(lastSlideIndex)
                this.sliderInt.slideTo(lastSlideIndex, 400, true)
            }
        })
    }


}

document.addEventListener('DOMContentLoaded', () => {
    const options = new Options();
    options.init()
})