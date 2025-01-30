+++
title = 'Toyota Festival Mall Touchtable'
date = 2021-12-21T09:30:00Z
draft = false
summary = 'TUIO object recognition and multitouch table'
[params]
  type = 'Frontend'
  client = 'Toyota'
  agency = 'Imagination'
  video = 'ya4PwVogx4E'
+++

Created an Electron-based touchtable application using the TUIO libraries.

The application was able to recognise objects and generate UIs around them to
provide users with bespoke experience for each model of Toyota. Multitouch was
used in order to ensure that users wouldn't block each others actions and
gestures. Each individual UI was also available in both English (LTR) and
Arabic (RTL), providing a good experience for both user groups.

## Electron

Electron being based on Chomium raised some interesting challenges, including
the scrolling which only worked from top to bottom, no matter which way up the
UI was. This meant that scroll direction had to be generated based on the
current angle of the UI manually.

## Demo

{{< youtube ya4PwVogx4E >}}
