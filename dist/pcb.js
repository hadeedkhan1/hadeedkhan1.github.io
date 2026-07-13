function initPCB() {
    console.log("PCB initialized");
    
    let mouseX = -1000;
    let mouseY = -1000;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    const canvas = document.getElementById("pcb-background");
    const ctx = canvas.getContext("2d");

    let width;
    let height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    resize();

    window.addEventListener("resize", resize);


    const nodes = [];

    for(let i = 0; i < 100; i++){

        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height
        });

    }


    function draw(){
        const isDark =
    document.documentElement
        .classList
        .contains("dark");

const nodeColor =
    isDark
        ? "219,198,165"
        : " 107, 171, 79";

const traceColor =
    isDark
        ? "219,198,165"
        : " 107, 171, 79";
        ctx.clearRect(0,0,width,height);


        // nodes
        nodes.forEach(node=>{

            ctx.beginPath();
            ctx.arc(
                node.x,
                node.y,
                3,
                0,
                Math.PI*2
            );

    const distanceToMouse = Math.hypot(
        node.x - mouseX,
        node.y - mouseY
    );

   const maxDistance = 150;

const intensity =
    Math.max(
        0,
        1 - distanceToMouse / maxDistance
    );

ctx.fillStyle =
    `rgba(${nodeColor},${0.25 + intensity * 0.95})`;

ctx.shadowBlur =
    intensity * 1.1;

ctx.shadowColor =
    isDark
        ? "#DBC6A5"
        : "#6BAB4F";

    ctx.fill();

    ctx.shadowBlur = 0;

        });


        // connections

        nodes.forEach(a=>{

            nodes.forEach(b=>{

                const distance =
                Math.hypot(
                    a.x-b.x,
                    a.y-b.y
                );


                if(distance < 180){

    const midX = (a.x + b.x) / 2;
    const midY = (a.y + b.y) / 2;

    const distanceToMouse =
        Math.hypot(
            midX - mouseX,
            midY - mouseY
        );

    const maxDistance = 150;

    const intensity =
        Math.max(
            0,
            1 - distanceToMouse / maxDistance
        );

    ctx.beginPath();

    ctx.moveTo(a.x,a.y);
    ctx.lineTo(b.x,b.y);

  ctx.strokeStyle =
    `rgba(${traceColor},${0.15 + intensity * 0.98})`;

    ctx.lineWidth =
        1 + intensity * 2;

        ctx.shadowBlur =intensity * 
    intensity * 15;

ctx.shadowColor =
    isDark
        ? "#DBC6A5"
        : "#6BAB4F";

    ctx.stroke();
    ctx.shadowBlur = 0;
}

            })

        })


        requestAnimationFrame(draw);

    }


    draw();

}