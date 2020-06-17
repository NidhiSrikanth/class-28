class Slingshot{
    constructor(bodyA,pointB){
var options= {
    bodyA: bodyA,
    pointB: pointB,
    length: 20,
    stiffness: 0.05
}
this.sling= Constraint.create(options);
World.add(world,this.sling);
this.pointB= pointB;
    }

    display(){
        if(this.sling.bodyA){
        var pointA= this.sling.bodyA.position;
       var pointB= this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

     fly() {
        this.sling.bodyA= null;
    }
}

