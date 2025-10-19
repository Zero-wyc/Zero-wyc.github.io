---
hide: false
title: 小米BE6500开SSH,开机自启,固化和安装ShellCrash开启全家代理，配置IPV6外网访问
date: 2025-10-2
updated: 2025-10-4
categories: 搞机日志
cover: https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20251004231711657.webp
tags:
  - 搞机日志
  - 硬件
  - Linux
---

> 难蚌的预埋5类线，让我痛斥多年
> 光纤伟大，无需多言
> 顺带在这牵了光纤的时刻购入一台小米BE6500<!-- more -->
> 也开下ssh

---

==顺带提一嘴，lucky里的Web服务里的域名不要绑定到一个ipv6域名加端口，不要问我为什么，问就是2天的痛==

#### 配到最后，最终还是重置几回，Shellclash交给NAS做单臂路由，BE6500只留下Lucky，毕竟性能摆在那，而且还要做主路由的，总不能==ALL IN BOOM==吧？

#### TM的我是真觉得米家做的有问题，路由器改成192.168.1.1来分配DHCP（只要改过就绑不了米家），不论改SSH密码，root密码，米家都死活绑不上了艹，PPPOE拨号要指定Wan口才能拨号上网，甚至使用5G频段的Wifi都绑不了，害我研究好久

### 结案，啥也不动了，lucky和ShellClash都给NAS了，好好当个主路由吧

### CNM XIAOMI

---

1. #### 暂时开启SSH

   - #### 先登录系统，Chrome 浏览器上面的地址栏可以看到 Stok 变量

   - ####  然后打开 cmd，依次输入以下代码，小米路由器解锁 SSH 命令：（`<STOK>` 整体替换为你浏览器地址栏看到的数值，`<STOK>`数值每次重启后都会更改）

```cmd
curl -X POST "http://192.168.31.1/cgi-bin/luci/;stok={STOK}/api/xqsystem/start_binding" -d "uid=1234&key=1234'%0Anvram%20set%20ssh_en%3D1'"
curl -X POST "http://192.168.31.1/cgi-bin/luci/;stok={STOK}/api/xqsystem/start_binding" -d "uid=1234&key=1234'%0Anvram%20commit'"
curl -X POST "http://192.168.31.1/cgi-bin/luci/;stok={STOK}/api/xqsystem/start_binding" -d "uid=1234&key=1234'%0Ased%20-i%20's%2Fchannel%3D.*%2Fchannel%3D%22debug%22%2Fg'%20%2Fetc%2Finit.d%2Fdropbear'"
curl -X POST "http://192.168.31.1/cgi-bin/luci/;stok={STOK}/api/xqsystem/start_binding" -d  "uid=1234&key=1234'%0A%2Fetc%2Finit.d%2Fdropbear%20start'"
```

这里附上我自己的例子（自己改过路由地址）

```cmd
curl -X POST "http://192.168.31.1/cgi-bin/luci/;stok=c871f402bd1ec23c01199c60eb4ab5d0/api/xqsystem/start_binding" -d "uid=1234&key=1234'%0Anvram%20set%20ssh_en%3D1'"
curl -X POST "http://192.168.31.1/cgi-bin/luci/;stok=c871f402bd1ec23c01199c60eb4ab5d0/api/xqsystem/start_binding" -d "uid=1234&key=1234'%0Anvram%20commit'"
curl -X POST "http://192.168.31.1/cgi-bin/luci/;stok=c871f402bd1ec23c01199c60eb4ab5d0/api/xqsystem/start_binding" -d "uid=1234&key=1234'%0Ased%20-i%20's%2Fchannel%3D.*%2Fchannel%3D%22debug%22%2Fg'%20%2Fetc%2Finit.d%2Fdropbear'"
curl -X POST "http://192.168.31.1/cgi-bin/luci/;stok=c871f402bd1ec23c01199c60eb4ab5d0/api/xqsystem/start_binding" -d  "uid=1234&key=1234'%0A%2Fetc%2Finit.d%2Fdropbear%20start'"
```

