### 面向(服务端)开发人员的运维ABC

#### 开发 vs. 运维 的日常

**开发**: 对功能完成时间，bug数, etc. 负责。

* 使用桌面计算机，它们运行着macos/linux/Windows
* 使用IDE

 * 编辑
 * 编译、打包
 * 调试（运行）

* 偶尔使用自动化脚本(shell/python etc.)
 
 
**运维**: 对服务稳定性(SLO/SLA)负责

* 操作服务器/虚拟机，它们运行着linux，和业务代码，或公共服务(eureka/zk/redis etc.)
* 使用批量运维工具(puppet, etc.) 或 自动化脚本
 * 配置环境(os, net, lib, daemon, crontab)
 * 执行变更
 * 扩（缩）容、降级、备份

* 配置监控agent, 配置监控dashboard，配置报警
* 轮流值班

#### 为何兼职？
* 为何分开？—— 历史原因
 * 物理机集群
 * 商业软件服务商的习惯 IOE

* 云服务的大势所趋
 * 只有巨型公司／基础设施公司才值得维护物理机集群
 * BaaS [LeanCloud](https://leancloud.cn/) / [aws lambda](https://amazonaws-china.com/cn/lambda/?nc2=h_l3_c)

* 技能协同 
 * 底层基础知识能帮助开发工程师成长
 * 开发环境需不需要运维？ [battleschool](https://github.com/spencergibb/battleschool)

* 提升效率
 * 沟通：需求、异常、责任
 * 运维需求倒逼开发/交付质量

* extra mile: QA的大部分工作也应该由开发应该兼职干了吧。。


#### 如何入门
*仅作为目录，RTFM & STRW!*


**编辑器**

  * vim/emacs/nano
   * vimtutor
  
  
**常用工具**:
    
  * ssh
   * ssh-keygen, ssh-copy-id, authorized_keys
   * scp
   * rsync over ssh  
   * *ssh -L*
   * *ssh -R*
   
  * top
   * pid
   * cpu percent
   * load avg
   * tot mem
   * proc mem
  
  * ps
   * /proc/$pid  (linux-only, mac用户请使用lsof)
  
  * du/df
   * du -sh
   * df -hl
   
  * netstat
   * netstat -nlp
   * netstat -anp
   * iftop
  * ping 
  
  * lsof
  
  * md5sum(md5 on macos)
  
  * cp/rm/mv
  
**shell and scripting**:
 
 * bash scripting:
  * 读懂手头的.sh
  * ctrl+c/ctrl+z/bg/fg/kill
  * screen
  
 * awk/sed/paste
 * 熟练使用一门顺手的脚本语言
  * python or clojure?
  
**网络**:
 
 * tcp/ip 协议和编程
  * listen/accept/connect
  * read/write
  * close/shutdown
  * telnet 命令行工具
  * tcpdump 工具
  
 * HTTP/HTTPS 协议和编程
  * header/body
  * cookie 传"表单" 传"json" 
  * maybe HTTP/2.0
  * curl 命令行工具
 
 * 组网
  * router
  * ping / traceroute
  
 * see UNE
 
**linux基础**

 * 进程/线程模型
  * fork()/wait()
  * 线程库: posix pthread为例
   * pthread_create()/pthread_join()
   * mutex/semaphore/cond var
 
 * 文件系统
  * open()/close()
  * rename()/create()/unlink()
  
 * 内存模型
  * shared_mem
  
 * see APUE

*最终还是落到编程问题*

#### 扩展阅读
* Google SRE(Site Reliability Engineer)
* [UNE = UNIX Network Programming](http://www.unpbook.com/)
* [APUE = Advanced Programming in the UNIX® Environment](http://www.apuebook.com/apue3e.html)

