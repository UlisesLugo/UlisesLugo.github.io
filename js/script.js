window.onload = function() {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.onmouseover = function() {
            this.setAttribute("org_title", this.title);
            this.title = "";
        };
        link.onmouseout = function() {
            this.title = this.getAttribute("org_title");
        };
    }
};