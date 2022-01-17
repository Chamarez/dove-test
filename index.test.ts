import { CartesianPlane } from './index'

describe("test new Object", () => {
  const cartesianPlaneOne = new CartesianPlane(5, 2);
  const perpendicular = new CartesianPlane(-1/5, 2);
  const parallel = new CartesianPlane(5, 12);
  
  it("should be parallel", () => {
    expect(cartesianPlaneOne.isParallel(parallel)).toBe(true);
  });
  it("should be perpendicular", () => {
    expect(cartesianPlaneOne.isPerpendicular(perpendicular)).toBe(true);
  });
  it("create new Object", () => {
    const perpendicular = new CartesianPlane(4, 3);
    expect(perpendicular).toBeDefined();
  });
  it("should not be perpendicular", () => {
    expect(cartesianPlaneOne.isPerpendicular(parallel)).toBe(false);
  });
  it("should not be parallel", () => {
    expect(cartesianPlaneOne.isParallel(perpendicular)).toBe(false);
  });

  it("should be parallel slope 0 ", () => {
    const cartesianPlaneZero = new CartesianPlane(0, 5)
    const cartesianPlaneSlopeZero = new CartesianPlane(0 / 2, 5)
    expect(cartesianPlaneZero.isParallel(cartesianPlaneSlopeZero)).toBe(true);
  });


});