var PWeb = (function () {
    return {
        render: function (id, component) {
            const root = ReactDOM.createRoot(document.getElementById(id));
            root.render(component);
        }
    }
}());

PWeb.render("root", <Recipe drinkers={500} />)