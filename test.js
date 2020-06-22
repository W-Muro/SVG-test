window.onload =　function() {
    // const circle = document.getElementsByTagName("circle");

    // for (let i = circle.length - 1; i >= 0; i--){
    //     hoverAction(circle[i]);
    // }
    document.querySelectorAll('circle').forEach((circle) => hoverAction(circle))
}

function hoverAction(hoverDOM){
    hoverDOM.addEventListener("mouseover", function() {
        let r = hoverDOM.getAttribute("r");
        r = Number(r);
        hoverDOM.setAttribute("r", r + 2);
    });

    hoverDOM.addEventListener("mouseout", function() {
        let r = hoverDOM.getAttribute("r");
        r = Number(r);
        hoverDOM.setAttribute("r", r - 2);
    });
}