export const useEruda = () => {
    var script = document.createElement('script'); 
    script.src="https://cdn.jsdelivr.net/npm/eruda"; 
    document.body.append(script);
    script.onload = function () { 
      eruda.init(); 
    }
}