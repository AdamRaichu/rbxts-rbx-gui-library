interface RadialMenu {
  /**
   * Creates a radial menu divided into `subN` sections
   * where the ring is `tPercent` width of the frame radius
   * and the ring is rotationally offset by `rotation` radians
   *
   * @param subN [integer] The number of sections
   * @param tPercent [float] The width of the frame radius
   * @param rotation [float] The rotation of the menu in radians.
   */
  new (subN: number, tPercent: number, rotation: number): RadialMenu;

  /**
   * The container frame for the radial menu. Can be used for
   * positioning and resizing. Note that this frame should
   * always be square, by default it's set to YY size constraining
   */
  Frame: Instance;
}

declare const RadialMenu: RadialMenu;
export = RadialMenu;
