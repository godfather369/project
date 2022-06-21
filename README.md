
# Responsive Image Carousel Project

Description :

This web page is a project which is related to image carousel. It starts working automatically when the page is opened. Image gets changed after every time interval.

Features of the project:

- There are three parts in this project: Image Carousel, Digital Timer and Analog Timer.
- Each of them contains a reset buttuon. And all the reset buttons are in sink. Means if any of the reset buttons is pressed then all the parts will restart. And by default time is 10 seconds.
- After every 10 seconds, the degital timer restart from 10, the analog timer will restart from the initial position, and the image of image Carousel willl be changed to the next image automatically . 
- There is one more feature in header section which contains an input bar and a start button.
- Input bar can take time input from the user and the start button will assign the input to the digital timer, analog timer and image carousel as global time.
- All the reset buttons will still be functioning.

For developers : 

Functions used in this project -

1. updateTimer();

  Updates the time of ditital timer after every second.

2. resetFunc();

  It resets digital timer to starting time, analog timer to initial position and image carousel to first image, when any of the reset button is pressed.

3. rotateClock();

  Creates the rotation of the hand of the analog timer.

4. carouselImageAnimation();

  Changes the image after every time interval and creates the animation when the image gets changed.
