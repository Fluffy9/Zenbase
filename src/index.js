
import { SkynetClient, genKeyPairFromSeed } from "skynet-js";
var Gun = ('undefined' !== typeof window) ? window.Gun : __non_webpack_require__('gun')
if(!Gun){ throw "Gun is undefined"}
var debug = false
function factory(opt){
    opt.file = String(opt.file || 'radata');
    opt.revision = 0;
    var store = {}
    const { publicKey, privateKey } = genKeyPairFromSeed(opt.secret);
    const client = new SkynetClient(opt.portal || "https://siasky.net");
    debug = opt.debug

    store.put = function(key, data, cb){
        if(debug){
            console.log('[Put] \nKey: '+ key + " \nData: " + data || null);
            debugger
        } 
        if(data){
            client.db.setJSON(privateKey, key, data).catch(err => {
                if(debug) {
                    console.log('Put Error: ', err)
                    debugger
                }
                cb(err, 'skynet')
            })
        }
    }
    store.get = function(key, cb){
        if(debug) {
            console.log('[Get] \nKey: ' + key);
            debugger
        }
        client.db.getJSON(publicKey, key).then(data => {cb(null, data)}).catch((err) => {
            if(debug){
                console.log('Get Error: ', err)
                debugger
            } 
            cb(null, null)
        })
    }
    return store

}

Gun.on('create', function(root){
    this.to.next(root);
    root.opt.store = root.opt.store || factory(root.opt);
})
