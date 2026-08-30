function initPCB() {
    console.log("PCB initialized");
    let pulseOffset = 0;
    
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
    const connections = [];
    const nodeCount = window.matchMedia("(max-width: 767px)").matches ? 32 : 100;

    for(let i = 0; i < nodeCount; i++){

        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height
        });

    }

    for (const a of nodes) {
    for (const b of nodes) {

        const distance = Math.hypot(
            a.x - b.x,
            a.y - b.y
        );

        if (distance < 250 && distance > 0) {

            if (Math.random() < 0.20) {

    connections.push({
        start: a,
        end: b,
        hasPulse: Math.random() < 0.2
    });

}

        }
    }
}


    function draw(){
        pulseOffset += 0.003;
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

     connections.forEach(line => {

    const midX =
        (line.start.x + line.end.x) / 2;

    const midY =
        (line.start.y + line.end.y) / 2;

    const distanceToMouse =
        Math.hypot(
            midX - mouseX,
            midY - mouseY
        );

    const maxDistance = 200;

    const intensity =
        Math.max(
            0,
            1 - distanceToMouse / maxDistance
        );

    ctx.beginPath();

    ctx.moveTo(
        line.start.x,
        line.start.y
    );

    ctx.lineTo(
        line.end.x,
        line.end.y
    );

    ctx.strokeStyle =
        `rgba(${traceColor},${0.20 + intensity * 0.9})`;

    ctx.lineWidth =
        1 + intensity * 2;

    ctx.stroke();

});
    connections.forEach(line => {
         if (!line.hasPulse) return;

    const t =
        (pulseOffset % 1);

    const x =
        line.start.x +
        (line.end.x - line.start.x) * t;

    const y =
        line.start.y +
        (line.end.y - line.start.y) * t;

    ctx.beginPath();

   ctx.arc(x, y, 4, 0, Math.PI * 2);

const pulseColor =
    isDark
        ? "#DBC6A5"
        : "#6BAB4F";

ctx.fillStyle = pulseColor;

ctx.shadowBlur = 10;
ctx.shadowColor = pulseColor;
    ctx.fill();
    ctx.shadowBlur = 0;

});


        requestAnimationFrame(draw);

    }


    draw();

}
