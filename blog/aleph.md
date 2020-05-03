---
type: blog
path: /aleph
date: 2020-05-01T17:28:03.861Z
title: aleph
---

![aleph logo](/assets/aleph.png "aleph logo")

aleph is a homebrew software project I've been working on, off-and-on for the last year and a half or so. My best elevator pitch for it yet is that it's a:

> cross-platform desktop application and programming framework for developing and performing audio-reactive visuals

So let's unpack that a little. But first let's see some examples of aleph:

This was made by fellow glitch.cool member :

`youtube: https://www.youtube.com/embed/ng47crCs1eo`

aleph is built on the popular Electron framework, which allows you to build desktop applications with web languages (HTML, CSS, and Javascript). It also uses p5.js for audio-analysis and graphics.

It's core design tenets are: approachability, extensibility, and a commitment to using cross-platform, open source technologies, and the tools chosen to build it reflect those values. To many software developer-types the choice of using web technologies for such a project might seem strange. But there's a good reason for it.

First of all web technologies are extremely portable (meaning you can run them on just about anything), there is a tremendous wealth of open-source technology available to make use of, and last but not least - _lots of people know some combination of HTML/CSS/Javascript_, and this makes aleph more approachable than if it used a more arcane set of languages. It also makes aleph eminently hackable (in the good way - you can customize any part of it).

Which brings me to the next thing.

So we've discussed the first part of aleph - that it's an actual application you can run on your machine. But the other component is the idea of aleph being a programming _framework_ you use to build your own stuff.

aleph heavily makes use of p5.js, both for audio analysis (which is completely set up for you out of the box) and for graphics (the part you create with aleph). aleph shares p5's philosophy when it comes to programming - that it should be inviting and accessible. p5 is based on the well-loved programming language called Processing, which was my entry point into programming. I actually developed a prototype of aleph in Processing years back, known then as aleph.vis.

So in many ways, programming in aleph is functionally equivalent to programming in regular p5.js - you can make use of all the stuff included in p5.js inside aleph. However aleph also gives you access to a bunch of other things like the ability to control stuff with MIDI and its own system for working with _assets_ (images, fonts, shaders, etc). It also sets up all of the "boilerplate" code required to work with p5.js for you. So aleph as a framework is kind of like...p5.js++

But the beauty of aleph using web technologies is that it's inherently extensible. There's no reason I can't also implement other cool projects like for more advanced 3D rendering, which is in the plans for aleph. There's no reason you, as a user, can't bolt other web stuff onto aleph. It all lives inside a browser under the hood so you can even install extensions (not sure why you would, but please do surprise me). You can even do stuff like pull in dynamic content from the web, make API requests, whatever. Want to make the color of objects in your sketch based on a real-time feed of stock price information? You could do that if you really wanted to.

Alright so first things first, you can grab downloads for your chosen OS .

Next I recommend getting familiar with because you will be using a lot of its features. I recommend checking out the _Learn_, _Examples,_ and _Reference_ pages. I also have some resources linked at the bottom of this section.

The documentation for aleph is available both inside the app itself (check the 'help' tab in the menu) or on the github page .

The docs still admittedly need a lot of work and I need to make some proper tutorials and quick start videos, but if you're having any problems I encourage you to , where I am happy to field questions and help people get up and running with aleph.

I will say it's certainly helpful if you have some programming experience, but I don't think you need to "be a programmer" to use it, and I encourage people to try it out even if they have no programming experience. Because it's inherently visual you get a lot of instant feedback and I think this is a great way to make learning programming fun and intuitive.

If you're new to programming or p5.js I highly recommend checking out , who is a professor at NYU, member of the Processing Foundation, and a total sweetheart. He has a great youtube channel called and he has also written two books on Processing, which I think have p5.js examples now (and even if they don't, it translates very intuitively).

So - I hope to see you dive into aleph and I encourage you to and get active! Report bugs, ask for help, make suggestions, share your creations, join in on the development of aleph itself - whatever! Just please keep in mind this project is still very much in its infancy, it's not a commercial product, and (at present) it's being developed and maintained by a single person with little time to work on it (me, hi).
