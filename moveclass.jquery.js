/*!
 * jQuery Plugin -- MoveClass
 *
 * Copyright 2014 Max GJ Panas <m@maxpanas.com>
 * License MIT <http://opensource.org/licenses/MIT>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function ($) {
  'use strict';


	/**
	 * moveClass allows you to move
	 * a class from one element in
	 * a group of elements to another
	 * element in the same group
	 *
	 * @usage $('.group').moveClass('active', newActiveElement);
	 *  - newActiveElement can be:
	 *    1. a jQuery Object of the new active element
	 *    2. a selector uniquely matching the new active element within the group, ie: ".big" or "#small" etc
	 *    3. the new active element's index within the group
	 *
	 * @param className
	 * @param moveTo
	 */
  $.fn.moveClass = function (className, moveTo) {
    var group = $(this),
      moveToEl = isNaN(moveTo) ? moveTo : group.eq(parseInt(moveTo, 10));

    group
      .removeClass(className)
      .filter(moveToEl)
      .addClass(className);
  };

}(jQuery));