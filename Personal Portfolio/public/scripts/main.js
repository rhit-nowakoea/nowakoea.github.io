stickyElem = 
            document.querySelector(".sticky"); 
  
        /* Gets the amount of height 
        of the element from the 
        viewport and adds the 
        pageYOffset to get the height 
        relative to the page */ 
        currStickyPos =  
          stickyElem.getBoundingClientRect().top + window.pageYOffset; 
  
        window.onscroll = function() { 
  
            /* Check if the current Y offset 
            is greater than the position of 
            the element */ 
            if (window.pageYOffset > currStickyPos) { 
                stickyElem.style.position = "fixed"; 
                stickyElem.style.top = "0px"; 
            } else { 
                stickyElem.style.position = "relative"; 
                stickyElem.style.top = "initial"; 
            } 
        } 

        var siteHeader = document.getElementById('siteHeader'),
    siteNav = document.getElementById('siteNav');

    window.onscroll = function() {
        if ( siteNav.offsetTop < document.documentElement.scrollTop + 26 || siteNav.offsetTop < document.body.scrollTop + 26) {
            siteHeader.setAttribute("class","sticky");
        }
        else {
            siteHeader.setAttribute("class","");
        }
    }