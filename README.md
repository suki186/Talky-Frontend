
<h5>Team 톡깽이</h5>

<div align="center">
 
# 💬 하고 싶은 말을 바로 꺼내는 도구: Talky
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/fd3bac30-3d21-4ee4-9bb3-02a9dfe110a9" />
</div>

> **언어 표현에 제약이 있는 사용자를 위한 AAC(보완대체의사소통) 기반 앱 서비스**

---

## 💡 프로젝트 개요  
이 서비스는 브로카 실어증 환자를 비롯한 언어 표현의 제약이 있는 사용자들이 장소와 상황에 맞게 문장을 자동으로 추천받고, 버튼 한 번으로 음성으로 발화(Text-To-Speech)할 수 있도록 도와주는 보완대체의사소통(AAC) 기반 앱 서비스입니다.

---
## 🏆 기대 효과

이 서비스는 발화에 어려움을 겪는 사용자의 자립성과 안정감을 향상시키는 것을 목표로 하며, 반복 사용을 통한 언어 학습 효과를 기대합니다.

### 사용자의 자립성과 안정성 향상
-   장소와 상황에 맞는 자동 문장 추천
-   TTS 버튼으로 음성 발화, STT 기능으로 상대방 말 인식

### 반복 사용을 통한 언어 학습
-   즐겨찾기 문장 등록 기능
-   롤플레잉 기반 발화 연습 모드 지원

---
## ⚙️ 주요 기능
<img width="1719" height="1080" alt="Image" src="https://github.com/user-attachments/assets/c81eb557-c01b-41e2-a67f-047771a853b3" />

**1. 일반 사용자** 

  * **상황, 장소 기반 문장 추천:** 사용자가 장소와 현재 상황을 입력하면 AI가 추천 문장을 제시.
  * **TTS, STT 기반 대화:** 추천 문장을 음성으로 출력하고, 상대방의 말을 인식하여 그에 맞는 대답을 다시 문장으로 제공.
  * **발화 연습 모드:** 병원, 식당 등 실제 상황을 기반으로 한 역할극을 통해 발화 연습 진행.
  * **부가 기능:** 즐겨찾기 문장 설정, 사용자 입력 기능, 앱 시작 문구 설정, 긴급 호출 기능 등

**2. 보호자**

  * **연동 사용자 사용 이력 통계:** 최근 일주일간의 TTS 사용 횟수, 자주 사용하는 문장, 시간/장소별 사용 분포 등 확인.
  * **전국 언어치료센터 위치 조회:** 지역별 언어치료센터의 위치를 지도에서 확인.

<br/>

| 메인 화면 | 추천 문장 조회 | 즐겨찾기 문장 조회 |
| ---------- | -----------| --------|
| <img width="360" height="780" alt="Image" src="https://github.com/user-attachments/assets/9c01d1a0-c70f-492a-b628-9d387092bfd9" /> | <img width="360" height="843" alt="Image" src="https://github.com/user-attachments/assets/af8f0802-ad74-4b1e-b297-5f893667309d" /> | <img width="360" height="780" alt="Image" src="https://github.com/user-attachments/assets/20c4dead-1c00-4c42-9cb0-726c1f7609da" /> |

| 롤플레잉 연습 화면 |  |
| ---------- | -----------|
| <img width="360" height="780" alt="Image" src="https://github.com/user-attachments/assets/02eb6fa7-5186-4db8-852f-1bdb15f5a35f" /> | <img width="360" height="780" alt="Image" src="https://github.com/user-attachments/assets/1c40eedc-412e-4e4a-944e-24735daa35a7" /> |

| 보호자 통계 화면 | 보호자 지도 화면 |
| ---------- | -----------|
| <img width="360" height="996" alt="Image" src="https://github.com/user-attachments/assets/95743308-421a-4bab-bf63-fe71df1c31a9" /> | <img width="360" height="780" alt="Image" src="https://github.com/user-attachments/assets/047865be-4f5a-4046-aa35-591828558a45" /> |

---
## 📚 기능 구조도 및 기술 스택

<div align="center">
<img width="685" height="370" alt="Image" src="https://github.com/user-attachments/assets/9a760fcc-04b9-4d23-bf51-2d760601b646" />

### 📱 Frontend
<p>
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white"/>
<img src="https://img.shields.io/badge/StyleSheet-DB7093?style=flat-square&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Context--Api-222222?style=flat-square&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Google_Map-4285F4?style=flat-square&logo=google&logoColor=white"/>
</p>

### 🚀 Backend
<p>
<img src="https://img.shields.io/badge/Java_21-ED8B00?style=flat-square&logo=openjdk&logoColor=white"/>
<img src="https://img.shields.io/badge/Spring_Boot_3.5.3-6DB33F?style=flat-square&logo=spring-boot&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"/>
<img src="https://img.shields.io/badge/JPA-59666C?style=flat-square&logo=hibernate&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white"/>
</p>

### 🤖 AI
<p>
<img src="https://img.shields.io/badge/Python_3.11-3776AB?style=flat-square&logo=python&logoColor=white"/>
<img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white"/>
<img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat-square&logo=google&logoColor=white"/>
<img src="https://img.shields.io/badge/OpenAI_Whisper-412991?style=flat-square&logo=openai&logoColor=white"/>
<img src="https://img.shields.io/badge/Transformers-FFD700?style=flat-square&logo=huggingface&logoColor=black"/>
<img src="https://img.shields.io/badge/ChromaDB-FF6B6B?style=flat-square&logo=database&logoColor=white"/>
<img src="https://img.shields.io/badge/Pydantic-E92063?style=flat-square&logo=python&logoColor=white"/>
<img src="https://img.shields.io/badge/Uvicorn-499848?style=flat-square&logo=gunicorn&logoColor=white"/>
</p>

</div>

---

## 👥 팀원 소개

| 김서희 (PM,FE) | 김예나 (FE) | 이준석 (BE) | 조주한 (BE,AI) | 최용주 (AI) | 정수현 (DE) |
|-------------|-------------|-------------|----------------|-------------|-------------|
| <img src="https://github.com/suki186.png" width="100" height="100"/> | <img src="https://github.com/a-neey.png" width="100" height="100"/> | <img src="https://github.com/Joonseok-Lee.png" width="100" height="100"/> | <img src="https://github.com/zzuhannn.png" width="100" height="100"/> | <img src="https://github.com/YJEND.png" width="100" height="100"/> | <img src="https://github.com/SsUu-hub.png" width="100" height="100"/> |
[@suki186](https://github.com/suki186) | [@a-neey](https://github.com/a-neey) | [@Joonseok-Lee](https://github.com/Joonseok-Lee) | [@zzuhannn](https://github.com/zzuhannn) | [@YJEND](https://github.com/YJEND) |[@SsUu-hub](https://github.com/SsUu-hub) |

<br/>

> 프리미엄 요금제: 음성의 언어 다양화, 자연스러운 말투(사용자 개인의 음성 기반), 즐겨찾기 문장 개수 무제한, 연동된 사용자의 위치 추적
