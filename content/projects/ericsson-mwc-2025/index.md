+++
title = 'Ericsson MWC 2025'
date = 2025-02-21T17:37:21Z
draft = true
summary = 'Fullstack Electron kiosk touchscreen quiz'
[params]
  type = 'Fullstack'
  client = 'Ericsson'
  agency = 'BrandFuel'
  video = ''
+++

Created an Electron kiosk application for a physical activation for the Ericsson Mobile World Congress 2025
stand in conjunction with Let's AV IT.

The application included configurable branching logic to pass the user to one of 5 stages, triggering the
LED Arduino created by Let's AV IT in sequence. The Arduino would also reset the application when the physical
puck was put back in the resting place.

### Filesystem archive

The application generated an archive of each session in the home directory and would also read a local
aggregate JSON file.

### Aggregate user map attractor

The aggregate JSON file is read every time the attractor map screen is shown and the pins in the map SVG
are rendered based on the data.

The pin radius uses a logarithmic scale in order to ensure that lower numbers produce more size than larger
ones to avoid the map becoming one huge pin.

### Serial Integration to LED

There are multiple LED patterns that are triggered and sequenced from the main script of the Electron application.
These are triggered with keycodes sent over serial to a local Arduino. There is a trigger in the puck which also
sends keycodes back to the Electron app to trigger the application to reset when the puck is returned to its cradle.

{{< youtube tdHMg48NZDo >}}
