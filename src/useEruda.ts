import eruda  from "eruda";
export const useEruda = () => {
    var script = document.createElement('script'); 
     script.src="node_modules/eruda/eruda.js"; 
    document.body.append(script);
    script.onload = function () { 
      eruda.init({
        container: script,
        tool: ['console', 'elements']
      }); 
    }
}