-  ssh 即可打开，但是重启后就会失效
-  ssh 密码自己算号下
-  在 https://miwifi.dev/ssh 输入路由器的SN可以得到SSH密码，SN可以看路由器屁股，也可以进小米路由器后台看

2. #### 自动开启SSH

   - ```bash
     mkdir /data/auto_ssh
     cd /data/auto_ssh
     curl -O https://fastly.jsdelivr.net/gh/lemoeo/AX6S@main/auto_ssh.sh
     chmod +x auto_ssh.sh
     ./auto_ssh.sh install
     ```

3. #### 固化SSH（在每次升级后都保留SSH）

   1. 用 SSH 工具登录路由器后分别执行以下指令

      ```bash
      zz=$(dd if=/dev/zero bs=1 count=2 2>/dev/null) ; printf '\xA5\x5A%c%c' $zz $zz | mtd write - crash
      ```
      
2. 执行指令
   
   ```bash
      nvram set ssh_en=1
      nvram set telnet_en=1
      nvram set uart_en=1
      nvram set boot_wait=on
      nvram commit
      bdata set ssh_en=1
      bdata set telnet_en=1
      bdata set uart_en=1
      bdata set boot_wait=on
      bdata commit
      ```
      
   3. 执行指令后路由器会重启，重启后固化完成

      ```bash
   mtd erase crash
      reboot
      ```
   
      

4. #### 安装ShellCrash

   ```bash
   #jsDelivrCDN源
   export url='https://fastly.jsdelivr.net/gh/juewuy/ShellCrash@master' && sh -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null
   ```

   1. 安装ShellCrash网页面板，在SSH中输入clash，按下9然后按下4，进入安装面板界面，推荐安装zashboard，安装完成后进入`路由器ip:9999/ui`访问export url='https://fastly.jsdelivr.net/gh/juewuy/ShellCrash@master' && sh -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null

5. 配置IPV6外网访问 （可能因为固件更新原因，在更新后就不需要这个操作了）

   1. > BYD 小米开启IPV6后只提供外网Ping的服务，使得你以为你能在外网访问实则不行，又因为小米的系统是由OpenWRT 修改而来，所以放行端口的方式类似原版 OpenWRT,比较好配置~上天给你关了门，却给你了个窗户，这或许就是小米的浪漫~

   2.  使用 Vim 修改防火墙配置文件：

      1. 使用 Vim 修改防火墙配置文件：`vim /etc/config/firewall`

      2. 将文件中`defaults` 闭包下 `disable_ipv6` 的值改为 `0`，`zone` 闭包下 `forward` 的值改为 `ACCEPT`

         1. ![img](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20251003200004829.webp)

      3. 在原有的`Rule` 中添加一个闭包，允许IPv6外网访问路由器下游设备

         1. ```bash
              config rule                   
                option name 'Allow-IPv6'
                option target 'ACCEPT'  
                option family 'ipv6'    
                list proto 'all'        
                option src '*'          
                option dest '*'         
            ```

            

         2. ![img](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20251003200017955.webp)

         3. 修改完毕，保存文件并退出修改

         4. 路由器配置界面记得选择自动/Native

            ![image-20251003204230278](https://cdn.jsdelivr.net/gh/Zero-wyc/Image@main/myself/20251003204230389.webp)

      4. 终端执行命令，重启路由器防火墙：

         1. ```bash
            /etc/init.d/firewall restart
            ```

         - 安装lucky配置DDNS

           - ```
             URL="http://release.66666.host"; curl -o /tmp/install.sh "$URL/install.sh" && sh /tmp/install.sh "$URL"
             ```

             
         
         ---
         
         引用链接：
         
         [[Redmi AC2100 路由器 官方固件允许IPv6外网访问下游设备](https://www.cnblogs.com/wx2020/p/16028098.html)](https://www.cnblogs.com/wx2020/p/16028098.html)
         
         [[小米AX3000开启SSH 暴露IPV6公网IP](https://dragonfly.fun/code/miwifi.html)](https://dragonfly.fun/code/miwifi.html)

