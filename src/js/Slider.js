import Swiper from 'swiper';

class SwiperSlider {
    constructor(selector) {
        this.selector = selector
        this.slider = null
        this.slides = document.querySelectorAll('.swiper-slide')
        this.$el = document.querySelector(selector)
        this.groupsInfo = {}

        this.$headerNav = document.getElementById('headerNav')
    }

    init() {

        this.getGroupsInfo()

        const _this = this;
       
        this.slider = new Swiper(this.selector, {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
            on: {
                slideChangeTransitionStart: function () {
                    _this.slideChange()
                },
              },
        });     
    }

    getGroupsInfo() {
        for(let group of this.slides) {
            let groupName = group.getAttribute('data-group');

            if(this.groupsInfo[groupName]) {
              this.groupsInfo[groupName] += 1;
            } else {
                this.groupsInfo[groupName] = 1
            }   
        }
    }

    slideChange() {
        let currIndex = this.slider.realIndex
        let groupNumber = this.slides[currIndex].getAttribute('data-group')
        let groupCount = this.groupsInfo[groupNumber]
        
        let groupLineArr = this.$headerNav.querySelectorAll('span')

        for(let line of groupLineArr) {
            if(line.getAttribute('data-group') === groupNumber) {
          
                
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = new SwiperSlider('#slider');
    slider.init()
})