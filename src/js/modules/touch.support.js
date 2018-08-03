window.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
window.SUPPORT_TOUCH = ('ontouchstart' in window);
window.SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);