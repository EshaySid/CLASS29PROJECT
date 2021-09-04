class Link{

    constructor(bodyA,bodyB){
        var lastlink= bodyA.bodies.length-2;
        this.link=Constraint.create({
            bodyA:bodyA.bodies[lastlink],
            pointA:{x:0, y:0},
            bodyB: bodyB.body,
            pointB:{x:0, Y:0},
            length:100,
            stiffness:0.8

        })

        World.add(world,this.link);
    }
}