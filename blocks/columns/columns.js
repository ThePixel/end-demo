export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector("picture");
      if (pic) {
        const picWrapper = pic.closest("div");
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add("columns-img-col");
        }
      }
    });
  });

  //Column Headers
  const columnHeader = document.querySelectorAll(
    ".columns-container:nth-child(1) > .columns-wrapper:nth-of-type(1) div p strong, \
  .columns-container:nth-of-type(2) > .default-content-wrapper p, \
  .columns-container:nth-child(3) > .columns-wrapper:nth-of-type(1) div p strong, \
  .columns-container:nth-child(5) > .columns-wrapper:nth-of-type(1) div:nth-child(1) "
  );

  columnHeader.forEach((element) => {
    if (element) {
      element.classList.add("column-headers");
    }
  });

  //View all buttons
  const viewAllElements = document.querySelectorAll(
    ".columns-container:nth-child(1) > .columns-wrapper:nth-of-type(1) div:nth-child(2) p, \
    .columns-container:nth-child(3) > .columns-wrapper:nth-of-type(1) div:nth-child(2), \
    .columns-container:nth-child(5) > .columns-wrapper:nth-of-type(1) div:nth-child(2) p "
  );

  viewAllElements.forEach((element) => {
    if (element) {
      element.classList.add("view-all-button");
    }
  });

  //Latest Products
  const latestProductText = document.querySelectorAll(
    ".columns-container:nth-of-type(1) > .columns-wrapper:nth-of-type(2) p:nth-child(2), \
    .columns-container:nth-of-type(1) > .columns-wrapper:nth-of-type(2) p:nth-child(3), \
    .columns-container:nth-of-type(1) > .columns-wrapper:nth-of-type(2) p:nth-child(4) "
  );

  latestProductText.forEach((element) => {
    if (element) {
      element.classList.add("latest-product-text");
    }
  });

  //Trending
  const trending = document.querySelectorAll(".columns-container:nth-child(2)");

  trending.forEach((element) => {
    if (element) {
      element.classList.add("trending-section");
    }
  });

  //Launches
  const launches = document.querySelectorAll(
    ".columns-container:nth-child(3)> .columns-wrapper:nth-of-type(2) div > div:nth-child(1) \
    > div p:nth-child(1), .columns-container:nth-child(3) > .columns-wrapper:nth-of-type(2) \
    div > div:nth-child(1) > div p"
  );

  launches.forEach((element) => {
    if (element) {
      element.classList.add("launches-section");
    }
  });

  //Featured
  const featuredBrand = document.querySelectorAll(
    ".columns-container:nth-child(4) > .columns-wrapper div:nth-child(1)"
  );

  featuredBrand.forEach((element) => {
    if (element) {
      element.classList.add("featured-brand");
    }
  });

  //Nested Columns
  const nestedColumns = document.querySelectorAll(
    ".columns-container:nth-child(4) > .columns-wrapper > .columns-2-cols"
  );

  nestedColumns.forEach((element) => {
    if (element) {
      element.classList.add("nested-columns");
    }
  });

  //Latest Sneakers
  const latestSneakers = document.querySelectorAll(
    ".columns-container:nth-child(5) \
  > .columns-wrapper:nth-of-type(2) div"
  );

  latestSneakers.forEach((element) => {
    if (element) {
      element.classList.add("latest-sneakers");
    }
  });

  //Banner Section
  const bannerSection = document.querySelectorAll(
    ".columns-container:nth-child(6)"
  );

  bannerSection.forEach((element) => {
    if (element) {
      element.classList.add("banner-section");
    }
  });

  // SHOP NOW > onhover animation
  const button = document.querySelector(
    "  .columns-container:nth-child(4)> .columns-wrapper> .columns-2-cols div:nth-child(2) div:nth-child(1) p:nth-child(2)"
  );

  button.addEventListener("mouseover", () => {
    button.style.opacity = 0.5;
  });

  button.addEventListener("mouseout", () => {
    button.style.opacity = 1;
  });

  // Banner SHOP NOW
  const bannerButton = document.querySelector(
    ".banner-section p em:nth-child(2) a"
  );

  if (bannerButton) {
    bannerButton.addEventListener("mouseover", () => {
      bannerButton.style.backgroundColor = "white";
      bannerButton.style.color = "black";
      bannerButton.style.opacity = 0.5;
    });

    bannerButton.addEventListener("mouseout", () => {
      bannerButton.style.backgroundColor = "transparent";
      bannerButton.style.color = "white";
      bannerButton.style.opacity = 1;
    });
  } else {
    console.error("Banner button not found.");
  }
}
