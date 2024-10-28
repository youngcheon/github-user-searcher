# GitHub User Search

GitHub API를 사용하여 사용자를 검색하고 북마크할 수 있는 프로젝트입니다.

##  미리보기

![미리보기](public/preview.gif)


## 실행 방법

1. 프로젝트를 클론합니다:
   ```
   git clone https://github.com/youngcheon/github-user-searcher.git
   ```

2. 프로젝트 디렉토리로 이동합니다:
   ```
   cd github-user-searcher
   ```

3. 의존성 패키지를 설치합니다:
   ```
   yarn install
   ```

4. 개발 서버를 실행합니다:
   ```
   yarn dev
   ```

5. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열기

## 구현 사항

1. **사용자 검색**: GitHub 사용자를 실시간으로 검색할 수 있습니다.
2. **무한 스크롤**: 검색 결과를 스크롤하여 더 많은 사용자를 로드할 수 있습니다.
3. **북마크 기능**: 관심 있는 사용자를 북마크에 추가하거나 제거할 수 있습니다.

## 기술 스택

- Next.js
- React
- TypeScript
- Styled Components
- React Query
