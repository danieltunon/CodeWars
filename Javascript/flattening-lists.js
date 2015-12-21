/* Not working because the prob didn't state that it only wanted
 * to flatten 1 layer. My function flattens all the way.
 * 
 * 
 * function flatten(l){
 *   var result = [];
 *   function flatItem (item) {
 *     if( !Array.isArray(item)) {
 *       result.push(item);
 *     } else {
 *       item.forEach( e => flatItem(e));
 *     }
 *   }
 *   flatItem(l);
 *   return result;
 * }
 * 
 */

function flatten(l){
  var result = [];
  l.forEach( e => Array.isArray(e) ? e.forEach (j => result.push(j)) : result.push(e));
  return result;
}