# iptables 基础知识


# iptables 基础知识

内核包过滤与 NAT 管理工具.是 linux 系统中在用户空间中运行的运来配置内核防火墙的工具。它可以设置，维护和检查 linux 内核中的 ipv4 包过滤规则和管理网络地址转换（NAT）。  
ipatbles 命令仅支持 ipv4，如果使用的 IP 协议是 ipv6 则需要使用专门的管理工具 ip6tables。

## 常用参数

| 参数         | 作用                                                   |
| :----------- | :----------------------------------------------------- |
| -t<表>       | 指定要操纵的表                                         |
| -A           | 向规则链中追加条目                                     |
| -D           | 从规则链中删除条目                                     |
| -I           | 向规则链中插入条目                                     |
| -R           | 替换规则链中的相应条目                                 |
| -L           | 显示规则链中的已有条目                                 |
| -F           | 清除规则链中的现有条目。不改变规则链的默认目标策略     |
| -Z           | 清空规则链中的数据包计数器和字节计数器                 |
| -N           | 创建新的用户自定义规则链                               |
| -P           | 定义规则链中的默认目标（策略）                         |
| -h           | 显示帮助信息                                           |
| -p<协议>     | 指定要匹配的数据包的协议类型                           |
| -s<源地址>   | 指定要匹配的数据包的源 IP 地址                         |
| -j<目标>     | 指定要跳转的目标                                       |
| -i<网络接口> | 指定数据包进入本机的网络接口                           |
| -o<网络接口> | 指定数据包离开本机做使用的网络接口                     |
| -c<包计数>   | 在执行插入、追加和替换操作时初始化包计数器和字节计数器 |

## 参考实例

显示内核当前的 filter 表：

```sh
iptables -L
```

显示内核当前的 nat 表：

```sh
iptables -L -t nat
```

禁止本机对 192.168.20.20 地址的访问：

```sh
iptables -t filter -A OUTPUT -d 192.168.20.20 -j DROP
```

显示 filter 表的 OUTPUT 链：

```sh
iptables -L OUTPUT -t filter
```
