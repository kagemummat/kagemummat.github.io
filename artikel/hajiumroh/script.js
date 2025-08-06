document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sidebar a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("overlay");
      if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      }

      document.querySelectorAll(".sidebar a").forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const headerOffset = document.querySelector(".main-header").offsetHeight;
      const offsetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerOffset -
        20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionContent = header.nextElementSibling;

      accordionHeaders.forEach((otherHeader) => {
        const otherAccordionItem = otherHeader.parentElement;
        const otherAccordionContent = otherHeader.nextElementSibling;
        if (
          otherHeader !== header &&
          otherHeader.classList.contains("active")
        ) {
          otherHeader.classList.remove("active");
          otherAccordionContent.classList.remove("show");
          otherAccordionContent.style.maxHeight = null;
        }
      });

      header.classList.toggle("active");
      accordionContent.classList.toggle("show");

      if (accordionContent.classList.contains("show")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });

  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggleBtn.textContent = "Mode Terang";
  } else {
    themeToggleBtn.textContent = "Mode Gelap";
  }

  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggleBtn.textContent = "Mode Terang";
    } else {
      localStorage.setItem("theme", "light");
      themeToggleBtn.textContent = "Mode Gelap";
    }
  });

  const hamburgerBtn = document.getElementById("hamburger-menu");
  const sidebar = document.getElementById("sidebar");
  let overlay = document.getElementById("overlay");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
  }

  hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  document.querySelectorAll(".sidebar a").forEach((link) => {
    link.addEventListener("click", () => {
      if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      }
    });
  });

  const sections = document.querySelectorAll(".section-card");
  const navLinks = document.querySelectorAll(".sidebar a");

  const observerOptions = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentSectionId = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  if (sections.length > 0) {
    setTimeout(() => {
      const firstSection = sections[0];
      const firstLink = document.querySelector(
        `.sidebar a[href="#${firstSection.id}"]`
      );
      if (firstLink) {
        firstLink.classList.add("active");
      }
    }, 100);
  }
});
