AFRAME .registerComponent("flying-birds", {
    init:function()
    {
        for(var i=1;i<=20;i++)
        {
            var id=`hurdles${i}`;
            var posX=Math.floor(Math.random()*3000+ -1000);
            var posY=Math.floor(Math.random()*2+ -1);
            var posZ=Math.floor(Math.random()*3000+ -1000);
            var position={x: posX, y: posY, z: posZ};
            this.flyingBirds(id, position)
        }
    },
    flyingBirds:(id, position)=>{
        var terrainE1=document.querySelector("#terrain");
        var birdE1=document.createElement("a-entity");
        birdE1.setAttribute("id", id);
        birdE1.setAttribute("position", position);
        birdE1.setAttribute("scale", {x:500, y:500, z:500});
        var birdE1=document.createElement("a-entity");
        birdE1.setAttribute(
            "gltf-model",
            "./assets/models/flying_bird/scene.gltf"
        )
        birdE1.setAttribute("animation-mixer", {
            
        });
        terrainE1.appendChild(birdE1);
    }
})