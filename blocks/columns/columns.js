import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add('columns-img-col');

          const img = pic.querySelector('img');
          if (img) {
            const optimizedPicture = createOptimizedPicture(
              img.src,
              img.alt,
              false,
              [{ width: '800', height: 'auto' }]
            );
            pic.replaceWith(optimizedPicture);
          }
        }
      }
    });
  });

  //Christopher - Shipping
  changeShippingColor();
}

// replacing string to add a span to be able to style the dates in color green 
function changeShippingColor()
{
    const getShippingString = document.querySelectorAll(`.section-desc ul li:has(br)`);
    
    if(getShippingString.length != 0)
    {
      for(var i = 0;i < 3;++i)
        {
          getShippingString[0].innerHTML = getShippingString[0].innerHTML.replace("Fri 2 Aug - Mon 5 Aug",`<span class="green-text">Fri 2 Aug - Mon 5 Aug</span>`);
          getShippingString[1].innerHTML = getShippingString[1].innerHTML.replace("Fri 2 Aug - Mon 5 Aug",`<span class="green-text">Fri 2 Aug - Mon 5 Aug</span>`);
          getShippingString[2].innerHTML = getShippingString[2].innerHTML.replace("Fri 2 Aug - Mon 5 Aug",`<span class="green-text">Fri 2 Aug - Mon 5 Aug</span>`); 
        }
    }
}