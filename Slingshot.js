class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        //to load the sling images
        this.image1 = loadImage("sprites/sling1.png");
        this.image2= loadImage("sprites/sling2.png");
        this.image3= loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //to create the catapult structure
        image(this.image1,250,20)
        image(this.image2,220,20)
        
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(84,39,15);
            //thin rubber band if bird is on the right side
            if(pointA.x>250){
                //give thickness to the stroke
                strokeWeight(3);
                //joining the bird and the right side of the catapult
                line(pointA.x-25, pointA.y, pointB.x+25, pointB.y);
                //joining the bird and the left side of the catapult
                line(pointA.x-25, pointA.y, pointB.x-20, pointB.y+5);
            }
            //thick rubber band if bird is on the right side
            else
                {strokeWeight(7);
                line(pointA.x-25, pointA.y, pointB.x+25, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x-20, pointB.y+5);}
        
        }
    }
    
}