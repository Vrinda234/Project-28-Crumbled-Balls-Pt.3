class slingshot {
    constructor(b1,b2){
        var options = {
            bodyA: b1,
            pointB: b2,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = b2;
        this.sling = Con.create(options)
        World.add(world,this.sling)
    
    }
    fly(){
      this.sling.bodyA = null
    }
      display(){
        if(this.sling.bodyA){
    
        
        var p1 = this.sling.bodyA.position
        var p2 = this.pointB
        strokeWeight(4)
        line(p1.x,p1.y,p2.x,p2.y)
        }
      }
    }