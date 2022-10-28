// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-02-JS/sw.js", {
    scope: "/ICS2O-Unit3-02-JS/",
  })
}

// function description

function submit() {
  // input
  const baseLength = parseFloat(document.getElementById("base-length").value)
  const baseWidth = parseFloat(document.getElementById("base-width").value)
  const pyramidHeight = parseFloat(document.getElementById("pyramid-height").value)

  // process
  const pyramidVolume = (baseLength * baseWidth * pyramidHeight) / 3

  // output
  document.getElementById("pyramidVolume").innerHTML =
    "Volume of the pyramid is: " + pyramidVolume.toFixed(2)
}