var canvas;
window.addEventListener("load",()=>{
            canvas=document.getElementById("canva");
            console.log(canvas)
            const ctx=canvas.getContext("2d");


            //resizing
            canvas.height=window.innerHeight;
            canvas.width=window.innerWidth;

            let painting=false;
            function startPos(e) {
                painting=true;
                draw(e)
            }
            function finishedpos() {
                painting=false;
                ctx.beginPath();
                draw(e)
            }
            function draw(e) {
                if(!painting) return;
                ctx.lineWidth=5;
                ctx.lineCap="round";
                ctx.lineTo(e.clientX,e.clientY);
                ctx.stroke();
                
               
                
            }
            canvas.addEventListener("mousedown",startPos);
            canvas.addEventListener("mouseup",finishedpos);
            canvas.addEventListener("mousemove",draw)
});
window.addEventListener("resize",()=>{
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
});