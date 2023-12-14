<p align="center" style="font-size: 35px; font-weight: 600">Installation</p>

## RabbitMQ 

```bash
$ sudo docker run -d -p 5672:5672 rabbitmq
```
---

## Redis

```bash
$ sudo docker run -d -p 6379:6379 redis
```
---

## NATS
```bash
$ sudo docker run -d -p 4222:4222 nats
```
---

## Mosquitto

```bash
$ sudo docker run -d -p 1883:1883 eclipse-mosquitto 
# or
$ sudo apt-get install mosquitto mosquitto-clients
```