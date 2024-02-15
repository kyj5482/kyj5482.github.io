---
title: Posting Soon
author: maple
date: 2024-02-15 23:35:00 +0900
categories: [Developing]
tags: [developer]
pin: false
image:
  path: /assets/img/developer.png
  alt: Developer Helper
---

이 글은 앞으로 한글로 작성 후 영어 번역 본을 배포하도록 하겠습니다. 지금까지 공부하고 적용해서 결과가 있었던 기술들 위주로 남길 예정이며, 어떤 글이 좋을지 의견 주시는 분들이 계시면 그것을 우선순위로 작성하겠습니다. 

1인 스타트업으로 혼자서 모든 개발 업무를 해야 하는 분들에게 도움이되고자 작성할 예정이며, 그래서 8인 이하 규모로 서비스를 개발하기 위해서 필요한 지식들만 남겨놓도록 하겠습니다.

## DevOps
* Git
* Terraform
* Jenkins
* Helm Chart
* Docker Repository
* ArgoCD
* Spinnaker
* Kubernetes

## Develop
* Golang
* Java
* API G/W (tyk.io)
* REST API
* GraphQL
* Protobuf
* grpc
* PostgreSQL
* MongoDB
* React.js
* React Native

## Service
* IoT Data Policy Service : IoT 기기에서 필요한 데이터를 정의한 수집 정책을 관리하고 배포하는 서비스
  * Data Policy Manager
  * Data Policy Deployment
  * IoT Device Manager
* IoT Data Stream Service : IoT 기기에서 데이터를 수집하고 처리하는 파이프라인 서비스
  * Data Processing Engine
  * Data Mapping Engine
* IoT Simulator : IoT 기기에서 수집 정책에 따라 가상의 데이터를 생성하고 전송하는 시뮬레이터 
* Account : 회원 계정
* Partner (Developer Site) : 3rd Party API를 통해서 외부 서비스와 연결하기 위한 서비스
* IoT Service

## Data Pipeline
* Kafka
* Kafka Connect
* Redis (Pub/Sub)
* Apache NiFi
* Apache Airflow
* Object Storage (AWS S3)

## DataOps
* Event Message Pipeline : 서비스에서 필요한 데이터를 수집하고 적재하는 서비스
  * Kafka - Elasticsearch
  * Kibana
* Log Monitoring
  * ELK
