### CSS Grid 

- Think of it as a container only 
- Just like an excel sheet with rows and columns 

1. Continuing blog.html
2. Adding content in <main>
3. Grid gaps/gutter
4. Inline CSS > ID Based CSS > Classes based CSS > internal/external CSS
5. Float can overlap
6. `float` and `clear` are imp to understand in CSS
7. **The clear Property**
When we use the float property, and we want the next element below (not on right or left), we will have to use the clear property.

The clear property specifies what should happen with the element that is next to a floating element.

The clear property can have one of the following values:

- none - The element is not pushed below left or right floated elements. This is default
- left - The element is pushed below left floated elements
- right - The element is pushed below right floated elements
- both - The element is pushed below both left and right floated elements
- inherit - The element inherits the clear value from its parent

When clearing floats, you should match the clear to the float: If an element is floated to the left, then you should clear to the left. Your floated element will continue to float, but the cleared element will appear below it on the web page.

---
### Bootstrap 

1. Ways to get Bootstrap CSS
   1. via CDN links
   2. via downloading their file in our local
   3. via packet managers