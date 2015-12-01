module.exports = function(RED) {
    
    const sonos = require("sonos");
    const Sonos = new sonos.Sonos("127.0.0.1", 32);
    
    function SonosNode(config) {
        RED.nodes.createNode(this,config);
        this.on('input', msg => {
            Sonos.prototype.play('http://sång.mp', (err, playing) => {
                if (err) {
                    this.error('knas',msg);
                }
            })
            this.send(msg);
        });
    }
    RED.nodes.registerType("sonos",SonosNode);
}
