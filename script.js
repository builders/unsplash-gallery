/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransitions-domprefixes-mq-setclasses-shiv-testallprops-testprop !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,i,s;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),C.push((o?"":"no-")+s.join("-"))}}function a(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?b.className.baseVal=t:b.className=t)}function i(e,t){return!!~(""+e).indexOf(t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?u(o,n||t):o);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var a=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(a){var i=a.error?"error":"log";a[i].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function p(){var e=t.body;return e||(e=s(w?"svg":"body"),e.fake=!0),e}function m(e,n,r,o){var a,i,l,u,c="modernizr",f=s("div"),d=p();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:c+(r+1),f.appendChild(l);return a=s("style"),a.type="text/css",a.id="s"+c,(d.fake?d:f).appendChild(a),d.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),i=n(f,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=u,b.offsetHeight):f.parentNode.removeChild(f),!!i}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+f(t[o])+":"+r+")");return a=a.join(" or "),m("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function g(e,t,o,a){function u(){f&&(delete j.style,delete j.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var c=h(e,o);if(!r(c,"undefined"))return c}for(var f,d,p,m,g,v=["modernizr","tspan","samp"];!j.style&&v.length;)f=!0,j.modElem=s(v.shift()),j.style=j.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=j.style[m],i(m,"-")&&(m=l(m)),j.style[m]!==n){if(a||r(o,"undefined"))return u(),"pfx"==t?m:!0;try{j.style[m]=o}catch(y){}if(j.style[m]!=g)return u(),"pfx"==t?m:!0}return u(),!1}function v(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+N.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,o,a):(s=(e+" "+_.join(i+" ")+i).split(" "),c(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var C=[],S=[],E={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr;var b=t.documentElement,w="svg"===b.nodeName.toLowerCase();w||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function a(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function i(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),l=s.length;l>i;i++)o.createElement(s[i]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=a(e);return!C.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:i,createDocumentFragment:s,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var x="Moz O ms Webkit",_=E._config.usePrefixes?x.toLowerCase().split(" "):[];E._domPrefixes=_;var N=E._config.usePrefixes?x.split(" "):[];E._cssomPrefixes=N;var z={elem:s("modernizr")};Modernizr._q.push(function(){delete z.elem});var j={style:z.elem.style};Modernizr._q.unshift(function(){delete j.style});E.testProp=function(e,t,r){return g([e],n,t,r)};E.testAllProps=v,E.testAllProps=y,Modernizr.addTest("csstransitions",y("transition","all",!0));var P=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return m("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();E.mq=P,o(),a(C),delete E.addTest,delete E.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);


