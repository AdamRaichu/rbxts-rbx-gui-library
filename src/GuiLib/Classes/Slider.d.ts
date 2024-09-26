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
}
