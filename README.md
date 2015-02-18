###Lesslie [![Bower](https://img.shields.io/bower/v/lesslie.svg?style=flat-square)](https://github.com/himynameisdave/Lesslie/releases)
> A (Modular) [LESS](http://lesscss.org/) Library For The Rest of Us!

![Lesslie](http://media.giphy.com/media/aek4CX1IzVx7y/giphy.gif)

We all need a good LESS library to simplify stupid things like vendor prefixes and just general annoyances we all face. [And no one has ever thought of building a LESS library before](http://designshack.net/articles/css/battle-of-the-less-mixin-libraries-less-elements-vs-less-hat-vs-bootstrap/), so I guess I'll build it (you're welcome, world).

Please steal/alter any part of this for your own Less library. I've found that the best pre-processor/CSS libraries are the ones that you make yourself, which is how I got to creating Lesslie.


---

####Howcanigetit?

Clone this repo, or through the good ol' [Bowers](http://bower.io/):

```bash
bower install lesslie
```

By default, it's gunna throw that in your ```./bower_components/lesslie/dist/``` directory.

####Usage

Common usage would be like adding this to the top of your less file. This brings in the reset as well as all of Lesslie's modules


```less
@import "./bower_components/lesslie/dist/reset.less";
@import "./bower_components/lesslie/dist/lesslie.less";
```

But maybe you just want to use all of the stuff in the Lesslie library, such as all the mixins with none of the modules showing up in the exported stylesheet. No problem, just reference the `lesslie.less` instead of importing it.

```less
@import "./bower_components/lesslie/dist/reset.less";
@import (reference) "./bower_components/lesslie/dist/lesslie.less";
```

---

####Licence

The MIT License (MIT)

Copyright (c) 2015 Dave Lunny

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

*Created by [Dave Lunny](https://himynameisdave.github.io) in the beautiful year 2015.*
