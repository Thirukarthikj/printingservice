document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Number Counter Animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // The lower the slower

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const inc = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
        observer.unobserve(counter); // Only animate once
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Products Carousel Logic
  const productsCarousel = document.getElementById('products-carousel');
  const btnPrev = document.getElementById('prod-prev');
  const btnNext = document.getElementById('prod-next');
  let autoPlayInterval;

  if (productsCarousel && btnPrev && btnNext) {
    const scrollAmount = 400; // width of a card + gap

    const scrollNext = () => {
      // Check if we reached the end
      if (productsCarousel.scrollLeft + productsCarousel.clientWidth >= productsCarousel.scrollWidth - 10) {
        productsCarousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        productsCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const scrollPrev = () => {
      if (productsCarousel.scrollLeft <= 0) {
        productsCarousel.scrollTo({ left: productsCarousel.scrollWidth, behavior: 'smooth' });
      } else {
        productsCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    };

    btnNext.addEventListener('click', () => {
      scrollNext();
      resetAutoPlay();
    });

    btnPrev.addEventListener('click', () => {
      scrollPrev();
      resetAutoPlay();
    });

    // Auto Play
    const startAutoPlay = () => {
      autoPlayInterval = setInterval(scrollNext, 3000); // 3 seconds
    };

    const resetAutoPlay = () => {
      clearInterval(autoPlayInterval);
      startAutoPlay();
    };

    startAutoPlay();

    // Pause on hover
    productsCarousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    productsCarousel.addEventListener('mouseleave', startAutoPlay);
  }

  // Gallery Filter Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const header = item.querySelector('.faq-header');
      if (header) {
        header.addEventListener('click', () => {
          // Check if already active
          const isActive = item.classList.contains('active');
          
          // Close all items
          faqItems.forEach(faq => faq.classList.remove('active'));
          
          // If it wasn't active, open it
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }
});
