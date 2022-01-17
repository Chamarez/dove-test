
export class CartesianPlane {
    private slope: number ;
    private yIntercept: number;


    constructor(slope: number, yIntercept: number) {
            this.slope = slope;
            this.yIntercept = yIntercept;
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

}

const cartesianPlaneOne = new CartesianPlane(0, 5)
const cartesianPlaneTwo = new CartesianPlane(0 / 2, 5)
console.log(cartesianPlaneOne.isParallel(cartesianPlaneTwo))
console.log(cartesianPlaneOne.isPerpendicular(cartesianPlaneTwo))
console.log(cartesianPlaneOne)

