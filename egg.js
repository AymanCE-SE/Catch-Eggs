
let count = 0;
// let acheive = document.getElementById("acheive");



document.addEventListener('DOMContentLoaded', () => {
    // Select basket
    let basket = document.getElementById('basket'); 
    let fallingEgg = document.getElementById("egg");
    let acheive = document.getElementById("acheive");
    let currentValue = parseInt(acheive.innerHTML);

    setInterval(()=>{

        window.addEventListener('mousemove', (eventObj) => {
            let leftMove= eventObj.clientX ;
            let topMove = eventObj.clientY;
            basket.style.left = leftMove -5 + "px";
            basket.style.top = topMove - 80 + "px";
            document.body.style.cursor="none";
        });
        let basketTop = basket.style.top.slice(0,-2);
        let basketLeft = basket.style.left.slice(0,-2);

        let xMove = Math.random() * window.innerWidth;
        //copying a new egg element
        let newEgg = fallingEgg.cloneNode(true);
        newEgg.style.left = `${xMove}px`;
        newEgg.style.top = `0px`;
        newEgg.style.display = "block";
        document.body.appendChild(newEgg);

        let movingY = 0;
        //moving the egg
        let MoveID = setInterval(()=>{
            movingY +=2;
            newEgg.style.top = `${movingY}px`;

            if(movingY >= window.innerHeight - 55){
        // add the breaking egg
                newEgg.src = "images/broke.png"
                acheive.innerHTML = currentValue-= 100;
                clearInterval(MoveID);
            }

            else {
                // Get the bounding rectangles of the basket and egg
                let basketRect = basket.getBoundingClientRect();
                let eggRect = newEgg.getBoundingClientRect();

                // Check for collision using rect intersection
                if (
                    basketRect.left < eggRect.right &&
                    basketRect.right > eggRect.left &&
                    basketRect.top < eggRect.bottom &&
                    basketRect.bottom > eggRect.top
                ) {
                    newEgg.remove();
                    acheive.innerHTML = currentValue+= 100;
                    clearInterval(MoveID);
                }}
        },10)


        console.log(count++)
    },600)});
