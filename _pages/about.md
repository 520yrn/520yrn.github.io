---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- 
<p align="center">
  <img src="https://520yrn.github.io//files/image.png" alt="Photo" style="width: 180px;height: 80px;"/>
</p>
-->
Hi! I am currently a Ph.D student at the Autonomous and Connected Transportation (ACT) lab in the School of Civil and Environmental Engineering at Georgia Institute of Technology (Gatech), under the supervision of <a href="https://ce.gatech.edu/directory/person/srinivas-peeta">Prof. Srinivas Peeta</a>. Prior to this, I received my B.Eng. in traffic engineering from Southeast University (SEU) and my M.Eng. in transportation from National University of Singapore (NUS) under the supervision of <a href="https://cde.nus.edu.sg/cee/staff/kaidi-yang-2/">Dr. Kaidi Yang</a>. My research interest lies in developing methods for steady transitions toward next-generation transportation systems, with a particular focus on enhancing system safety and reliability. I am always open to discussing innovative ideas and exploring potential collaborations. Feel free to reach out!
<hr/>

<!-- <a href="https://520yrn.github.io//files/Ruining_Yang_CV.pdf" download>[click here]</a> -->


# Education

### B.Eng in Traffic Engineering, 2019.09 - 2023.06
Dept. of Transportation Engineering, Southeast University
<!-- + Transcript: <a href="https://520yrn.github.io//files/Transcript-Southeast University-Bachelor.pdf" download>[click here]</a>-->

### Exchange Program in Transportation, 2022.08 - 2023.05
Dept. of Civil & Environmental Engineering, National University of Singapore
<!-- + Transcript: <a href="https://520yrn.github.io//files/Transcript-National University of Singapore.pdf" download>[click here]</a>-->
<!-- + Final Year Project Outcome: <a href="https://520yrn.github.io//files/3+1+1 FYP Assessment Outcome - YANG RUINING.pdf" download>[click here]</a>-->

### M.Eng in Transportation, 2023.08 - 2024.07
Dept. of Civil & Environmental Engineering, National University of Singapore

### Ph.D. in Transportation System Engineering, 2023.08 - Present
School of Civil & Environmental Engineering, Georgia Institute of Technology

# Research Interest
+ Intelligent transportation systems
+ Connected and autonomous vehicles
+ Traffic flow theory and control
+ Traffic equilibrium and human behavior

# Recent News
* Academic website updates on Mar. 02, 2025

<hr/>

# 🌍 Places I've Visited
<div id="globe-container" style="width: 100%; height: 500px;"></div>

<script src="https://unpkg.com/three@0.136.0/build/three.min.js"></script>
<script src="https://unpkg.com/globe.gl"></script>

<script>
    // 选择地球的容器
    const globeContainer = document.getElementById('globe-container');

    // 创建地球实例
    const world = Globe()
        (globeContainer)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundColor('#000')
        .pointAltitude(0.05)
        .pointColor(() => 'red'); // 标记颜色

    // 访问过的地点（经纬度）
    const visitedPlaces = [
        { lat: 32.0603, lng: 118.7969, name: "Nanjing, China" },
        { lat: 1.3521, lng: 103.8198, name: "Singapore" },
        { lat: 33.7490, lng: -84.3880, name: "Atlanta, USA" }
    ];

    // 在地球上标记访问过的地点
    world.pointsData(visitedPlaces)
        .pointLat(d => d.lat)
        .pointLng(d => d.lng)
        .pointLabel(d => d.name)
        .pointAltitude(0.05)
        .pointColor(() => 'red');

    // 让地球自动旋转
    function rotateGlobe() {
        world.controls().autoRotate = true;
        world.controls().autoRotateSpeed = 0.5;
    }
    rotateGlobe();
</script>

