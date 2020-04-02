# 찾아Zone

**본격적으로 방을 알아보기 전, 위치 가이드라인을 제공하는 주거 지역 큐레이션 서비스**

## 팀원

- 기획자 : 임정환(PM)
- 디자이너 : 장재영
- 개발자 : 노영지(FE), 안광호(FE), 이송원,(FE) 정원희(BE), 허진호(BE)

## 실행방법

- 현재 프로젝트를 로컬에 위치시킨 후 프로젝트 최상위 경로에서 아래 명령어 실행

  ```Shell
  npm install
  npm run start #server 실행
  npm run test #Jest 기반 테스트 실행
  npm run test:watch #Jest 기반 테스트 결과만 출력
  ```

- localhost:3000으로 접속하여 결과 확인

## 사용기술

### Language library

- React.js, Typescript

### Third Party library

Redux-saga, axios, SASS, Styled-Components

### Bundling

- Webpack

### Test library

- Jest, RTL(React Testing Library)

## 브랜치 전략

Git Flow방식을 사용하여 브랜치를 관리한다.

1. master : 배포 버전 소스(release브랜치를 통해서만 merge)
2. develop : 개발 완료된 소스(master브랜치에서 분리)
3. feature/{기능} : 새로운 기능 개발(develop에서 분리되며 완료 시 develop에 PR)
4. release : 배포 전 브랜치(develop에서 분리)

- 개발 진행 시 develop에서 브랜치를 분리하여 기능작업 후 develop에 병합을 수행한다.
- 배포 전 Test를 위해 release브랜치를 분리하며 Bug에 대하여 release에서 수정 후 master, develop브랜치 2군데에 병합한다.

## 개발 Flow

TDD 방법론을 사용하여 `테스트케이스 작성->구현->테스트케이스 수정->코드 수정` 과정을 반복하여 개발을 진행한다.

지속적인 제공 및 배포를 위하여 CI/CD를 사용한다.

### CI/CD 흐름도

사용기술 : git-hook(husky), github Action, Docker, Google Cloud

1. 개발자가 브랜치에 Push전 로컬에서 test를 진행하여 성공 시 push한다.(git-hook)
2. feature/{기능} -> develop 브랜치에 PR시 unit test를 진행하며 성공 시 PR을 진행한다.(github Action)
3. release -> master 브랜치에 PR시 unit test 수행 후 성공 시 PR을 진행한다.(github Action)
4. master 브랜치에 PR완료 시 npm build, dockerize 수행 후 Google Cloud에 배포한다.(github Aciont, Docker, Google Cloud)
5. Cloud에서 reverse proxy server를 사용하여 load balancer를 사용하여 무중단으로 배포한다.
