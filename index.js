document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const authButtons = document.querySelector(".auth-buttons");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      if (!document.querySelector(".mobile-menu")) {
        const mobileMenu = document.createElement("div");
        mobileMenu.classList.add("mobile-menu");

        const menuHeader = document.createElement("div");
        menuHeader.classList.add("mobile-menu-header");

        const logoDiv = document.createElement("div");
        logoDiv.classList.add("logo");
        logoDiv.innerHTML = `
          <img src="https://i.imgur.com/ItJCG4q.png" alt="Moonlit">
          <h1>Moonlit</h1>
        `;

        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close-menu");
        closeBtn.innerHTML = "&times;";
        closeBtn.onclick = function () {
          mobileMenu.style.display = "none";
        };

        menuHeader.appendChild(logoDiv);
        menuHeader.appendChild(closeBtn);
        mobileMenu.appendChild(menuHeader);

        // Add welcome text
        const welcomeText = document.createElement("div");
        welcomeText.classList.add("mobile-welcome-text");
        welcomeText.innerHTML = `
          <p>Welcome to Moonlit, where luxury meets comfort in the heart of 
          canada. Since 1999, we have been dedicated to providing.</p>
        `;
        mobileMenu.appendChild(welcomeText);

        const separator = document.createElement("hr");
        mobileMenu.appendChild(separator);

        const menuItems = [
          { name: "Home", hasSubmenu: true },
          { name: "About Us", hasSubmenu: false },
          { name: "Rooms", hasSubmenu: true },
          { name: "Blog", hasSubmenu: true },
          { name: "Pages", hasSubmenu: true },
          { name: "Contact Us", hasSubmenu: false },
        ];

        menuItems.forEach((item) => {
          const menuItem = document.createElement("div");
          menuItem.classList.add("mobile-menu-item");

          const itemContent = document.createElement("div");
          itemContent.classList.add("item-content");

          const itemName = document.createElement("a");
          itemName.href = "#";
          itemName.textContent = item.name;

          itemContent.appendChild(itemName);

          if (item.hasSubmenu) {
            const plusIcon = document.createElement("span");
            plusIcon.classList.add("expand-icon");
            plusIcon.textContent = "+";
            itemContent.appendChild(plusIcon);

            itemContent.addEventListener("click", function (e) {
              e.preventDefault();
              const currentIcon = this.querySelector(".expand-icon");
              if (currentIcon.textContent === "+") {
                currentIcon.textContent = "-";
              } else {
                currentIcon.textContent = "+";
              }
            });
          }

          menuItem.appendChild(itemContent);
          mobileMenu.appendChild(menuItem);

          const itemSeparator = document.createElement("hr");
          mobileMenu.appendChild(itemSeparator);
        });

        const phoneSection = document.createElement("div");
        phoneSection.classList.add("mobile-phone-section");
        phoneSection.innerHTML = `
          <h3>Phone</h3>
          <p>tel:+1234567890 57890</p>
        `;
        mobileMenu.appendChild(phoneSection);

        document.body.appendChild(mobileMenu);
      }

      const mobileMenu = document.querySelector(".mobile-menu");
      mobileMenu.style.display =
        mobileMenu.style.display === "none" ? "block" : "none";
    });
  }

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const sliderImages = [
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  ];

  let currentSlide = 0;

  document.querySelector(
    ".hero"
  ).style.backgroundImage = `url('${sliderImages[0]}')`;

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", function () {
      currentSlide =
        (currentSlide - 1 + sliderImages.length) % sliderImages.length;
      updateSlider();
      console.log("Previous slide clicked:", currentSlide);
    });

    nextBtn.addEventListener("click", function () {
      currentSlide = (currentSlide + 1) % sliderImages.length;
      updateSlider();
      console.log("Next slide clicked:", currentSlide);
    });
  }

  function updateSlider() {
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.style.backgroundImage = `url('${sliderImages[currentSlide]}')`;

      hero.style.transition = "background-image 0.5s ease-in-out";
    }
  }

  setInterval(function () {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    updateSlider();
  }, 5000);
});
