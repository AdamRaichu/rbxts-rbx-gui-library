/**
 * This module provides a set of functions useful for generating lists that can be scrolled through.
 *
 * This module only has one function:
 * ```lua
 * List.Create(
 * 	string[] list, -- an array of strings used to generate instances for the list
 * 	integer scrollMax, -- the maximum number of elements visible in the scroll frame at any given time. Defaults to math.huge
 * 	enum fillDirection, -- Enum.FillDirection lets you decide if the list is vertical or horizontal. Defaults to vertical
 * 	udim padding, -- scale and offset for padding between instances. Defaults to no padding
 * 	function instanceFunc -- must return a UI object such as a frame. Defaults to creating a textbutton with a child textlabel
 * )
 * ```
 */
interface List {
  /**
   *
   * @param list an array of strings used to generate instances for the list
   * @param scrollMax [integer] the maximum number of elements visible in the scroll frame at any given time. Defaults to `math.huge`
   * @param fillDirection `Enum.FillDirection` lets you decide if the list is vertical or horizontal. Defaults to vertical
   * @param padding scale and offset for padding between instances. Defaults to no padding
   * @param instanceFunc must return a UI object such as a frame. Defaults to creating a textbutton with a child textlabel
   */
  Create(this: void, list: string[], scrollMax?: number, fillDirection?: Enum.FillDirection, padding?: UDim, instanceFunc?: () => GuiObject): List;
}

declare const List: List;
export = List;
