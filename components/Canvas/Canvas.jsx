import React, { useRef, useEffect } from "react";
import * as THREE from "three";
export const Canvas = () => {
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0B0B0B");
    renderer.render(scene, camera);
  });
  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  );
};
