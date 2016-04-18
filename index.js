(function(console) {
    /**
     * Dubiously created by Adrian Cooney
     * http://adriancooney.github.io
     */
     function getBox(width, height) {
         return {
             string: "+",
             style: "font-size: 1px; padding: " + Math.floor(height/2) + "px " + Math.floor(width/2) + "px; line-height: " + height + "px;"
         }
     }
    console.image = function(url, scale, cb) {
    	scale = scale || 1;
    	var img = new Image();

    	img.onload = function() {
    		var dim = getBox(this.width * scale, this.height * scale);
    		console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;");
            cb();
    	};

    	img.src = url;
    };
    console.bigText = function(text) {
        console.log("%c" + text, "background: red; color: yellow; font-size: x-large");
    }
})(console);
console.image('https://github.com/tanhauhau/console-warning/blob/master/warning.png?raw=true', function(){
    console.bigText('This is a browser feature intended for developers. If someone told you to copy-paste something here it is a scam.');
    console.bigText('Do not try anything in the console.');
});
