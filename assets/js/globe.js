document.addEventListener("DOMContentLoaded", function () {
    const globeContainer = document.getElementById('globe-container');

    if (!globeContainer) {
        console.error("Globe container not found!");
        return;
    }

    const world = Globe()
        (globeContainer)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundColor('#000')
        .width(4)  // 设定地球显示的宽度
        .height(3) // 设定地球显示的高度
        .pointAltitude(0.05)
        .pointColor(() => 'red');

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
});
