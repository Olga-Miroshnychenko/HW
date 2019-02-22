function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}
function PlanetWithSatellite(name, satelliteName) {
    this.satelliteName = satelliteName;
    this.getName = function () {
        Planet.call(this, name + '. The satellite is this ' + satelliteName);
    }
}
let earth = new PlanetWithSatellite('earth', 'moon');
earth.getName(); // 'Planet name is earth. The satellite is moon’


