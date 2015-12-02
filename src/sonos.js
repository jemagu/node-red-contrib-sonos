module.exports = function(RED) {
    
    const sonos = require("sonos");
    
    function SonosNode(config) {
        RED.nodes.createNode(this,config);
        this.on('input', msg => {
            const sonos_device = new sonos.Sonos("127.0.0.1", 32);
            sonos_device.play('http://sång.mp', (err, playing) => {
                if (err) {
                    this.error(err,msg);
                }
            })
            this.send(msg);
        });
    }
    RED.nodes.registerType("sonos",SonosNode);
}
