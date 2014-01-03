version 0.0.6 
December 31, 2013

- Support added for alpha fading.
- Moved the Visible dependency of the Animatable to the module itself instead of implementation side
- Added sound module.
- Added rotatable component.
- Added scalable component.
- Fixed unit test enviroment.
- Added a math module for defining Polygons.
- Added fadable component.

version 0.0.5 
December 29, 2013

- #23: Fix for zindex of visibles so they are sorted correctly in all cases
- #36: Fixed start frame for animatables so it starts at one (more intuitive)
- #38: Using Sugar removeObject for removing objects from game loop

version 0.0.4 
December 20, 2013

- #20: Added support for position animations (Movable component)
- #22: Created average framerate counter
- #25: Added a maximum time to deltaT, fixes position issues

version 0.0.3 
December 18, 2013

- #11: Debugbar style should come with glue stylesheet
- #13: Made visible required for animatables
- #18: Added pointerUp support for clickables

version 0.0.2 
December 17, 2013

- Glue Math
  - #10: Add iterate method to math/matrix and refactor m x n

- Fixed animationframe fallback bug for stock Android browsers

version 0.0.1   
December 6, 2013 - Inception

- Glue Game
  - Component management
  - System events
  - Browser events

- Components
  - Base
  - Animatable
  - Clickable
  - Draggable
  - Droptarget
  - Hoverable
  - Visible

- Math
  - Dimension
  - Matrix
  - Rectangle
  - Vector

- Examples
  - Drag & Drop
    - Basic
    - Droptarget
    - Multi
  - Animation
    - Animatable
    - Simple movement
  - Games
    - Inspector Dan
    - Jailbreaker

- Asset loader
- Sugar