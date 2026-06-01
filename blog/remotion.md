# Remotion: Video with React!

<img src="media/HelloWorld.jpeg" class="media-img" alt="Example rendered frame"/>

<div class="media-container">

*Image: A frame of the Remotion project written in this post - rendered using `npx remotion still`*

Hi there! It has been a while since I've made my last post, and now I will share about an interesting library I found called [Remotion](https://www.remotion.dev/) - a library promising to "Create real MP4 videos using React".

Remotion is very simple to use. To begin learning, I'd recommend setting up and starting off with React (make sure to learn React JS, not React Native: there are two React types!).

## Setup

Assuming you have NodeJS, you can open a terminal (I use PowerShell: it's better than Command Prompt) and type `npm init video`. Select a template (I use the JavaScript Hello World template) and project name, and wait until the command finishes (NOTE: It may ask to install the "create-video" package - just press enter to confirm the installation and proceed).

Once done, open a code editor on the created folder (I use VS Code - a cross-platform lightweight code editor), making sure the right plugin(s) are installed (if needed)! On VS Code, you may need to trust the folder before starting.

To test the code, type in `npm start` in the terminal - it will work similarly to a typical React development setup. Then, it'll open a browser to load a video previewer containing all compositions you have made (each composition is a single video to be rendered by Remotion) and show a nice hello world video. Keep this command running in the background - as any typical React development flow would - and then start to the next section, remembering to start the command each time you want to preview your video. Now we'll make a circle show as shown below:

<video controls src="../media/videoplayback.mp4" title="Example finished video"></video>

## Code

First, create two files called Circle.js and CircleShow.js - these are for one circle and a set of circles respectively. First we'll edit the Circle.js and continue on with CircleShow.js later on.

### Coding an Individual Circle

To begin, make a file named `Circle.js` and import React for using JSX (the markup system of React):  

```js
import React from "react";
```  

Then import the required things from Remotion (hooks and components):

```js
import { useCurrentFrame, AbsoluteFill, useVideoConfig } from "remotion";
```

Then define and export our main circle component using functional components and arrow functions (not forgetting to accept input props):

```js
export const Circle = ({ delay, x, y, maxOpacity, r, fill }) => {
```

I am using a feature called [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). It is a feature allowing us to write code like this to extract certain object values without using any variables - a very handy tool to know!

The input props are:

1. `delay` - when the circle begins animating
2. `x` - the x coordinate of the circle
3. `y` - the y coordinate of the circle
4. `maxOpacity` - the peak opacity of the circle (all circles have this set to 1)
5. `r` - the radius of the circle
6. `fill` - the fill color of the circle  

Following that, extract video configurations from the `useVideoConfig` hook provided by Remotion, while also extracting the current frame using the `useCurrentFrame` hook. This lets us adjust to the render quality of our video:

```js
const { fps, width, height } = useVideoConfig();
const frame = useCurrentFrame();
```

Afterwards, compute the opacity:

```js
let opacity = 0; // The opacity relative to the maximum opacity
 
if (frame < delay) // If it is not yet the time for the circle to appear
  opacity = 0; // Make the circle invisible
else if (frame <= (delay + fps * 3)) // If the circle is supposed to be animating
  opacity = 1 - ((frame - delay) / (fps * 3)); // Animate the opacity
else opacity = 0; // If the circle is already done animating, set the opacity to 0
 
opacity *= maxOpacity; // Scale the opacity according to the maximum opacity
```

Finally, make the actual circle:

```js
return (
  <AbsoluteFill>
    <svg height={height} width={width}>
      <circle cx={x} cy={y} opacity={opacity} r={r} fill={fill} />
    </svg>
  </AbsoluteFill>
)
```

There are quite some code here, but basically it means to center an SVG circle with x-coordinate x and y-coordinate y. The opacity is set to `opacity`, the radius is set to `r`, and the fill color is set to `fill`.

That's it for the individual circle!

### Coding a circle show

To begin, import the necessary things as before, this time on a new file named `CircleShow.js`:

```js
import React, { useMemo } from "react";
import { random, useVideoConfig, AbsoluteFill } from "remotion";
import { Circle } from "./Circle";
```

Then, create the CircleShow component. This will spawn lots of our Circle component from above:

```js
export const CircleShow = () => {
```

After that, extract the video configurations to be used again:

```js
const { durationInFrames, width, height } = useVideoConfig();
```

And define functions for a random hexadecimal character and a random 6-letter color code (respectively):

```js
const randomChar = (id, pos) => {
  return "0123456789ABCDEF".charAt(Math.floor(random("color_" + pos + "_" + id) * 16));
}
 
const randomColor = (id) => {
  return `#${randomChar(id, 0)}${randomChar(id, 1)}${randomChar(id, 2)}${randomChar(id, 3)}${randomChar(id, 4)}${randomChar(id, 5)}`
}
```

As you may notice, I am using the Remotion random function. This utility function takes in a seed, making sure that the PRNG (PseudoRandom Number Generator) returns the same result wherever, whenever, and however we view the video - thus making it consistent everywhere. It's also worth noting that Remotion under the hood renders your video by opening Chromium, rendering each frame of your video with React, and take a screenshot of each one. Thus, **all your components should be idemponent and produce a coherent set of frames when run multiple times!** It's a React "good practice" but with Remotion failure to do so means you might not get a legible output at all. In particular, avoid `Math.random` because each frame might be seeded differently.

Then we initialize the data for each circle - using useMemo from React to optimize the code so the config only runs once:

```js
const setup = useMemo(() => new Array(300).fill(true).map((_, id) => {
  return {
    delay: random("delay_" + id) * durationInFrames,
    x: random("x_" + id) * width,
    y: random("y_" + id) * height,
    maxOpacity: 1,
    fill: randomColor(id),
    r: random("r_" + id) * 400,
    key: id,
  }
}), []);
```

Then we return the collection of circles:

```js
return (
  <AbsoluteFill>
    {setup.map((i) => (<Circle {...i} />))}
  </AbsoluteFill>
)
```

### Final Steps

Import the `CircleShow.js` file, replacing the imports in lines 2 and 3. Then, replace `HelloWorld` in line 13, and tweak the FPS, frames, and resolution to your needs (I settled with 25 FPS with 1500 frames to generate a 1 minute video). Remove the `Composition` component underneath, preview the video, and it's ready!


## Rendering

Except that, the video isn't an actual video just yet. We need to render the video to get the real MP4 (or other format) files to share to other people. To do this, run the command `npm run build`, and wait until the build finishes.

You can try passing the `-- --gl=angle` flag (the four hypens are not a typo - the first pair tells `npm` to forward all following parameters to the underlying script, and `--gl=angle` enables the optimization) to make the render faster by using your GPU, but it's not really that helpful in a simple use case like this. 3D rendering and other compute/graphics-heavy parallelizable workloads may benefit more from this - also dependent on how you structure the code - but it's a useful trick to know - in case it helps.

Then check the `out` directory, and the video is finally ready to view! You can check it out, share it, or do anything you like with it.

## Summary

Remotion is a great library, and I personally would like to try and make some good videos using it. Overall, it's a very nice (and creative) way of using a web development tool to create video, perfect if you don't know any other video editing tool...

</div>