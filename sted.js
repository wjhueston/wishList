$(document).ready(
    function () {
        //This first bit before my event listener is so that the rules popup will follow your mouse as your move it.
        var chryslerhero = document.getElementById('mcDisclaimer');

        window.onmousemove = function (e) {
            var x = e.clientX,
                y = e.clientY;
            chryslerhero.style.top = (y + 20) + 'px';
            chryslerhero.style.left = (x + 20) + 'px';
        };

        //Events
        $("#tabs a").click(showTab);
        //Functions
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }
    }
)