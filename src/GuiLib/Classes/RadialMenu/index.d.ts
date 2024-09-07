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
  Frame: Frame;
  /**
   * [float]
   *
   * The rotation offset that the developer entered as
   * an argument when creating the radial menu.
   */
  Rotation: number;
  /**
   * [integer]
   *
   * The number of subsections that the developer entered
   * as an argument when creating the radial menu.
   */
  SubN: number;
  /**
   * Whether or not the radial menu is actively tracking
   * input. Defaults to true.
   */
  Enabled: boolean;
  /**
   * [float]
   *
   * Number represents a percentage from the radius that
   * will be ignored in regards to input. By default this
   * is 0.5 meaning the center 50% of the radial frame
   * ignores input
   */
  DeadZoneIn: number;
  /**
   * Number represents a percentage from the radius that
   * once passed will be ignored in regards to input. By
   * default this is `math.huge` meaning that as long as
   * you're outside of DeadZoneIn your input will not be
   * ignored.
   */
  DeadZoneOut: number;

  /**
   * Sets the properties of all the radial background UI
   *
   * @param props
   */
  SetRadialProps(this: RadialMenu, props: object): void;
  /**
   * Sets the properties of the radial dial UI
   *
   * @param props
   */
  SetDialProps(this: RadialMenu, props: object): void;
  /**
   * Depending on if MouseMovement, Touch, or a Gamepad
   * returns the directional angle that the user is
   * inputting on their device
   *
   * If input is not in deadzone range then this
   * method returns `nil`.
   *
   * @param userInputType
   *
   * @returns The angle in radians.
   */
  GetTheta(this: RadialMenu, userInputType: Enum.UserInputType): number | undefined;
  /**
   * Given a directional angle, returns the closest
   * element on the radial wheel as an index.
   *
   * @param theta The angle in radians.
   *
   * @returns [integer] The index of the element.
   */
  PickIndex(this: RadialMenu, theta: number): number;
  /**
   * Get the radial background UI at `index`.
   *
   * @param index [integer] The index of the radial
   *
   * @returns The radial background for that index.
   */
  GetRadial(this: RadialMenu, index: number): Frame;
  /**
   * Returns the radial attachment UI for that index.
   * This frame is useful for putting text or images in.
   *
   * @param index [integer] The index of the radial
   *
   * @returns the `Frame` element for the radial
   */
  GetAttachment(this: RadialMenu, index: number): Frame;
  /**
   * Check if the radial menu is visible to the
   * user or not.
   *
   * @returns whether or not the radial menu is
   * visible to the user or not.
   */
  IsVisible(this: RadialMenu): boolean;
  /**
   * Destroys the RadialMenu and all the
   * events, etc that were running it.
   */
  Destroy(this: RadialMenu): void;

  /**
   * ```ts
   * .Clicked.Connect((index: number) => {})
   * ```
   *
   * Fired when the user selects an element
   * on the radial menu.
   */
  Clicked: RBXScriptSignal;
  /**
   * ```ts
   * .Hover.Connect((oldIndex: number, newIndex: number) => {})
   * ```
   *
   * Fired when the user hovers in the direction
   * of a new element on the radial menu.
   */
  Hover: RBXScriptSignal;
}

declare const RadialMenu: RadialMenu;
export = RadialMenu;
