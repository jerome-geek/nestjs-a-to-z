# 탄탄한 백엔드 NestJS, 기초부터 심화까지

## 목차

0.  🔥 첫 시작
1.  🦾 NestJS를 위한 express 핵심 원리
2.  📁 MySQL, MongoDB 설계와 구축
3.  🤖 NestJS 개요 및 객체지향 디자인 패턴
4.  😻 프로젝트 1 : 고양이 정보 커뮤니티
5.  🚀 프로젝트 배포와 서버 운영
6.  ⚡️ 프로젝트 2 : 랜덤 채팅 웹 앱 (풀스택, 소켓 프로그래밍)
7.  🤭 프로젝트 3 : 백엔드의 꽃 SQL / TypeORM in the Nest (보너스 섹션)
8.  ✨ 보너스 섹션 1 : 유용한 NestJS 플러그인
9.  🧐 QA : 강의 질문에 대한 답변들

## 참고

-   [NestJS 공식문서](https://docs.nestjs.com/)
-   [인프런 강의](https://www.inflearn.com/course/%ED%83%84%ED%83%84%ED%95%9C-%EB%B0%B1%EC%97%94%EB%93%9C-%EB%84%A4%EC%8A%A4%ED%8A%B8)
-   [인프런 강의 자료](https://github.com/amamov/teaching-nestjs-a-to-z)

## 질문

Q. Pipe를 사용하는 사례는 알겠지만 정의는 모르겠어요

> 파이프는 클라이언트 요청에서 들어오는 데이터를 유효성 검사 및 변환을 수행하여 서버가 원하는 데이터를 얻을 수 있도록 도와주는 클래스입니다.'
> 파이프는 단방향 통신을 위한 용도로 사용됩니다. 하나의 파이프는 이전 파이프에서 전달된 결과를 입력 값으로 받아 또 다른 결과 값을 내놓습니다. NestJS에서의 파이프는 클라이언트 요청에서 들어오는 데이터를 유효성 검사 및 변환을 수행하여 서버가 원하는 데이터를 얻을 수 있도록 도와주는 역할을 합니다.
> https://docs.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters
> Q. 요청 > 필터 > 파이프 > 라우트 핸들러 이런식으로 흐름이 흘러가는건가요?
> https://docs.nestjs.com/faq/request-lifecycle
