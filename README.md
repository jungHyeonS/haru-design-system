# Haru-Design-System

하루(Haru) 디자인 시스템은 이름처럼 '매일' 마주하더라도 편안하고 질리지 않는 사용자 경험을 제공하는 것을 목표로 합니다.

차분한 파스텔 그린 컬러 팔레트를 중심으로 시각적 피로감을 최소화하고, 사용자가 오랜 시간 서비스를 이용하더라도 눈이 편안하도록 설계되었습니다.

## 시작하기 (Getting Started)
디자인 시스템은 Tailwind CSS를 기반으로 동작합니다. 따라서 프로젝트에 Tailwind CSS가 먼저 설치되어 있어야 합니다.

### 1. 사전 준비: Tailwind CSS 설치
아래 가이드 문서를 기반으로 테일윈드를 설치해주세요<br/>
[TailwindCSS](https://tailwindcss.com/docs/installation/using-vite)

### 2. 설치
[haru-design-system](https://www.npmjs.com/package/haru-design-system)
```
npm i haru-design-system
```

### 3. 기본 설정
index.css 혹은 global.css 파일에 디자인 시스템 스타일을 포함시켜주세요<br/>
tailwind 보다 아래에 포함되어있어야합니다
```
@import "tailwindcss";
@import "haru-design-system/dist/index.css";
```

## 디자인 토큰 (Design Tokens)

Haru 디자인 시스템은 일관된 UI를 위해 미리 정의된 디자인 토큰을 사용합니다

### 주요 색상 (Colors)

| 색상 | 역할 | CSS 변수 | HEX |
|---|---|---|---|
| ![](https://img.shields.io/badge/%20-%20-%2338a169?style=flat&labelColor=%2338a169&color=%2338a169) | Primary | `--color-primary` | `#38a169` |
| ![](https://img.shields.io/badge/%20-%20-%23f0fdf4?style=flat&labelColor=%23f0fdf4&color=%23f0fdf4) | Background | `--color-background` | `#f0fdf4` |
| ![](https://img.shields.io/badge/%20-%20-%231a202c?style=flat&labelColor=%231a202c&color=%231a202c) | Foreground | `--color-foreground` | `#1a202c` |
| ![](https://img.shields.io/badge/%20-%20-%23e53e3e?style=flat&labelColor=%23e53e3e&color=%23e53e3e) | Destructive | `--color-destructive` | `#e53e3e` |
| ![](https://img.shields.io/badge/%20-%20-%23e2e8f0?style=flat&labelColor=%23e2e8f0&color=%23e2e8f0) | Line | `--color-line-default` | `#e2e8f0` |

### 타이포그래피 (Typography)

| 종류 | CSS 변수명 | 값 |
| :--- | :--- | :--- |
| 기본 폰트 크기 | `--text-base` | `1rem` |
| 기본 폰트 굵기 | `--font-weight-normal` | `400` |
| 세미볼드 굵기 | `--font-weight-semibold` | `600` |

### 컴포넌트 미리보기
haru-design-system의 모든 컴포넌트는 [Chromatic](https://68a9805813a46b55129f2af9-ozeluookvy.chromatic.com/)을 통해 미리 확인할 수 있습니다.

## 사용법
haru-design-system은 아래와같이 사용할수있습니다
```
import React from 'react';
import { Button, Card } from 'haru-design-system';

const MyComponent = () => {
  return (
    <Card title="오늘의 할 일">
      <p>Haru 디자인 시스템 README 작성하기</p>
      <Button onClick={() => alert('완료!')}>
        완료
      </Button>
    </Card>
  );
};

export default MyComponent;
```


## 참고사항
이 디자인 시스템은 현재 개발 단계에 있습니다.
