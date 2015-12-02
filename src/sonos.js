module.exports = function(RED) {
    
    const sonos = require("sonos");
    
    function SonosNode(config) {
        RED.nodes.createNode(this, config);
        this.sonos_ip = config.server;
        this.on('input', msg => {
            const sonos_device = new sonos.Sonos(this.sonos_ip);
            sonos_device.play('https://archive.org/download/testmp3testfile/mpthreetest.mp3', (err, playing) => {
                if (err) {
                    this.error(err,msg);
                }
            })
            //this.send(msg);
        });
    }
    RED.nodes.registerType("sonos",SonosNode);
}
