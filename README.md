###Lesslie [![](http://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/himynameisdave/Lesslie/releases/tag/v1.0.0)
> The (Modular) [LESS](http://lesscss.org/) Library For The Rest of Us!

![Lesslie](http://media.giphy.com/media/aek4CX1IzVx7y/giphy.gif)

We all need a good LESS library to simplify stupid things like vendor prefixes and just general annoyances we all face.

Meet Lesslie. She's the cool new young thang on the block. Totally modular, constantly being updated & maintained, and easy to understand and use.

Built out of little components that you can easily remove/steal/alter as you please, messing around with Lesslie is dead simple and is great for inspiration for your own Less library (because there is nothing better than DIY).

---

###Howcanigetit?

Clone this repo, or through the good ol' [Bowers](http://bower.io/):

```bash
bower install lesslie
```

By default, it's gunna throw that in your ```./bower_components/``` directory.

####Reference

You can use it as a reference when writing your Less like this:

```less
@import (reference) "[bower install directory]/lesslie/dist/lesslie.less";
```

Which is dope cause then your Less file will have access to all the goodies and mixins and variables that are in the file.

####Import

Remove the reference and all of a sudden you get the whole thing.

```less
@import "[bower install directory]/lesslie/dist/lesslie.less";
```

This adds things like the reset, spacing classes, and modules to your Less file.

---

###Future

Looking to maybe expand Lesslie to be a (light) framework. In other words I'm essentially like every other front-end dev with too much time on his hands.

---

*Created by [Dave Lunny](https://himynameisdave.github.io) in the beautiful year 2014.*
