# 테이블
1. 회원정보
 + 아이디
 + 비밀번호
 + 이메일
 + 이름
 + 생일
 + 나이
 + 성별
 + 등록일
 + 폰번호

2. 게시판
 + 게시물번호
 + 작성자
 + 제목
 + 내용
 + 조회수
 
 

# 기능
## 유저
1. 로그인
+ 로그인버튼
  + DB 검색
    + 있으면 : localStroge 저장
    + 없으면 : alert

2. 회원가입
+ 아이디 (중복버튼)
  + DB 검색
    + 있으면 : alert + 스테이트1
    + 없으면 : alert

+ 비밀번호(확인)
  + 비밀번호 정규식
    + 맞으면 : 초록색글 + 스테이트1
    + 틀리면 : 빨간색글

  + 비밀번호 두칸 동일한지
    + 맞으면 : 초록색 + 스테이트1
    + 틀리면 : 빨간색

+ 이메일(중복버튼)
  + 이메일 정규식
    + 맞으면 : 초록색글 + 스테이트1
    + 틀리면 : 빨간색글
  + 이메일 중복버튼
   + DB 검색
     + 있으면 : alert
     + 없으면 : alert

+ 성별
  

+ 생일
  + 켈렌더
    + 포멧형식으로 바꿔주기
+ 나이
  + 생일 선택하면 알아서 나이등록


3. 게시판

 


