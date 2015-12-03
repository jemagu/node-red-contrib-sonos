module.exports = function(RED) {
    
    const sonos = require("sonos");
    
    function SonosNode(config) {
        RED.nodes.createNode(this, config);
        this.sonos_ip = config.server;
        this.url_to_play = config.url;
        this.on('input', msg => {
            const sonos_device = new sonos.Sonos(this.sonos_ip);
            sonos_device.setVolume(this.url_to_play, (err, playing) => {
                if (err) {
                    this.error(err,msg);
                }
            });
            sonos_device.play(this.url_to_play, (err, playing) => {
                if (err) {
                    this.error(err,msg);
                }
            });
            //this.send(msg);
        });
    }
    RED.nodes.registerType("sonos",SonosNode);
}
