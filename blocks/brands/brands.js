export default function GetBrandsName(block)
{
    const imgPlaceHolder = document.querySelector('.brands-letters picture');
    const brandText = document.querySelector('.brands-letters p:nth-child(3)');
    const featured = document.querySelector('.brands-letters p:nth-child(2)');

    imgPlaceHolder.setAttribute("id","img-brand-placeholder");
    brandText.setAttribute("id","brand-text");
    featured.setAttribute("id","featured-text");

    document.querySelectorAll(`.brands-name-section ul li a`).forEach((brand) =>
    {
        brand.addEventListener("mouseover", (event) => {
            event.preventDefault();
            
            if(document.getElementById("img-brand-placeholder") !== null)
            {
                const cloneImage = brand.previousSibling.cloneNode(true);
                document.getElementById("img-brand-placeholder").replaceWith(cloneImage);
            }
            else
            {
                const replacedImageHolder = document.querySelector('.brands-letters picture')
                replacedImageHolder.setAttribute("id","img-brand-placeholder");
                document.getElementById("img-brand-placeholder")
            }
            changeBrandNameInSideSection(brand.innerHTML);
        });
    });
}

function changeBrandNameInSideSection(brandName)
{   
    document.getElementById("brand-text").innerHTML = brandName;
    document.getElementById("featured-text").style.display = "none";
}