/*--------------------------------*/
/* Unsplash Gallery               */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var main = function() {

  var count = 0;
  var windowResize = 0;
  var body = $('body');
  var menu = $('.menu');
  var menuButton = $('.menu-button');
  var closeButton = $('.close-button');
  var navItems = $('.nav a');
  var menuClick = 0;
  var closeClick = 0;
  var navClick = 0;
  var loadCount = 0;
  var resizeTimer;
  var unloadTimer;
  var imageFetch = {
    on: false,
    timer: null,
    timeout: 250
  };
  var unique = true;
  var numItemsToGenerate = 24; //how many gallery items you want on the screen
  var numImagesAvailable = 1000; //the number of images available in the collection
  var imageWidth = 800; //desired image width in pixels
  var imageHeight = 640; //desired image height in pixels
  var collectionID = 1163637; //the collection ID from the original url
  var collectionTitle = "Architectural Lines"; //the collection ID from the original url
  var collectionDesc = "Metal and glass, concrete and wood, straight lines and curves.";
  var mQuery = Modernizr.mq('(min-width: 750px)');
  var gallery = $('.cards');
  var galleryItems = $('.cards li');
  var cards = galleryItems;
  var galleryLoaded = true;

  // Generate random image gallery on page load
  // var unsplashImages = getUnsplashImages(true);

  // Hide cards on page load
  // cards.css({opacity: 0});

  addClickEvents();

  $(window).on('resize', function(e) {

    removeClickEvents();
    resetMenu();

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      windowResize++;
      // console.log("Window resized: " + windowResize);
      addClickEvents();
    }, 200);
  });

  function lazyLoad() {

    // https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/
    [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = function() {
        img.removeAttribute('data-src');
      };
    });
  }

  function testQuery() {
    return mQuery = Modernizr.mq('(min-width: 750px)');
  }

  function addClickEvents() {

    testQuery();

    menuButton.on('click', function(e) {
      menuClick++;
      // console.log("Menu clicked: " + menuClick);
      menu.animate({left: 0}, 200);
      if (mQuery) {
        body.animate({marginLeft: '320px'}, 250).addClass('open');
      } else {
        body.addClass('open');
      }
    });
    closeButton.on('click', function(e) {
      closeClick++;
      // console.log("Close clicked: " + closeClick);
      menu.animate({left: '-320px'}, 200);
      if (mQuery) {
        body.animate({marginLeft: 0}, 200).removeClass('open');
      } else {
        body.removeClass('open');
      }
    });

     navItems.on('click', function(e) {
       navClick++;
       // console.log("Nav clicked: " + navClick);
       clickGalleryMenu(this);
       unloadCards();
     });

  }

  function resetMenu() {
    body.css({marginLeft: 0}).removeClass('open');
    menu.css({left: -320});
  }

  function removeClickEvents() {
    menuButton.off('click');
    closeButton.off('click');
    navItems.off('click');
  }

  function positionCards() {
    if (cards instanceof jQuery) {
      cards.each(function(index, value) {
        var topValue = ((index + 3) * 200) + 1000 + "px";
        $(this).css({top: topValue, opacity: 0});
      });
    }
  }

  function loadCards() {
    loadCount++;
    console.log("===================================");
    console.log("Loading");
    console.log("-----------------------------------");
    console.log("loadCount: " + loadCount);
    if (galleryLoaded) {
      console.log("Cards already loaded");
      animateCards();
    } else {
      animateCards();
    }
  }

  function animateCards() {
    if (cards instanceof jQuery) {
      cards.each(function(index, value) {
        var delayValue = (index * 150);
        $(this).delay(delayValue).animate({top: 0, opacity: 1}, 400, "swing", countingCards(loadCompleted));
      });
    }
  }

  function loadCompleted() {
    galleryLoaded = true;
    console.log("Load Completed");
  }

  function unloadCards() {
    console.log("===================================");
    console.log("Unloading");
    console.log("-----------------------------------");
    galleryLoaded = false;
    if (cards instanceof jQuery) {
      cards.each(function(index, value) {
        var reverse = Math.abs(index - cards.length);
        var topValue = ((index + 3) * 200) + 1000 + "px";
        var delayValue = (reverse * 30);
        $(this).delay(delayValue).animate({top: topValue, opacity: 0}, 400, "swing", countingCards(unloading));
      });
    }
  }

  function unloading() {
    unloadTimer = setTimeout(function() {
      getNewImageCollection();
    }, 1000);
  }

  function getNewImageCollection() {
    clearTimeout(unloadTimer);
    if (collectionID) {
      getUnsplashImages(true);
    } else {
      loadOriginalImageCollection();
    }
  }

  function loadOriginalImageCollection() {
    cards = galleryItems;
    replaceGallery(cards);
    positionCards();
    loadCards();
  }

  function shuffleAndLoadCards() {
    clearTimeout(unloadTimer);
    cards = shuffle(cards);
    replaceGallery(cards);
    positionCards();
    loadCards();
  }

  function replaceGallery(items) {
    gallery.empty();
    for(let i = 0; i < items.length; i++) {
      gallery = gallery.append(items[i]);
    }
  }

  function shuffle(items) {
    return items.slice().sort(function() { return 0.5 - Math.random() });
  }

  function countingCards(func = null) {
    count++;
    // console.log("image " + count);
    if (count >= cards.length) {
      count = 0;
      if (func) {
        func();
      }
    }
  }

  function clickGalleryMenu(item) {
    collectionID = item.dataset.cid;
    collectionTitle = item.dataset.ctitle;
    collectionDesc = item.dataset.cdesc;
    numImagesAvailable = item.dataset.cavail;

    navItems.removeClass('selected');
    $(item).addClass('selected');
  }

  function getUnsplashImages(render = false) {
    // https://medium.com/quick-code/how-to-quickly-generate-a-random-gallery-of-images-from-an-unsplash-collection-in-javascript-4ddb2a6a4faf

    console.log("===================================");
    console.log(collectionTitle);
    console.log("-----------------------------------");
    console.log("collectionID: " + collectionID);
    console.log("collectionTitle: " + collectionTitle);
    console.log("collectionDesc: " + collectionDesc);
    console.log("numImagesAvailable: " + numImagesAvailable);
    console.log("-----------------------------------");

    var imageCount = 0;
    let images = [];

    for(let i = 0; i < numItemsToGenerate; i++){
      let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
      getImage(randomImageIndex, unique);
    }

    function startFetchTimer (time = imageFetch.timeout) {
      imageFetch.on = true;
      imageFetch.timer = setTimeout(function() {
        stopFetchTimer(renderImages);
      }, time);
    }

    function stopFetchTimer(callback = null) {
      clearTimeout(imageFetch.timer);
      imageFetch.on = false;
      if (callback) {
        console.log("Fetch timer timed out");
        callback();
      }
    }

    function getImage(randomNumber){
      fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
      .then((response)=> {
        if (!galleryLoaded) {
          if (unique) {
            if (isUnique(images, response.url)) {
              images.push(response.url);
              imageCount++;
              console.log("image " + imageCount);
              stopFetchTimer();
              startFetchTimer();
            }
          } else {
            images.push(response.url);
            imageCount++;
            // console.log("image " + imageCount);
          }
        } else {
          // console.log("Gallery already loaded");
          // console.log("image " + imageCount);
          // console.log("Number of images: " + images.length);
          return;
        }
        // if (!unique && imageCount >= numItemsToGenerate && render) {
        //   renderUnsplashGallery(images, collectionID, collectionTitle, collectionDesc);
        //   return images;
        // } else {
        //   if (!imageFetch.on) {
        //     startFetchTimer(imageFetch.timeout);
        //   }
        // }
      });
    }

    function renderImages() {
      console.log("Render Images");
      renderUnsplashGallery(images, collectionID, collectionTitle, collectionDesc);
      return images;
    }

  }

  function renderUnsplashGallery(images, collectionID, collectionTitle, collectionDesc) {
    var newGallery = $('<ul />').addClass('cards');
    for(let i = 0; i < images.length; i++){
      var galleryItem = document.createElement('li');
      var html = `
        <a href="https://unsplash.com/collections/${collectionID}">
          <img data-src="${images[i]}" alt="Photo from Unsplash" />
          <div class="caption"><span class="caption-title">${collectionTitle}</span><span class="caption-desc">${collectionDesc}</span></div>
        </a>
      `;
      galleryItem.innerHTML = html;
      galleryItem = $(galleryItem);
      newGallery.append(galleryItem);
    }
    cards = newGallery.find('li');
    replaceGallery(cards);
    lazyLoad();
    positionCards();
    loadCards();
    console.log("Unsplash images loaded");
  }

  function isUnique(array, value) {
    for(let i = 0; i < array.length; i++){
      if (array[i] == value) {
        return false;
      }
    }
    return true;
  }

};

$(document).ready(main);
