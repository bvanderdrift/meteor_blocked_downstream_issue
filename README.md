# Meteor 1.8 Blocked Downstream Issue

This repository is a reproduction repo for [this issue at the Meteor repository](https://github.com/meteor/meteor/issues/10352).

This repository only manages to reproduces part of the weird behaviour caused by the unresolved promise:

Reproduced:

- [x] The original call will not have its callback called.
- [ ] Any consecutive calls would not have their callback called.
- [ ] Any new publication would never be `ready()`.
- [x] Our application wouldn't update client side anymore on a code-change.
- [x] On every restart of the server the congested call would re-run.
