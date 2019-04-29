## 구글 캘린더 일정 링크 생성기

구글 캘린더의 일정을 추가하는 링크를 생성합니다.

![Picture](https://repository-images.githubusercontent.com/184148851/a13e9400-6b1c-11e9-8c97-7238a3933902)
[Project Page](https://tinywolf3.github.io/gcal-linkgen/)

### Demo

[Demo](https://tinywolf3.github.io/gcal-linkgen/gcal-linkgen.html) : https://tinywolf3.github.io/gcal-linkgen/gcal-linkgen.html

### 사용법

웹페이지에 스크립트 파일을 추가하고

```html
<script src="gcal-linkgen.js"></script>
```

함수를 호출해서 리턴값을 받습니다.

```javascript
function makeGcalUrl( String title_
	, Date startDateTime_, Date endDateTime_, Boolean allDayOpt_
	, Number repeatType_, Number repeatCount_, Date repeatUntilDate_
	, String timeZoneName_
	, String details_
	, String location_, Number crm_
	, String guestsMails_, String makerMail_ )
```

아래와 같이 사용합니다.

```javascript
let calurl = makeGcalUrl( "낮잠자기"
  , new Date(2019, 3, 30, 12, 30), new Date(2019, 3, 30, 13, 0), false
  , 1, 5, null
  , "Asia/Seoul"
  , "몸에 좋은 <b>낮잠</b>"
  , "우리집", 2
  , "aa@test.com, bb@test.com", "tinywolf@g9.work" );
```

## 매개변수 설명

### title_

문자열. !필수! 일정 제목입니다.

### startDateTime_

Date 객체. !필수! 시작 일시입니다.

allDayOpt_이 true일 경우에는 시간은 무시됩니다.

### endDateTime_

Date 객체. !필수! 끝 일시입니다.

allDayOpt_이 true일 경우에는 시간은 무시됩니다.

### allDayOpt_

Boolean 식. 종일 일정인지 선택합니다.

### repeatType_

정수. 반복 일정의 종류를 선택합니다.

* 0 = 반복하지 않습니다.
* 1 = 매일 같은 시간에 반복합니다.
* 2 = 매주 같은 요일에 반복합니다.
* 3 = 매달 같은 일자에 반복합니다.
* 4 = 매년 같은 날짜에 반복합니다.

### repeatCount_

정수. 몇번이나 반복할 것인지 선택합니다.

0보다 작거나 같은 수를 넣을 경우 무한 반복합니다.

repeatCount_와 repeatUntilDate_ 중에서 하나만 선택해야 합니다.

### repeatUntilDate_

Date 객체. 반복을 종료할 날짜를 선택합니다.

null이면 영원히 반복합니다.

repeatUntilDate_와 repeatCount_ 중에서 하나만 선택해야 합니다.

### timeZoneName_

문자열. [타임존 이름](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)입니다.

null이거나 allDayOpt_가 true이면 설정이 무시되고 로컬 타임존이 사용됩니다.

### details_

문자열. 일정의 상세한 내용입니다.
HTML 태그를 사용할 수 있습니다.

### location_

문자열. 일정이 실행되는 장소입니다.

### crm_

정수. 참석 상태를 선택합니다.

* 0 = 기본값을 사용합니다.
* 1 = 한가함.
* 2 = 바쁨.
* 3 = 불참.

### guestsMails_

문자열. 참석자의 이메일 주소들을 콤마로 구분하여 나열합니다.

### makerMail_

문자열. 주최자의 이메일 주소입니다.

