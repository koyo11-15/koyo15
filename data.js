const appContent = {
  camera: {
    title: "카메라",
    kind: "card",
    content: `
      <div class="card">
        <h3>카메라</h3>
        <p>지금 순간을 기록하는 공간.</p>
      </div>
    `
  },

  gallery: {
    title: "갤러리",
    kind: "gallery",
    content: `
      <div class="gallery-grid">
        <button class="gallery-item" data-title="낮의 한 컷" data-desc="햇살이 잘 드는 시간.">
          <div class="thumb" style="background:linear-gradient(135deg,#f5d3c6,#d7b8ff,#8eb0f8);"></div>
          <span class="label">낮의 한 컷</span>
        </button>

        <button class="gallery-item" data-title="저녁 노을" data-desc="조용한 저녁을 담아둔다.">
          <div class="thumb" style="background:linear-gradient(135deg,#f7d9ab,#ef8c7a,#5d6fb0);"></div>
          <span class="label">저녁 노을</span>
        </button>

        <button class="gallery-item" data-title="감성 사진" data-desc="작은 장면이 커다란 기억이 된다.">
          <div class="thumb" style="background:linear-gradient(135deg,#d9efd7,#9bc6bc,#7b91cf);"></div>
          <span class="label">감성 사진</span>
        </button>

        <button class="gallery-item" data-title="기억 보관함" data-desc="사소한 순간들이 쌓이는 곳.">
          <div class="thumb" style="background:linear-gradient(135deg,#e8d5ff,#c4b2ff,#8a98d9);"></div>
          <span class="label">기억 보관함</span>
        </button>
      </div>
    `
  },

  memo: {
    title: "메모",
    kind: "notes",
    content: `
      <div class="note-list">
        <div class="note-item"><strong>오늘의 생각</strong><p>무언가를 기록하는 건 나를 더 잘 아는 일이야.</p></div>
        <div class="note-item"><strong>사소한 계획</strong><p>좋은 하루를 만들기 위해 조금 더 천천히 걷기.</p></div>
      </div>
      <div class="note-editor">
        <textarea>기록은 생각을 정리해주고, 시간이 지나도 다시 돌아갈 수 있는 길이 된다.</textarea>
        <div class="action-row">
          <button class="small-btn">저장</button>
          <button class="small-btn">초기화</button>
        </div>
      </div>
    `
  },

  instagram: {
    title: "Instagram",
    kind: "feed",
    content: `
      <div class="feed-card">
        <div class="feed-header">
          <strong>@haengwoon</strong>
          <span class="story-badge">follow</span>
        </div>
        <div class="feed-image"></div>
        <p>오늘의 분위기: 조용하고, 따뜻하고, 아무 말 없이도 충분히 좋다.</p>
      </div>
      <div class="feed-card">
        <div class="feed-header">
          <strong>@daily_looks</strong>
          <span class="story-badge">new</span>
        </div>
        <div class="feed-image" style="background:linear-gradient(135deg,#c5d7ff,#f2cdb5,#d5d3ff);"></div>
        <p>주말엔 일어나서 바깥 공기를 마시고, 커피를 마신다.</p>
      </div>
    `
  },

  twitter: {
    title: "Twitter",
    kind: "feed",
    content: `
      <div class="feed-card">
        <div class="feed-header">
          <strong>@haengwoon</strong>
          <span class="story-badge">트윗</span>
        </div>
        <p>좋아하는 건 크게 말하지 않아도 남아있다. 조용한 감정이 더 오래 남는 법.</p>
      </div>
      <div class="feed-card">
        <div class="feed-header">
          <strong>@note</strong>
          <span class="story-badge">새 글</span>
        </div>
        <p>아침에 생긴 생각을 바로 적어두는 습관은 나를 지키는 방식이다.</p>
      </div>
    `
  },

  calendar: {
    title: "캘린더",
    kind: "calendar",
    content: `
      <div class="calendar-list">
        <div class="date-item"><strong>10월 25일</strong><p>회의 / 아이디어 정리 / 오후 산책</p></div>
        <div class="date-item"><strong>10월 27일</strong><p>새 프로젝트 브레인스토밍</p></div>
        <div class="date-item"><strong>10월 30일</strong><p>친구와 저녁 약속</p></div>
      </div>
    `
  },

  csmi: {
    title: "씨미",
    kind: "card",
    content: `
      <div class="card">
        <h3>씨미</h3>
        <p>이 앱은 네가 원하는 내용으로 채우면 돼.</p>
        <p>예: 자기소개, 팬페이지, 기록, 좋아하는 사람, 캐릭터 소개 등.</p>
      </div>
    `
  },

  eter: {
    title: "이터널리턴 닥지지",
    kind: "card",
    content: `
      <div class="card">
        <h3>이터널리턴 닥지지</h3>
        <p>전투 스타일, 캐릭터 메모, 플레이 기록, 추천 조합을 넣을 수 있어.</p>
      </div>
    `
  },

  phone: {
    title: "전화",
    kind: "phone",
    content: `
      <div class="phone-box">
        <h3>연락처</h3>
        <p>예: 가족, 친구, 팀원, 고객, 동료</p>
      </div>
    `
  },

  message: {
    title: "문자",
    kind: "messages",
    content: `
      <div class="message-list">
        <div class="message-item">
          <strong>민서</strong>
          <div class="message-bubble">오늘도 네 생각이 났어.</div>
        </div>
        <div class="message-item">
          <strong>동료</strong>
          <div class="message-bubble">이번 작업 끝나면 다시 공유해.</div>
        </div>
      </div>
    `
  },

  music: {
    title: "애플뮤직",
    kind: "music",
    content: `
      <div class="music-box">
        <div class="cover"></div>
        <h3>Now Playing</h3>
        <p>Moonlight Walk</p>
        <p>감성적인 밤 분위기</p>
      </div>
    `
  }
};
