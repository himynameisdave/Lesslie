###Lesslie [![Bower](https://img.shields.io/bower/v/lesslie.svg?style=flat-square)](https://github.com/himynameisdave/Lesslie/releases)
> The (Modular) [LESS](http://lesscss.org/) Library For The Rest of Us!

![Lesslie](http://media.giphy.com/media/aek4CX1IzVx7y/giphy.gif)

We all need a good LESS library to simplify stupid things like vendor prefixes and just general annoyances we all face. [And no one has ever thought of building a LESS library before](http://designshack.net/articles/css/battle-of-the-less-mixin-libraries-less-elements-vs-less-hat-vs-bootstrap/), so I guess I'll build it (you're welcome, world).

Alas, Meet Lesslie. She's modular and simple to understand.

Built out of little components that you can easily remove/steal/alter as you please, messing around with Lesslie is dead simple and is great for inspiration for your own Less library (because there is nothing better than DIY).

**Well-structured documentation coming soon (promise)**

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
@import (reference) "[bower install directory]/lesslie/lesslie.less";
```

Which is dope cause then your Less file will have access to all the goodies and mixins and variables that are in the file.

####Import

Remove the reference and all of a sudden you get the whole thing.

```less
@import "[bower install directory]/lesslie/lesslie.less";
```

This adds things like the reset, spacing classes, and modules to your Less file.

---

###Future

Looking to maybe expand Lesslie to be a (light) framework. In other words I'm essentially like every other front-end dev with too much time on his hands.

In the nearer future though I would like to build a thorough wiki on using Lesslie.

---

*Created by [Dave Lunny](https://himynameisdave.github.io) in the beautiful year 2015.*
