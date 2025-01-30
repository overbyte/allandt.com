+++
title = 'CRH Full Potential'
date = 2024-12-12T09:30:00Z
draft = false
summary = 'Multi-screen Team-based Priotisation Exercise'
[params]
  type = 'Fullstack'
  client = 'Imagination'
  agency = 'Imagination'
  video = ''
+++

Created a Multi-screen application that allowed 5 Modules (Pillars) of 2 Teams each to participate
in an exercise involving prioritising a set of initiatives using an iPad each. This was orchestrated
using an administration application to step through the application states and show timers during
the exercise. There was another app that was shown on a large screen for all of the participants to see.

## Backend

The **Node / Express** backend exposed a **REST API** for the admin application to send state requests to,
updated and stored its local state and then communicated with the other applications via **Websockets**.

## Frontend Team App

The frontend progressive webapp for iPad was built in React and used the Context API to recieve Websocket events and
translate them into React Router navigation or updated the result state. The iPad apps also sent the Team's
current state to the server to display on the admin app and for the results stage.

## Frontend Host Screen App

The host app, shown on a large display in the room, displayed a timer during the event as well as the results
which each team would present to the other Teams, eventually showing both Teams in the Pillar together
for comparison.

{{< youtube 4f1Qih26n-g >}}
