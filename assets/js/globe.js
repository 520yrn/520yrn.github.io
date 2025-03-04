document.addEventListener("DOMContentLoaded", function () {
    const globeContainer = document.getElementById('globe-container');

    if (!globeContainer) {
        console.error("Globe container not found!");
        return;
    }

    // 加载 Three.js 和 Globe.js
    const script1 = document.createElement("script");
    script1.src = "https://unpkg.com/three@0.136.0/build/three.min.js";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://unpkg.com/globe.gl";
    script2.onload = function () {
        const world = Globe()
            (globeContainer)
            // 🎨 使用彩色地球贴图
            .globeImageUrl('https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73808/world.topo.bathy.200401.3x5400x2700.jpg')
            .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
            .backgroundColor('#000')
            .pointAltitude(0.05)
            .pointColor(() => 'red');

        // 让地球宽高适应 div
        function resizeGlobe() {
            const width = globeContainer.clientWidth;
            const height = globeContainer.clientHeight;
            world.width(width).height(height);
        }

        resizeGlobe();
        window.addEventListener('resize', resizeGlobe);

        // 访问过的地点
        const visitedPlaces = [
            { lat: 32.0603, lng: 118.7969, name: "Nanjing, China" },
            { lat: 1.3521, lng: 103.8198, name: "Singapore" },
            { lat: 33.7490, lng: -84.3880, name: "Atlanta, USA" }
        ];

        // 标记访问过的城市
        world.pointsData(visitedPlaces)
            .pointLat(d => d.lat)
            .pointLng(d => d.lng)
            .pointLabel(d => d.name)
            .pointAltitude(0.05)
            .pointColor(() => 'red');

        // 自动旋转地球
        function rotateGlobe() {
            world.controls().autoRotate = true;
            world.controls().autoRotateSpeed = 0.5;
        }
        rotateGlobe();
    };
    document.body.appendChild(script2);
});
