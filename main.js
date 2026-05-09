const counters = document.querySelectorAll(".counter");
const duration = 2000;
const pauseTime = 3000;

const startCounters = () => {
    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        let current = 0;
        const increment = target / (duration / 16);

        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current).toLocaleString();
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCount();
    });

    setTimeout(() => {
        counters.forEach((c) => (c.innerText = "0"));
        startCounters();
    }, duration + pauseTime);
};

startCounters();
