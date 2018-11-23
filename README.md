# Meteor Blocked Downstream Issue

This repository is a reproduction repo for [this issue at the Meteor repository](https://github.com/meteor/meteor/issues/10352).

This repository only manages to reproduces part of the weird behaviour caused by the unresolved promise:

Reproduced:

- [x] The original call will not have its callback called.
- [ ] Any consecutive calls would not have their callback called.
- [ ] Any new publication would never be `ready()`.
- [x] Our application wouldn't update client side anymore on a code-change.
- [x] On every restart of the server the congested call would re-run.

How to reproduce:
* Don't press the 'congest' button. Change some client-side code and see the client update.
* Press the 'congest' button a few times. You see the log on the server that method is fired, but not the log of callback being called on the client.
* Edit client side code, the client won't refresh anymore.
* Edit server side code, the server will rerun all the calls (see the logs being reprinted)
