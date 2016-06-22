(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "  <footer>\n    <p class=\"copyright\">Sitio web realizado por un amante de la cerveza</p>\n  </footer>\n";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "  <header>\n    <div class=\"container\">\n      <img src=\"img/logo.png\" alt=\"logo cerveza\" class=\"logo\">\n      <h1 class=\"title\">Mis cervezas</h1>\n      <p class=\"subtitle\">Aficiones y locuras de un amante de la cerveza</p>\n      <nav>\n        <button onclick=\"toggle_visibility('menu');\" class=\"btnmenu\">Menu</button>\n        <ul id=\"menu\" class=\"menu\">\n          <li class=\"menuitem\"><a href=\"index.html\" class=\"menulink\">Inicio</a></li>\n          <li class=\"menuitem\"><a href=\"cervezas.html\" class=\"menulink\">Cervezas</a></li>\n          <li class=\"menuitem\"><a href=\"contactar.html\" class=\"menulink\">Contactar</a></li>\n        </ul>\n      </nav>\n    </div>\n  </header>\n";
},"useData":true});
})();