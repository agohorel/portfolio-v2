---
type: portfolio
order: "6"
path: /paint-with-friends
date: 2023-01-09T22:20:46.516Z
name: paint with friends
thumbnail: /assets/paint-with-friends-card.png
description: >-
  P﻿aint with Friends is a multiplayer drawing application that allows users to
  virtually "paint" together, with cursor-tracking to show who is drawing what
  (think Figma). It also supports chat and a real-time presence system,
  indicating who is online. The app provides fairly standard drawing options and
  shapes but has a secret weapon, borrowed from the world of audio production -
  low frequency oscillators (LFOs)! LFOs are a form of control signal that can
  be used to control other signals - in this case the parameters of your virtual
  "brush". The LFOs are fully configurable (frequency, amplitude, floor, and
  shape), can target nearly any drawing parameter, and can even be chained
  together for interesting and sometimes unexpected effects.


  I started this project to mentor a friend who was interested in learning web development, and to that end the project is in most ways done "the old fashioned way" (sans the inclusion of Typescript) - that is no UI framework and no fancy automated deployments via a service like Netlify or Vercel. Just static HTML pages, vanilla JS (well...TS) to manage the DOM, and manual deployments to a cheap Linode server running Certbot and Nginx. The backend is Express + Socket.io and the frontend uses p5.js for rendering.


  One interesting problem we had to solve while working on this project was the issue of preserving the state of the canvas on the server, such that a returning client would be "up to speed" with the current state of the remote canvas. We settled on a somewhat novel approach - running a virtual "canvas" on the server-side (using JSDOM) which updates itself in real-time as the canvas changes. When a user first joins, the server-side canvas returns a serialized version of its image data which the client first renders, and then draws on top of.


  To assist with scaling/performance, we only send a sparse representation of a user's current brush state, which is enriched on the receiving end. This reduces the amount of bandwidth per-update by ~55%. Additionally, the app implements a progressive throttling mechanism which incrementally reduces client update rates as the count of users drawing simultaneously increases.
short_description: realtime multiplayer drawing w/ chat, powered by socket.io
backend_tools:
  - express
  - socket.io
  - sharp
  - node-p5
frontend_tools:
  - p5.js
other_tools:
  - certbot
  - nginx
demo_url: https://github.com/glitch-dot-cool/paint-with-friends
repo_url: https://paint.glitch.cool/paint.html
image:
  - /assets/sortme.png
---
