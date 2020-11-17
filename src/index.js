
import { SkynetClient, genKeyPairFromSeed } from "skynet-js";
const client = new SkynetClient();
var Gun = ('undefined' !== typeof window) ? window.Gun : __non_webpack_require__('gun')
if(!Gun){ throw "Gun is undefined"}
var debug = false
function factory(opt){
    opt.file = String(opt.file || 'radata');
    opt.revision = 0;
    var store = {}
    const { publicKey, privateKey } = genKeyPairFromSeed(opt.secret);

    store.put = function(key, data, cb){
        if(debug) console.log('[Put] \nKey: '+ key + " \nData: " + data || null);
        if(data){
            client.db.setJSON(privateKey, key, data).catch(err => {
                if(debug) console.log('Put Error: ', err)
                cb(err, 'skynet')
            })
        }
    }
    store.get = function(key, cb){
        if(debug) console.log('[Get] \nKey: ' + key);
        client.db.getJSON(publicKey, key).then(data => {cb(null, data)}).catch((err) => {
            if(debug) console.log('Get Error: ', err)
            //cb(err, 'skynet')
            cb(null, null)
        })
    }
    return store

}

Gun.on('create', function(root){
    this.to.next(root);
    root.opt.store = root.opt.store || factory(root.opt);
})
