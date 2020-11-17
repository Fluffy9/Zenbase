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


## Credits
* GunDB
* Sia SkynetDB
