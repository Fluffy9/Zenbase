# Zenbase 🎍
Welcome to Zenbase, the all encompassing database. It's a secure home for your data that lives in the cloud. 
## About Zenbase
Zenbase is: 
* Decentralized, peer to peer
* Fault tolerant
* Offline first
* Private
* Realtime
* Cross platform. It runs on browsers, and mobile devices. (Servers coming soon!)
* Auth ready. Decentralized authentication is built in
* Graph database
* Persistent
* Easy to use

## HOW???
That was a long list of super awesome features. Basically, Zenbase combines two awesome technologies: [GunDB]("https://gun.eco/") and [Sia SkynetDB]("https://siasky.net/"). GunDB is a Graph database based on WebRTC. Sia SkynetDB is a decentralized Key/Value pair database on a decentralized storage layer. 

GunDB offers a flexible database, but lacks decentralized persistence. Centralized relays like S3 or a server are used to persist your data when WebRTC fails. 

Sia SkynetDB has decentralized persistence, but lacks most of the features you'd probably want in a database (like relationships and queries). 

Zenbase bridges these with a storage adapter for GunDB that persists data to Skynet. 

## Why Should I Care
1. It's free / cheaper than you're currently paying for your database. As of November 2020, Sia SkynetDB storage is free. It's unclear when/if that will change but you can expect that it will be cheap if payment is required. Storage on the Sia network currently costs:

* 3.02 dollars a month per terabyte for storage 
* 0.62 dollars a terabyte for upload bandwidth
* 1.06 dollars a terabyte for download bandwidth

[Source]("https://siastats.info/storage_pricing")

Even assuming higher storage costs for higher duplication / better web availability, you're looking at cents for a 10gb database. Should payment be required, we intend to host a payment gateway to allow you to pay for your Zenbase easily with your credit card

2. It's always available. Even the biggest centralized services like AWS have down time. There is good reason to expect that Zenbase won't. Peer devices will each serve as their own database server making your service more available the more people use it. Even if there are no peers, Sia SkynetDB will always be available. There is another 10-30 redundancy on Skynet data, ensuring your data is always close by

3. It's cross platform. You don't need a server to run it so that's one less thing to set up and one less thing to pay for. 

4. It's realtime and fault tolerant. Need I say more? Pinging your database for updates sucks  

5. It's open source! 😁

## Getting Started

Interactive tutorial here: https://starboard.gg/nb/nl2QbJ2

```HTML
<html>
<head>
<script src="https://cdn.jsdelivr.net/npm/gun/gun.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gun/lib/radix.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gun/lib/radisk.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gun/lib/store.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gun/lib/rindexed.js"></script>
<script src="https://unpkg.com/zenbase/main.js"></script>
<script>
let hello_world = ""

// Initialize gun.
// [localStorage] We are turning localStorage to false for testing purposes. Generally, you'd want that to be true
// [secret] Secret should be something long and secure. Your data will be saved to Skynet using that secret
// [portal] Skynet portal you'd like to use. Use a portal you trust or run your own. They could potentially manipulate your data (although I don't see why) 
// [debug] Show debug output
window.gun = new Gun({
    localStorage: false,
    secret: "YOUR_SECRET_HERE",
    portal: "https://siasky.net",
    debug: false,
})

// Put data into gun. This will store in memory, then localStorage (disabled), then Skynet
gun.get('hello').put({ name: "world" });
// Get data into gun. This will pull from memory, then localStorage (disabled), then Skynet
gun.get('hello').on(data => { 
  hello_world = data['name']
	alert("hello: " + hello_world)
})
</script>
</head>
<body>
</body>
</html>
```
## Donators (In order of contribution)
```
🏆 aaronfye
🥈 griffgreen
🥉 bit-7
🏅 caipeng2006
🏅 prometheusminer
🏅 yaobr
🏅 traviagio
🏅 luxebeng
🏅 usmankler
🏅 itsoso
🏅 davidkieve
```
 ... [and more](https://gitcoin.co/grants/1629/zenbase)


## Credits
* GunDB
* Sia SkynetDB

## More about the project

https://www.indiehackers.com/product/zenbase
