## Git Command

- `git init` : 저장소 생성. 프로젝트 초기에 딱 한 번만 사용한다.
- `git remote add origin <remote repository url>` : Repository 생성 후 디렉토리와 연결하는 명령어
- `git add <file name>` : 변경하기 전 준비 상태. 특정 파일이나 디렉토리를 지정하고 싶으면 git add [파일/디렉토리 경로] 형태로, 모든 파일을 선택하려면 git add . (띄어쓰기 유의!) 형태로 작성한다.
- `git commit` : 파일 또는 디렉토리의 변경 사항을 기록하는 명령어. 한 줄로 작성하면 git commit -m "변경 사항" 형태로, 여러줄로 작성하면 git commit 형태로 작성한다.
- `git push origin <branch name>` : 로컬 브랜치를 repo로 업로드 할 때 사용하는 명령어
- `git pull origin <branch name>` : 특정 브랜치 코드를 로컬로 가져올 때 사용. clone과는 다르게 이미 repo가 존재할 경우 사용한다.
- `git merge <branch name>` : 현재 브랜치 코드와 다른 브랜치 코드를 합치는 경우 사용
