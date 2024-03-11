window.addEventListener('scroll', function () {
    let layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${window.scrollY * speed * 0.1}px)`;
    });
});
