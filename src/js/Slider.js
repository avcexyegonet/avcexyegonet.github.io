import Swiper from 'swiper';

class MainSlider {
    constructor(selector) {
        this.selector = selector
        this.slider = null
        this.slides = document.querySelectorAll('.swiper-slide')
        this.$el = document.querySelector(selector)
        this.groupsInfo = {}

        this.$headerNav = document.getElementById('headerNav')
        this.$modelTypeInput = document.querySelectorAll('[name="model"]')
        this.$footerLink = document.querySelector('.footer__link')
        this.$footerBtnOrder = document.querySelector('.footer__order')
        this.$footerBtnNext = document.querySelector('.footer__next')

        this.formComplete = false
    }

    init() {
        this.getGroupsInfo()
        this.chooseModelType()

        const _this = this;

        this.slider = new Swiper(this.selector, {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            effect: 'fade',
            loop: false,
            on: {
                afterInit: () => {
                    _this.headerProgressBar()
                    _this.footerChange()
                    _this.initBtnNext()
                },
                slideChangeTransitionStart: () => _this.slideChange(),
            },
        });
    }

    getGroupsInfo() {
        for (let group of this.slides) {
            let groupName = group.getAttribute('data-group');

            if (this.groupsInfo[groupName]) {
                this.groupsInfo[groupName] += 1
            } else {
                this.groupsInfo[groupName] = 1
            }
        }
    }

    slideChange() {
        let currIndex = this.slider.realIndex

        this.allowSliderMove(currIndex)
        this.headerProgressBar(currIndex)
        this.footerChange(currIndex)
    }

    initBtnNext() {
        this.$footerBtnNext.addEventListener('click', () => this.slider.slideNext())
    }

    headerProgressBar(index = 0) {
        let visibleSlideNum = index + 1
        let groupLineArr = this.$headerNav.querySelectorAll('div')
        let groupNumber = this.slides[index].getAttribute('data-group')
        let groupCount = this.groupsInfo[groupNumber]

        let groupSlideStart = 0

        for (const [name, count] of Object.entries(this.groupsInfo)) {
            if(name < groupNumber && count < visibleSlideNum) {
                groupSlideStart += count
            }
        }

        let currGroupSlideNum = visibleSlideNum - groupSlideStart
        let progress = (currGroupSlideNum / groupCount).toFixed(2) * 100

        for (let line of groupLineArr) {
            let lineGroup = line.getAttribute('data-group')
            let bar = line.querySelector('.header__nav-bar')
            
            if (lineGroup === groupNumber) {
                    bar.style.width = `${progress}%`
            } else if (lineGroup > groupNumber) {
                bar.style.width = 0
            }
        }
    }

    footerChange(index = 0) {
        this.$footerLink.classList.toggle('is-active', index === 8)
        this.$footerBtnNext.classList.toggle('is-active', index < 8)

        let orderBtnStatement = index !== 8 && index !== 12 && index !== 13
        this.$footerBtnOrder.classList.toggle('is-active', orderBtnStatement) 

        if(index === 10) {
            this.$footerBtnOrder.setAttribute('disabled', !this.formComplete)
        } else {
            this.$footerBtnOrder.removeAttribute('disabled')
        }
    }

    allowSliderMove(currIndex = 0) {
        let isDisabledNext = Boolean(this.slides[currIndex].getAttribute('data-disabled-next'))
        this.slider.allowSlideNext = !isDisabledNext

        let isDisabledPrev = Boolean(this.slides[currIndex].getAttribute('data-disabled-prev'))
        this.slider.allowSlidePrev = !isDisabledPrev

        let isDisabled = Boolean(this.slides[currIndex].getAttribute('data-disabled'))
        this.slider.allowTouchMove = !isDisabled
    }

    chooseModelType() {
        for (let input of this.$modelTypeInput) {
            input.addEventListener('change', () => {
                this.slider.allowSlideNext = true
                input.closest('.swiper-slide').removeAttribute('data-disabled-next')
            })
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider('#slider');
    slider.init()
})