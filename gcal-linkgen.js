/*@preserve
 * Google Calendar Link Generator v0.9
 * Copyright 2019 Baram InfoTech LLC.
 * Licensed under MIT
 */

// 구글 캘린더 일정 링크 만들기
//	참고 링크: https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/master/services/google.md
function makeGcalUrl( title_
	, startDateTime_, endDateTime_, allDayOpt_
	, repeatType_, repeatCount_, repeatUntilDate_
	, timeZoneName_
	, details_
	, location_, crm_
	, guestsMails_, makerMail_ )
{
	// 링크 시작
	let outp = "https://calendar.google.com/calendar/r/eventedit?";

	// 제목
	outp += "text=";
	outp += encodeURIComponent( title_ );

	// 시작 시간 - 끝 시간
	outp += "&dates=";
	if ( allDayOpt_ ) {
		outp += ("0000" + startDateTime_.getFullYear()).slice(-4);
		outp += ("00" + (startDateTime_.getMonth() + 1)).slice(-2);
		outp += ("00" + startDateTime_.getDate()).slice(-2);
		outp += "/";
		endDateTime_.setDate( endDateTime_.getDate() + 1 );
		outp += ("0000" + endDateTime_.getFullYear()).slice(-4);
		outp += ("00" + (endDateTime_.getMonth() + 1)).slice(-2);
		outp += ("00" + endDateTime_.getDate()).slice(-2);
	} else {
		outp += ("0000" + startDateTime_.getUTCFullYear()).slice(-4);
		outp += ("00" + (startDateTime_.getUTCMonth() + 1)).slice(-2);
		outp += ("00" + startDateTime_.getUTCDate()).slice(-2);
		outp += "T";
		outp += ("00" + startDateTime_.getUTCHours()).slice(-2);
		outp += ("00" + startDateTime_.getUTCMinutes()).slice(-2);
		outp += "00Z";
		outp += "/";
		outp += ("0000" + endDateTime_.getUTCFullYear()).slice(-4);
		outp += ("00" + (endDateTime_.getUTCMonth() + 1)).slice(-2);
		outp += ("00" + endDateTime_.getUTCDate()).slice(-2);
		outp += "T";
		outp += ("00" + endDateTime_.getUTCHours()).slice(-2);
		outp += ("00" + endDateTime_.getUTCMinutes()).slice(-2);
		outp += "00Z";
	}

	// 반복 설정
	switch( repeatType_ ) {
		case 0: // 반복 없음
			break;
		case 1: // 매일 같은 시간
			outp += "&recur=RRULE:FREQ=DAILY";
			break;
		case 2: // 매주 같은 요일
			outp += "&recur=RRULE:FREQ=WEEKLY";
			break;
		case 3: // 매월 같은 일자
			outp += "&recur=RRULE:FREQ=MONTHLY";
			break;
		case 4: // 매년 같은 날짜
			outp += "&recur=RRULE:FREQ=YEARLY";
			break;
	}
	if ( repeatCount_ > 0 ) {
		outp += ";COUNT=";
		outp += repeatCount_;
	}
	if ( repeatUntilDate_ ) {
		outp += ";UNTIL=";
		outp += ("0000" + repeatUntilDate_.getUTCFullYear()).slice(-4);
		outp += ("00" + (repeatUntilDate_.getUTCMonth() + 1)).slice(-2);
		outp += ("00" + repeatUntilDate_.getUTCDate()).slice(-2);
		outp += "T";
		outp += ("00" + repeatUntilDate_.getUTCHours()).slice(-2);
		outp += ("00" + repeatUntilDate_.getUTCMinutes()).slice(-2);
		outp += "00Z";
	}

	// 타임존
	if ( !allDayOpt_ && timeZoneName_ ) {
		outp += "&ctz=";
		outp += timeZoneName_;
	}

	// 상세 내용
	if ( details_ ) {
		outp += "&details=";
		outp += encodeURIComponent( details_ );
	}

	// 위치
	if ( location_ ) {
		outp += "&location=";
		outp += encodeURIComponent( location_ );
	}

	// 상태: 한가함, 바쁨, 불참
	switch( crm_ ) {
		case 0:
			break;
		case 1:
			outp += "&crm=AVAILABLE";
			break;
		case 2:
			outp += "&crm=BUSY";
			break;
		case 3:
			outp += "&crm=BLOCKING";
			break;
	}

	// 참석자 메일 목록
	if ( guestsMails_ ) {
		outp += "&add=";
		outp += encodeURIComponent( ("" + guestsMails_).replace(/\s/g, '') );
	}

	// 주최자 메일
	if ( makerMail_ ) {
		outp += "&src=";
		outp += encodeURIComponent( ("" + makerMail_).replace(/\s/g, '') );
	}

	return outp;
}
