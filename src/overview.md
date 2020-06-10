# Source code structure

Clone tikv's source code from its [repo](https://github.com/tikv/tikv), you'll see a huge pile of dictionaries and files.

But don't panic, some of them are not code, and some of them are small pieces of code which we don't really need to pay much attention on.

Now I'll introduce the usage of every folder in the repo.

## cmd

If you have built tikv, then you should know that we'll produce 2 binary files: the server  `tikv-server`  and the `tikv-ctl`, the  `main` entry point is in this crate .

## components

These parts of code are separated into stand alone crates. I don't really know why these parts are seperated while others are not. Maybe these components are more reusable for other projects?

### backup

For backup.

### batch-system

Related with raft store, I don't really understand it now.

### cdc

I don't really understand it now.

### codec

For encode and decode numbers.

### configuration

For "patching" configurations, this sub-crate awsome, you can use it in your own rust project.

### encryption

For encryption and decryption

### engin, engin_*

Storage engine for single node.

### externel storage

Something about cloud storage.

### into_other

Seems like something to deal with the type.

### keys

Modify the keys.

### log_wrappers

Adapt log system which not implements slog interface to slog.

### match templates

Macros used to generate similar match branch on different sub-types for a enum.

This crate is also a good one to be used in your own project.

### panic hook

用于在测试等场景下防止打印出调用堆栈。

### pd_client

Communicates with placement driver。

### profiler

Profile tikv's performance.

### raft store

Raft store.

### resolved_ts

(I do not really understand this.)

### rusoto_util

Seems like something related with security.

### security

SSL things.

### sst_importer

For import RocksDB's SST file, should be used in import data with `lightning`.

### test_*

Functional tests.

### tidb_query_*

To process with operators tidb push down.

### tikv_alloc

Memory allocator, supports `tcmalloc`, `jemalloc`  etc.

### tikv_util

Codes which are hard to put into other crates.

### tipb_helper

Something related with protobuf used in tidb.

### txn_types

Typed used in transaction handling.

## fuzz

Fuzzling tests.

## src

The major part of tikv's code.

### coprocessor

Handle the requests tidb push down.

### import

Support for `tidb-lightning` .

### server

server code, which includes the grpc service.

### storage

Storage layer, this includes single-node kv storage engine, mvcc and transaction control.

