
export class CartesianPlane {
    private slope?: number ;
    private yIntercept?: number;

    //I used this method becouse typescript dont support multiple constructors
    constructor(slope?: number, yIntercept?: number) {
        if(slope && yIntercept){
            this.slope = slope;
            this.yIntercept = yIntercept;
        }
        if(slope || slope=== 0 ){
            this.slope = slope;
        }
        if(yIntercept || yIntercept == 0){
            this.yIntercept = yIntercept;
        }
    }

    setSlope(slope : number): void{
        this.slope = slope
    }
    setSYIntercept(yIntercept : number): void{
        this.yIntercept = yIntercept
    }

    getSlope(){
        return this.slope
    }

    getYIntercept(){
        return this.yIntercept
    }

    isParallel(CartesianPlane: CartesianPlane): boolean {
        if (this.slope == CartesianPlane.slope) {
            return true
        } else {
            return false
        }
    }

    isPerpendicular(cartesianPlane: CartesianPlane): boolean {
        if (cartesianPlane.slope && this.slope === (-(1 / cartesianPlane.slope))) {
            return true
        }
        return false
    }

    toString(){
        let plane =  `${this.slope}x+${this.yIntercept}`
        if(plane.includes("+-")){
            plane = plane.replace("+", "")  
        }
        return plane
    }



}

const cartesianPlaneOne = new CartesianPlane(0, 5)
const cartesianPlaneTwo = new CartesianPlane(0 / 2, 5)

console.log(cartesianPlaneOne.isParallel(cartesianPlaneTwo))
console.log(cartesianPlaneOne.isPerpendicular(cartesianPlaneTwo))
console.log(cartesianPlaneOne)

const cartesianPlaneVoid = new CartesianPlane()
console.log(cartesianPlaneVoid)
cartesianPlaneVoid.setSlope(-4)
cartesianPlaneVoid.setSYIntercept(+5)
console.log(cartesianPlaneVoid)
console.log(cartesianPlaneVoid.toString())