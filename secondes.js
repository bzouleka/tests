function secondes() {
    var d = new Date();
    var seconds = Math.round(d.getTime() / 1000);
}

module.exports = secondes ;