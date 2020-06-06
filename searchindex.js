Object.assign(window.search, {"doc_urls":["perface.html#前言","overview.html#srcversion-b82e7e7eff678c2b5189facca08a7deb6bacc595","overview.html#源码结构","overview.html#cmd","overview.html#components","overview.html#backup","overview.html#batch-system","overview.html#cdc","overview.html#codec","overview.html#configuration","overview.html#encryption","overview.html#engin-engin_","overview.html#externel-storage","overview.html#into_other","overview.html#keys","overview.html#log_wrappers","overview.html#match-templates","overview.html#panic-hook","overview.html#pd_client","overview.html#profiler","overview.html#raft-store","overview.html#resolved_ts","overview.html#rusoto_util","overview.html#security","overview.html#sst_importer","overview.html#test_","overview.html#tidb_query_","overview.html#tikv_alloc","overview.html#tikv_util","overview.html#tipb_helper","overview.html#txn_types","overview.html#fuzz","overview.html#src","overview.html#coprocessor","overview.html#import","overview.html#server","overview.html#storage"],"index":{"documentStore":{"docInfo":{"0":{"body":11,"breadcrumbs":0,"title":0},"1":{"body":0,"breadcrumbs":2,"title":2},"10":{"body":0,"breadcrumbs":1,"title":1},"11":{"body":0,"breadcrumbs":2,"title":2},"12":{"body":0,"breadcrumbs":2,"title":2},"13":{"body":0,"breadcrumbs":1,"title":1},"14":{"body":1,"breadcrumbs":1,"title":1},"15":{"body":3,"breadcrumbs":1,"title":1},"16":{"body":5,"breadcrumbs":2,"title":2},"17":{"body":0,"breadcrumbs":2,"title":2},"18":{"body":2,"breadcrumbs":1,"title":1},"19":{"body":0,"breadcrumbs":1,"title":1},"2":{"body":3,"breadcrumbs":0,"title":0},"20":{"body":0,"breadcrumbs":2,"title":2},"21":{"body":0,"breadcrumbs":1,"title":1},"22":{"body":0,"breadcrumbs":1,"title":1},"23":{"body":1,"breadcrumbs":1,"title":1},"24":{"body":3,"breadcrumbs":1,"title":1},"25":{"body":0,"breadcrumbs":1,"title":1},"26":{"body":1,"breadcrumbs":1,"title":1},"27":{"body":1,"breadcrumbs":1,"title":1},"28":{"body":0,"breadcrumbs":1,"title":1},"29":{"body":2,"breadcrumbs":1,"title":1},"3":{"body":10,"breadcrumbs":1,"title":1},"30":{"body":0,"breadcrumbs":1,"title":1},"31":{"body":0,"breadcrumbs":1,"title":1},"32":{"body":1,"breadcrumbs":1,"title":1},"33":{"body":1,"breadcrumbs":1,"title":1},"34":{"body":2,"breadcrumbs":1,"title":1},"35":{"body":1,"breadcrumbs":1,"title":1},"36":{"body":1,"breadcrumbs":1,"title":1},"4":{"body":2,"breadcrumbs":1,"title":1},"5":{"body":0,"breadcrumbs":1,"title":1},"6":{"body":2,"breadcrumbs":2,"title":2},"7":{"body":0,"breadcrumbs":1,"title":1},"8":{"body":1,"breadcrumbs":1,"title":1},"9":{"body":3,"breadcrumbs":1,"title":1}},"docs":{"0":{"body":"今天我决定写一些为 纯萌新 准备的 tikv 源码阅读指南。 我知道已经有很多现有的 tikv 源码分析了，如 TiKV-源码解析 系列和 deep dive tikv 系列，这些都是用于理解 tikv 源码的权威资料。这份资料的目的当然不在于替代它们。但是我认为因为以上这些文章都是由资深的 tikv contributor 所写，可能存在 “知识的诅咒”。至少对于我来说，这些文章并没有包含一些我想要知道的内容。 所以我在阅读 tikv 源码的 过程中 我写了这份资料。我希望这份资料对于希望对 tikv 作出贡献或是理解其代码的新手有所帮助。 然而，由于我也是纯萌新，我不能保证本书中没有错误，所以请 以权威资料和代码为准 。若您发现书中有任何错误，欢迎您联系作者。","breadcrumbs":"前言","id":"0","title":"前言"},"1":{"body":"","breadcrumbs":"srcVersion: b82e7e7eff678c2b5189facca08a7deb6bacc595","id":"1","title":"srcVersion: b82e7e7eff678c2b5189facca08a7deb6bacc595"},"10":{"body":"用于加解密。","breadcrumbs":"encryption","id":"10","title":"encryption"},"11":{"body":"单机的存储引擎。","breadcrumbs":"engin, engin_*","id":"11","title":"engin, engin_*"},"12":{"body":"外部存储， 似乎 是一些和云存储相关的东西。","breadcrumbs":"externel storage","id":"12","title":"externel storage"},"13":{"body":"看不透，不过好像是个细节问题。","breadcrumbs":"into_other","id":"13","title":"into_other"},"14":{"body":"对 key 的各种修饰。","breadcrumbs":"keys","id":"14","title":"keys"},"15":{"body":"似乎是用来将没有实现 slog 接口的 log 系统 wrap 起来。","breadcrumbs":"log_wrappers","id":"15","title":"log_wrappers"},"16":{"body":"用来便捷地生成对多种 enum 的子类型的相似 match branch的代码的宏，这个子 crate 也很适合用在你自己的 rust 项目中。","breadcrumbs":"match templates","id":"16","title":"match templates"},"17":{"body":"用于在测试等场景下防止打印出调用堆栈。","breadcrumbs":"panic hook","id":"17","title":"panic hook"},"18":{"body":"用于链接 placement driver。","breadcrumbs":"pd_client","id":"18","title":"pd_client"},"19":{"body":"性能分析工具。","breadcrumbs":"profiler","id":"19","title":"profiler"},"2":{"body":"从 官方GitHub地址 clone下一份tikv的源码，您会看到洋洋洒洒的一堆文件（夹）： dir 但是不要慌张，其中大部分都不是代码，而代码中很多都是不用特别去关心的小代码。 现将各个文件夹以及部分子文件夹的作用进行介绍。","breadcrumbs":"源码结构","id":"2","title":"源码结构"},"20":{"body":"知道有这东西，但是看不透。","breadcrumbs":"raft store","id":"20","title":"raft store"},"21":{"body":"看不透。","breadcrumbs":"resolved_ts","id":"21","title":"resolved_ts"},"22":{"body":"似乎和安全有关，看不透。","breadcrumbs":"rusoto_util","id":"22","title":"rusoto_util"},"23":{"body":"SSL相关。","breadcrumbs":"security","id":"23","title":"security"},"24":{"body":"用于导入 RocksDB 的 SST 文件。应该是用于使用 lightning 高速导入数据的。","breadcrumbs":"sst_importer","id":"24","title":"sst_importer"},"25":{"body":"功能测试。","breadcrumbs":"test_*","id":"25","title":"test_*"},"26":{"body":"用于处理 tidb 下推的运算，包括向量化执行等等。","breadcrumbs":"tidb_query_*","id":"26","title":"tidb_query_*"},"27":{"body":"内存分配器，支持 tcmalloc、jemalloc 等。","breadcrumbs":"tikv_alloc","id":"27","title":"tikv_alloc"},"28":{"body":"不便归到其他类的工具代码。","breadcrumbs":"tikv_util","id":"28","title":"tikv_util"},"29":{"body":"和 tidb 中的 protobuf 有关，暂时看不透。","breadcrumbs":"tipb_helper","id":"29","title":"tipb_helper"},"3":{"body":"如果你尝试过 build tikv，那你应该知道会产出两个二进制文件：实际的 tikv 服务器 tikv-server 和 用于控制 tikv 的 tikv-ctl。而这两个二进制文件的 main 就在这个 crate 里。","breadcrumbs":"cmd","id":"3","title":"cmd"},"30":{"body":"事务处理中使用的一些类型。","breadcrumbs":"txn_types","id":"30","title":"txn_types"},"31":{"body":"模糊测试。","breadcrumbs":"fuzz","id":"31","title":"fuzz"},"32":{"body":"tikv 的主体代码部分。","breadcrumbs":"src","id":"32","title":"src"},"33":{"body":"处理 tidb 推下来的请求。","breadcrumbs":"coprocessor","id":"33","title":"coprocessor"},"34":{"body":"tidb-lightning 的支持。","breadcrumbs":"import","id":"34","title":"import"},"35":{"body":"对外服务的 server 代码。","breadcrumbs":"server","id":"35","title":"server"},"36":{"body":"存储层，包括单机kv存储引擎、mvcc 及事务控制等。","breadcrumbs":"storage","id":"36","title":"storage"},"4":{"body":"作为单独出来的 crate 的tikv的源码。至于为什么是这些部分被单独出来……我也不知道啊TAT。也许我该问问公司的前辈们。","breadcrumbs":"components","id":"4","title":"components"},"5":{"body":"备份用组件。","breadcrumbs":"backup","id":"5","title":"backup"},"6":{"body":"和 raft store 有关系，暂时看不透。","breadcrumbs":"batch-system","id":"6","title":"batch-system"},"7":{"body":"看不透。","breadcrumbs":"cdc","id":"7","title":"cdc"},"8":{"body":"用于 encode、decode 数字等。","breadcrumbs":"codec","id":"8","title":"codec"},"9":{"body":"用来 “patch” 配置设置，这个子 crate 很好，可以用在你自己的 rust 项目中。","breadcrumbs":"configuration","id":"9","title":"configuration"}},"length":37,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"b":{"8":{"2":{"df":0,"docs":{},"e":{"7":{"df":0,"docs":{},"e":{"7":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"6":{"7":{"8":{"c":{"2":{"b":{"5":{"1":{"8":{"9":{"df":0,"docs":{},"f":{"a":{"c":{"c":{"a":{"0":{"8":{"a":{"7":{"d":{"df":0,"docs":{},"e":{"b":{"6":{"b":{"a":{"c":{"c":{"5":{"9":{"5":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"d":{"c":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"下":{"df":0,"docs":{},"一":{"df":0,"docs":{},"份":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"v":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}}}},"m":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"33":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":4,"docs":{"16":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"18":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"_":{"df":1,"docs":{"11":{"tf":1.0}}},"df":1,"docs":{"11":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"16":{"tf":1.0}}}}},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}}}},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":1,"docs":{"31":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"34":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"13":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"存":{"df":0,"docs":{},"储":{"df":0,"docs":{},"引":{"df":0,"docs":{},"擎":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"df":0,"docs":{},"v":{"c":{"c":{"df":1,"docs":{"36":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"df":2,"docs":{"24":{"tf":1.0},"34":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"g":{"_":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"15":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":1,"docs":{"15":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"16":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"_":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"19":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"f":{"df":1,"docs":{"29":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":2,"docs":{"20":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"d":{"_":{"df":0,"docs":{},"t":{"df":1,"docs":{"21":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"s":{"d":{"b":{"df":1,"docs":{"24":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"22":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"t":{"df":2,"docs":{"16":{"tf":1.0},"9":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"23":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.0},"35":{"tf":1.4142135623730951}}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"15":{"tf":1.0}}}}},"r":{"c":{"df":1,"docs":{"32":{"tf":1.0}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"l":{"df":1,"docs":{"23":{"tf":1.0}}},"t":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"24":{"tf":1.0}}}}}}}}},"df":1,"docs":{"24":{"tf":1.0}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"12":{"tf":1.0},"36":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":2,"docs":{"20":{"tf":1.0},"6":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"t":{"c":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"27":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"t":{"_":{"df":1,"docs":{"25":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"d":{"b":{"_":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"df":1,"docs":{"26":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":4,"docs":{"26":{"tf":1.0},"29":{"tf":1.0},"33":{"tf":1.0},"34":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"k":{"df":0,"docs":{},"v":{"_":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"27":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"28":{"tf":1.0}}}}}}},"df":3,"docs":{"0":{"tf":2.8284271247461903},"3":{"tf":2.23606797749979},"32":{"tf":1.0}},"的":{"df":0,"docs":{},"源":{"df":0,"docs":{},"码":{"df":0,"docs":{},"。":{"df":0,"docs":{},"至":{"df":0,"docs":{},"于":{"df":0,"docs":{},"为":{"df":0,"docs":{},"什":{"df":0,"docs":{},"么":{"df":0,"docs":{},"是":{"df":0,"docs":{},"这":{"df":0,"docs":{},"些":{"df":0,"docs":{},"部":{"df":0,"docs":{},"分":{"df":0,"docs":{},"被":{"df":0,"docs":{},"单":{"df":0,"docs":{},"独":{"df":0,"docs":{},"出":{"df":0,"docs":{},"来":{"df":0,"docs":{},"…":{"df":0,"docs":{},"…":{"df":0,"docs":{},"我":{"df":0,"docs":{},"也":{"df":0,"docs":{},"不":{"df":0,"docs":{},"知":{"df":0,"docs":{},"道":{"df":0,"docs":{},"啊":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"p":{"b":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":1,"docs":{"29":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"x":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"30":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"15":{"tf":1.0}}}},"df":0,"docs":{}}}}},"breadcrumbs":{"root":{"b":{"8":{"2":{"df":0,"docs":{},"e":{"7":{"df":0,"docs":{},"e":{"7":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"6":{"7":{"8":{"c":{"2":{"b":{"5":{"1":{"8":{"9":{"df":0,"docs":{},"f":{"a":{"c":{"c":{"a":{"0":{"8":{"a":{"7":{"d":{"df":0,"docs":{},"e":{"b":{"6":{"b":{"a":{"c":{"c":{"5":{"9":{"5":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"d":{"c":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"下":{"df":0,"docs":{},"一":{"df":0,"docs":{},"份":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"v":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}}}}},"m":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"33":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}}}}},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":4,"docs":{"16":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"18":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"、":{"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"_":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}},"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"16":{"tf":1.0}}}}},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"12":{"tf":1.4142135623730951}}}}}}}}}},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":1,"docs":{"31":{"tf":1.4142135623730951}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"34":{"tf":1.4142135623730951}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"14":{"tf":1.7320508075688772}}}},"v":{"df":0,"docs":{},"存":{"df":0,"docs":{},"储":{"df":0,"docs":{},"引":{"df":0,"docs":{},"擎":{"df":0,"docs":{},"、":{"df":0,"docs":{},"m":{"df":0,"docs":{},"v":{"c":{"c":{"df":1,"docs":{"36":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"df":2,"docs":{"24":{"tf":1.0},"34":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"g":{"_":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"df":1,"docs":{"15":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"16":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"_":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"19":{"tf":1.4142135623730951}}}}},"t":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"f":{"df":1,"docs":{"29":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":2,"docs":{"20":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"d":{"_":{"df":0,"docs":{},"t":{"df":1,"docs":{"21":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"s":{"d":{"b":{"df":1,"docs":{"24":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"22":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}},"t":{"df":2,"docs":{"16":{"tf":1.0},"9":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"23":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.0},"35":{"tf":1.7320508075688772}}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"15":{"tf":1.0}}}}},"r":{"c":{"df":1,"docs":{"32":{"tf":1.4142135623730951}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"l":{"df":1,"docs":{"23":{"tf":1.0}}},"t":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"24":{"tf":1.4142135623730951}}}}}}}}},"df":1,"docs":{"24":{"tf":1.0}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"12":{"tf":1.4142135623730951},"36":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"df":2,"docs":{"20":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}},"t":{"c":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"27":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"t":{"_":{"df":1,"docs":{"25":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"i":{"d":{"b":{"_":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"df":1,"docs":{"26":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"df":4,"docs":{"26":{"tf":1.0},"29":{"tf":1.0},"33":{"tf":1.0},"34":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"k":{"df":0,"docs":{},"v":{"_":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"27":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"28":{"tf":1.4142135623730951}}}}}}},"df":3,"docs":{"0":{"tf":2.8284271247461903},"3":{"tf":2.23606797749979},"32":{"tf":1.0}},"的":{"df":0,"docs":{},"源":{"df":0,"docs":{},"码":{"df":0,"docs":{},"。":{"df":0,"docs":{},"至":{"df":0,"docs":{},"于":{"df":0,"docs":{},"为":{"df":0,"docs":{},"什":{"df":0,"docs":{},"么":{"df":0,"docs":{},"是":{"df":0,"docs":{},"这":{"df":0,"docs":{},"些":{"df":0,"docs":{},"部":{"df":0,"docs":{},"分":{"df":0,"docs":{},"被":{"df":0,"docs":{},"单":{"df":0,"docs":{},"独":{"df":0,"docs":{},"出":{"df":0,"docs":{},"来":{"df":0,"docs":{},"…":{"df":0,"docs":{},"…":{"df":0,"docs":{},"我":{"df":0,"docs":{},"也":{"df":0,"docs":{},"不":{"df":0,"docs":{},"知":{"df":0,"docs":{},"道":{"df":0,"docs":{},"啊":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"p":{"b":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":1,"docs":{"29":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"x":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"30":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"15":{"tf":1.0}}}},"df":0,"docs":{}}}}},"title":{"root":{"b":{"8":{"2":{"df":0,"docs":{},"e":{"7":{"df":0,"docs":{},"e":{"7":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"6":{"7":{"8":{"c":{"2":{"b":{"5":{"1":{"8":{"9":{"df":0,"docs":{},"f":{"a":{"c":{"c":{"a":{"0":{"8":{"a":{"7":{"d":{"df":0,"docs":{},"e":{"b":{"6":{"b":{"a":{"c":{"c":{"5":{"9":{"5":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"c":{"d":{"c":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"33":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"_":{"df":1,"docs":{"11":{"tf":1.0}}},"df":1,"docs":{"11":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"12":{"tf":1.0}}}}}}}}}},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":1,"docs":{"31":{"tf":1.0}}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"34":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"13":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"14":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"_":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"15":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"m":{"a":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}}}},"d":{"_":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"19":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"20":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"d":{"_":{"df":0,"docs":{},"t":{"df":1,"docs":{"21":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"22":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"23":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"35":{"tf":1.0}}}}}}},"r":{"c":{"df":1,"docs":{"32":{"tf":1.0}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"24":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"12":{"tf":1.0},"36":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"20":{"tf":1.0}}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"t":{"_":{"df":1,"docs":{"25":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"d":{"b":{"_":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"df":1,"docs":{"26":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"k":{"df":0,"docs":{},"v":{"_":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":1,"docs":{"27":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"28":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"p":{"b":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":1,"docs":{"29":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"x":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"30":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});