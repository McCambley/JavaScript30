# Custom Video Player

## Overview

This one's cool, I like this one. We removed the default controls and used some funky yet basic CSS to get custom controls up in there. Javascript is used to link the inputs to the video playback such that we can manipulate the video just as we would be with the default controls.

## How to Use

Using the player is simply. When the page loads simply hit spacebar or click with video play to play the first video. Once you've got your fill, pause the video and select a new video from the dropdown menu in the header.

As you're watching, hover over the video play to view controls. These controls allow you to view how far along you are in the video, scrub to a new location in the video, use buttons to play/pause/fast-forward/rewind playback, increase or decrease playback volume, and adjust playback speed.

Keyboard shortcuts include

- Spacebar: play/pause
- F: increase playback speed
- S: decrease playback speed
- Up-arrow: increase volume
- Down-arrow: decrease volume

## Additions to Wes's Version

Wes added lots of functionality and made it super easy to follow along. I added a few things on top of this project in order to make it my own.

- Hovering over the progress bar shows a preview of the progress bars appearance at the hover point

- Scrolling the range inputs updates the values in real time rather than on release

- Pausing the video displays a header and playing the video hides the header from view

- Selecting values from the drop down menu on the header allows users to change which video they are viewing

## Goals for Future Iterations

The project is functional as is, but there are always improvements to be made.

- Save video selection such that page refresh loads the player with the previously selected video

- Create a mute button and attach a keyboard shortcut that mutes playback volume

- Create a next button that loads the next (or first if current video is last) video on the list

- Rewrite CSS slider properties (Not necessarily a page improvement, this would solely be for learning purposes, as I did not write those myself)

- Create a functionality that allows users to upload and save their own videos

- Create a full-screen button that compliments the existing full-window button

### [View the project live here!](https://mccambley.github.io/JSPlayground/custom-video-player/)
