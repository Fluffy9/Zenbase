
const { SkynetClient, genKeyPairFromSeed } = ('undefined' !== typeof window) ? window.skynet : require("skynet-js")
const Gun = ('undefined' !== typeof window) ? window.Gun : require('gun')

if (!Gun) { throw "Gun is undefined" }
var debug = false
function factory(opt) {
    opt.file = String(opt.file || 'radata');
    opt.revision = 0;
    var store = {}
    const { publicKey, privateKey } = genKeyPairFromSeed(opt.secret);
    const client = new SkynetClient(opt.portal || "https://siasky.net");
    debug = opt.debug

    store.put = function (key, data, cb) {
        if (debug) {
            console.log('[Put] \nKey: ' + key + " \nData: " + JSON.stringify(data));
            debugger
        }
        if (data) {
            client.db.setJSON(privateKey, key, data).then(() => {cb(null,1)}).catch(err => {
                if (debug) {
                    console.log('Put Error: ', JSON.stringify(err))
                    debugger
                }
                cb(err, 'skynet')
            })
        }
    }
    store.get = function (key, cb) {
        if (debug) {
            console.log('[Get] \nKey: ' + key);
            debugger
        }
        client.db.getJSON(publicKey, key).then(data => {
            if (debug) { console.log("Retrieved Data: " + JSON.stringify(data)); }
            cb(null, data['data'] || undefined) })
        .catch((err) => {
            if (debug) {
                console.log('Get Error: ', JSON.stringify(err))
                debugger
            }
            cb(null, undefined)
        })
    }
    return store
}

Gun.on('create', function (root) {
    this.to.next(root);
    root.opt.store = root.opt.store || factory(root.opt);
})
try {
    exports.zenbase = Gun
} catch (e) {}