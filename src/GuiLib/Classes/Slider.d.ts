type SliderAxis = "x" | "y";
interface SliderFrame extends Frame {
  Background: Instance;
  Dragger: Instance;
}

/**
 * This class creates a slider object which can be dragged for different values.
 */
interface Slider {
  /**
   * Creates a slider object which can be dragged for different values.
   *
   * @param frame Slider frames must have the following format:
   * - SliderFrame
   * > - Dragger
   * > - Background
   *
   * @param axis defines if the slider is horizontal `"x"` or vertical `"y"`
   */
  new (frame: SliderFrame, axis: SliderAxis): Slider;
  /**
   * Creates a slider frame from the default, simply define whether it's horizontal "x" or vertical "y".
   * @param axis the axis of the slider
   */
  Create(this: void, axis: SliderAxis): Slider;

  /**
   * The container frame for the slider. Can be used for positioning and resizing.
   */
  Frame: Frame;
  /**
   * [0, 1]
   *
   * Set this to force an interval step on the slider. For example if you only wanted steps of 1/10th then you'd write `Slider.Interval = 0.1`.
   */
  Interval: number;
  /**
   * When true the slider can be interacted with by the user, when false its values can only be set by the developer.
   */
  IsActive: boolean;
  /**
   * If true then when the user clicks on the slider the dragger will tween to that target. If not it will be instant.
   */
  TweenClick: boolean;
  /**
   * If true then the value of the slider will be inverted (e.g. when horizontal the right-most position will be zero and left-most 1). This is useful for when you have a vertical slider as typically users envision the down-most position to be zero.
   */
  Inverted: boolean;

  /**
   * Returns the slider position from 0 to 1
   */
  Get(this: Slider): number;
  /**
   * Sets the slider to a specific position or closest possible if interval > 0. If `doTween` is true then the slider will tween to that position.
   */
  Set(this: Slider, value: number, doTween: boolean): void;
  /**
   * Destroys the slider frame and all the events, etc that were running it
   */
  Destroy(this: Slider): void;

  /**
   * When the slider's position changes, this fires the slider's current position
   *
   * ```ts
   * .Connect((value: number) => {})
   * ```
   */
  Changed: RBXScriptSignal;
  /**
   * When the user clicks somewhere on the slider, this fires the clicked position
   *
   * ```ts
   * .Connect((value: number) => {})
   * ```
   */
  Clicked: RBXScriptSignal;
  /**
   * Fires when the user starts dragging the slider
   */
  DragStart: RBXScriptSignal;
  /**
   * Fires when the user stops dragging the slider
   */
  DragStop: RBXScriptSignal;
}

declare const Slider: Slider;
export = Slider;
