<?xml version="1.0" encoding="UTF-8"?>
<uiuxSpec lang="ko-KR" source="상세서.md">
  <frontMatter>
    <title>위치 기반 통합 할인 정보 플랫폼 MVP - UI/UX 구현 상세서</title>
    <version>1.0</version>
    <last_updated>2026-01-21</last_updated>
    <scope>Mobile App (Android/iOS), Admin Web</scope>
  </frontMatter>
  <outline>
    <section id="sec-0001" level="1" title="1. 문서 목적 / 범위" startLine="8" endLine="14">
    </section>
    <section id="sec-0002" level="1" title="2. UX 원칙(구현 규칙)" startLine="15" endLine="31">
      <section id="sec-0003" level="2" title="2.1 핵심 UX 목표" startLine="17" endLine="22">
      </section>
      <section id="sec-0004" level="2" title="2.2 일반 규칙" startLine="23" endLine="31">
      </section>
    </section>
    <section id="sec-0005" level="1" title="3. 디자인 시스템(Design Tokens)" startLine="32" endLine="152">
      <section id="sec-0006" level="2" title="3.1 색상 팔레트(라이트 모드 기준)" startLine="34" endLine="70">
        <section id="sec-0007" level="3" title="Brand / Semantic" startLine="38" endLine="48">
        </section>
        <section id="sec-0008" level="3" title="Neutral / Surface" startLine="49" endLine="60">
        </section>
        <section id="sec-0009" level="3" title="Category Color (지도/캘린더 공통)" startLine="61" endLine="70">
        </section>
      </section>
      <section id="sec-0010" level="2" title="3.2 타이포그래피(모바일)" startLine="71" endLine="84">
      </section>
      <section id="sec-0011" level="2" title="3.3 그리드 / 여백 / 터치 규격" startLine="85" endLine="107">
        <section id="sec-0012" level="3" title="3.3.1 Spacing Tokens(권장)" startLine="91" endLine="103">
        </section>
        <section id="sec-0013" level="3" title="3.3.2 Breakpoints(권장)" startLine="104" endLine="107">
        </section>
      </section>
      <section id="sec-0014" level="2" title="3.4 라운드/그림자/테두리" startLine="108" endLine="129">
        <section id="sec-0015" level="3" title="3.4.1 Radius Tokens(권장)" startLine="113" endLine="120">
        </section>
        <section id="sec-0016" level="3" title="3.4.2 Elevation Tokens(권장)" startLine="121" endLine="129">
        </section>
      </section>
      <section id="sec-0017" level="2" title="3.5 상태 컬러/상태 규칙(공통)" startLine="130" endLine="135">
      </section>
      <section id="sec-0018" level="2" title="3.6 아이콘/일러스트 가이드" startLine="136" endLine="140">
      </section>
      <section id="sec-0019" level="2" title="3.7 표기(데이터 포맷) 규칙" startLine="141" endLine="152">
      </section>
    </section>
    <section id="sec-0020" level="1" title="4. 정보 구조(IA) / 내비게이션" startLine="153" endLine="190">
      <section id="sec-0021" level="2" title="4.1 모바일 앱 탭 구조(MVP 권장)" startLine="155" endLine="163">
      </section>
      <section id="sec-0022" level="2" title="4.2 기본 화면 흐름(주요)" startLine="164" endLine="169">
      </section>
      <section id="sec-0023" level="2" title="4.3 최초 진입(온보딩) / 권한 플로우(MVP)" startLine="170" endLine="190">
        <section id="sec-0024" level="3" title="4.3.1 온보딩 스텝(권장: 3~4장)" startLine="173" endLine="183">
        </section>
        <section id="sec-0025" level="3" title="4.3.2 권한 거부 시 UX 원칙" startLine="184" endLine="190">
        </section>
      </section>
    </section>
    <section id="sec-0026" level="1" title="5. 모바일 화면 명세" startLine="191" endLine="334">
      <section id="sec-0027" level="2" title="5.1 공통 상단(App Bar)" startLine="193" endLine="199">
      </section>
      <section id="sec-0028" level="2" title="5.2 지도(주변 할인) 화면" startLine="200" endLine="251">
        <section id="sec-0029" level="3" title="5.2.1 레이아웃" startLine="202" endLine="212">
        </section>
        <section id="sec-0030" level="3" title="5.2.2 지도 마커 규격" startLine="213" endLine="225">
        </section>
        <section id="sec-0031" level="3" title="5.2.3 필터 동작(지도/리스트 공통)" startLine="226" endLine="235">
        </section>
        <section id="sec-0032" level="3" title="5.2.4 하단 시트(결과 리스트) 규격" startLine="236" endLine="242">
        </section>
        <section id="sec-0033" level="3" title="5.2.5 지도 권한/오류 상태" startLine="243" endLine="251">
        </section>
      </section>
      <section id="sec-0034" level="2" title="5.3 캘린더 화면" startLine="252" endLine="279">
        <section id="sec-0035" level="3" title="5.3.1 상단 구성" startLine="254" endLine="258">
        </section>
        <section id="sec-0036" level="3" title="5.3.2 월(Month) 뷰 규칙" startLine="259" endLine="269">
        </section>
        <section id="sec-0037" level="3" title="5.3.3 하단 “일자 리스트(Agenda)” 영역" startLine="270" endLine="274">
        </section>
        <section id="sec-0038" level="3" title="5.3.4 캘린더 빈 상태" startLine="275" endLine="279">
        </section>
      </section>
      <section id="sec-0039" level="2" title="5.4 카테고리/검색 화면" startLine="280" endLine="293">
        <section id="sec-0040" level="3" title="5.4.1 카테고리 홈" startLine="282" endLine="287">
        </section>
        <section id="sec-0041" level="3" title="5.4.2 검색 결과 리스트" startLine="288" endLine="293">
        </section>
      </section>
      <section id="sec-0042" level="2" title="5.5 할인 상세(Deal Detail) 화면" startLine="294" endLine="314">
        <section id="sec-0043" level="3" title="5.5.1 레이아웃(스크롤)" startLine="296" endLine="308">
        </section>
        <section id="sec-0044" level="3" title="5.5.2 배지 규칙" startLine="309" endLine="314">
        </section>
      </section>
      <section id="sec-0045" level="2" title="5.6 설정(알림/권한) 화면" startLine="315" endLine="334">
        <section id="sec-0046" level="3" title="5.6.1 구성" startLine="317" endLine="328">
        </section>
        <section id="sec-0047" level="3" title="5.6.2 토글/슬라이더 규격" startLine="329" endLine="334">
        </section>
      </section>
    </section>
    <section id="sec-0048" level="1" title="6. 모바일 컴포넌트 상세 규격" startLine="335" endLine="449">
      <section id="sec-0049" level="2" title="6.1 할인 카드(Deal Card)" startLine="337" endLine="355">
        <section id="sec-0050" level="3" title="6.1.1 요약형(Summary)" startLine="340" endLine="350">
        </section>
        <section id="sec-0051" level="3" title="6.1.2 상세형(Detail Preview)" startLine="351" endLine="355">
        </section>
      </section>
      <section id="sec-0052" level="2" title="6.2 버튼(Button)" startLine="356" endLine="367">
      </section>
      <section id="sec-0053" level="2" title="6.3 입력창(Input)" startLine="368" endLine="379">
      </section>
      <section id="sec-0054" level="2" title="6.4 칩(Chip)" startLine="380" endLine="387">
      </section>
      <section id="sec-0055" level="2" title="6.5 탭/바텀 내비게이션" startLine="388" endLine="392">
      </section>
      <section id="sec-0056" level="2" title="6.6 모달 / 바텀시트" startLine="393" endLine="400">
      </section>
      <section id="sec-0057" level="2" title="6.7 스낵바/토스트" startLine="401" endLine="406">
      </section>
      <section id="sec-0058" level="2" title="6.8 로딩/스켈레톤" startLine="407" endLine="411">
      </section>
      <section id="sec-0059" level="2" title="6.9 빈 상태(Empty State)" startLine="412" endLine="417">
      </section>
      <section id="sec-0060" level="2" title="6.10 배지(Badge)" startLine="418" endLine="429">
      </section>
      <section id="sec-0061" level="2" title="6.11 아이콘 버튼(Icon Button)" startLine="430" endLine="437">
      </section>
      <section id="sec-0062" level="2" title="6.12 검색바(Search Bar)" startLine="438" endLine="449">
      </section>
    </section>
    <section id="sec-0063" level="1" title="7. Admin Web UI/UX 명세" startLine="450" endLine="531">
      <section id="sec-0064" level="2" title="7.1 레이아웃 / 그리드" startLine="452" endLine="460">
      </section>
      <section id="sec-0065" level="2" title="7.2 정보 구조(메뉴)" startLine="461" endLine="467">
      </section>
      <section id="sec-0066" level="2" title="7.3 할인 목록 화면(관리자)" startLine="468" endLine="492">
        <section id="sec-0067" level="3" title="7.3.1 상단 툴바" startLine="470" endLine="477">
        </section>
        <section id="sec-0068" level="3" title="7.3.2 테이블 컬럼(권장)" startLine="478" endLine="487">
        </section>
        <section id="sec-0069" level="3" title="7.3.3 삭제 UX" startLine="488" endLine="492">
        </section>
      </section>
      <section id="sec-0070" level="2" title="7.4 할인 등록/수정 폼" startLine="493" endLine="520">
        <section id="sec-0071" level="3" title="7.4.1 섹션 구성" startLine="495" endLine="514">
        </section>
        <section id="sec-0072" level="3" title="7.4.2 폼 검증 규칙" startLine="515" endLine="520">
        </section>
      </section>
      <section id="sec-0073" level="2" title="7.5 Admin 컴포넌트 규격(웹)" startLine="521" endLine="531">
      </section>
    </section>
    <section id="sec-0074" level="1" title="8. 푸시 알림 UX(사용자 관점)" startLine="532" endLine="549">
      <section id="sec-0075" level="2" title="8.1 알림 유형(최소)" startLine="534" endLine="537">
      </section>
      <section id="sec-0076" level="2" title="8.2 알림 문구 템플릿(가이드)" startLine="538" endLine="542">
      </section>
      <section id="sec-0077" level="2" title="8.3 알림 피로도 방지(규칙)" startLine="543" endLine="549">
      </section>
    </section>
    <section id="sec-0078" level="1" title="9. 접근성 / 품질 기준" startLine="550" endLine="565">
      <section id="sec-0079" level="2" title="9.1 접근성" startLine="552" endLine="558">
      </section>
      <section id="sec-0080" level="2" title="9.2 성능/안정성(UX 관점)" startLine="559" endLine="565">
      </section>
    </section>
    <section id="sec-0081" level="1" title="10. 구현 체크리스트(디자인/개발 공통)" startLine="566" endLine="572">
    </section>
  </outline>
  <rawLines>
    <line n="1">---</line>
    <line n="2">title: 위치 기반 통합 할인 정보 플랫폼 MVP - UI/UX 구현 상세서</line>
    <line n="3">version: 1.0</line>
    <line n="4">last_updated: 2026-01-21</line>
    <line n="5">scope: Mobile App (Android/iOS), Admin Web</line>
    <line n="6">---</line>
    <line n="7"></line>
    <line n="8"># 1. 문서 목적 / 범위</line>
    <line n="9"></line>
    <line n="10">본 문서는 **위치 기반 통합 할인 정보 제공 플랫폼(MVP)**의 UI/UX를 **디자인·개발이 그대로 참고하여 구현**할 수 있도록, 화면 구조/컴포넌트 규격/상태 규칙/색상·타이포·그리드 등의 **기준(Design System)**을 명세한다.  </line>
    <line n="11">※ 로그인/회원가입/결제 기능은 범위 제외(단, “설정/알림 수신”은 비회원 기준으로 제공).</line>
    <line n="12"></line>
    <line n="13">---</line>
    <line n="14"></line>
    <line n="15"># 2. UX 원칙(구현 규칙)</line>
    <line n="16"></line>
    <line n="17">## 2.1 핵심 UX 목표</line>
    <line n="18">- **내 주변 할인 발견**: 지도에서 3초 안에 “가까운 할인”을 인지(마커/리스트/필터의 즉시성).</line>
    <line n="19">- **일정 파악**: 캘린더에서 5초 안에 “오늘/이번주 할인”을 파악(요약 표시 + 상세 진입).</line>
    <line n="20">- **맞춤 알림**: 관심 카테고리 + 반경 기반 알림(과도한 알림 방지: 빈도/조용한 시간).</line>
    <line n="21">- **관리 효율**(Admin): 입력·수정 2분 이내(검증/자동완성/지도 선택).</line>
    <line n="22"></line>
    <line n="23">## 2.2 일반 규칙</line>
    <line n="24">- **1차 정보는 한 화면**에(“할인명/매장/기간/거리/카테고리”는 카드 상단에서 노출).</line>
    <line n="25">- **필터는 상단, 결과는 하단**: 지도/목록 화면 공통.</line>
    <line n="26">- **빈 상태는 행동을 제안**: “필터 해제”, “반경 확대”, “위치 권한 켜기” 등 CTA 제공.</line>
    <line n="27">- **실시간성 표기**: “방금 업데이트”, “오늘 종료” 등 시간을 텍스트/배지로 표시.</line>
    <line n="28">- **데이터 로딩 시 Skeleton 우선**(리스트/카드), 지도는 마커 점진 로딩.</line>
    <line n="29"></line>
    <line n="30">---</line>
    <line n="31"></line>
    <line n="32"># 3. 디자인 시스템(Design Tokens)</line>
    <line n="33"></line>
    <line n="34">## 3.1 색상 팔레트(라이트 모드 기준)</line>
    <line n="35">&gt; 구현 시 색상은 반드시 토큰으로 관리(하드코딩 금지).  </line>
    <line n="36">&gt; 표기: `토큰명 = HEX`</line>
    <line n="37"></line>
    <line n="38">### Brand / Semantic</line>
    <line n="39">| Token | Value | Usage |</line>
    <line n="40">|---|---:|---|</line>
    <line n="41">| `color.primary.600` | `#2563EB` | 주요 CTA, 선택 상태, 링크 |</line>
    <line n="42">| `color.primary.700` | `#1D4ED8` | Pressed/강조 |</line>
    <line n="43">| `color.accent.600` | `#F97316` | “할인/핫딜” 강조 배지, 포인트 |</line>
    <line n="44">| `color.success.600` | `#16A34A` | 적용/정상/저장 완료 |</line>
    <line n="45">| `color.warning.600` | `#D97706` | 유의/기간 임박 |</line>
    <line n="46">| `color.error.600` | `#DC2626` | 오류/삭제/필수 누락 |</line>
    <line n="47">| `color.info.600` | `#0EA5E9` | 안내/권한 요청 |</line>
    <line n="48"></line>
    <line n="49">### Neutral / Surface</line>
    <line n="50">| Token | Value | Usage |</line>
    <line n="51">|---|---:|---|</line>
    <line n="52">| `color.bg` | `#F8FAFC` | 앱 기본 배경 |</line>
    <line n="53">| `color.surface` | `#FFFFFF` | 카드/시트/모달 |</line>
    <line n="54">| `color.surface.2` | `#F1F5F9` | 입력 필드 배경/선택 영역 |</line>
    <line n="55">| `color.text.primary` | `#0F172A` | 본문/제목 |</line>
    <line n="56">| `color.text.secondary` | `#475569` | 보조 텍스트 |</line>
    <line n="57">| `color.text.tertiary` | `#64748B` | 캡션/힌트 |</line>
    <line n="58">| `color.border` | `#E2E8F0` | 구분선/테두리 |</line>
    <line n="59">| `color.shadow` | `rgba(15,23,42,0.12)` | 그림자 |</line>
    <line n="60"></line>
    <line n="61">### Category Color (지도/캘린더 공통)</line>
    <line n="62">&gt; 카테고리별 고정 색상(아이콘/마커 링/캘린더 바). 추가 카테고리 발생 시 기존 톤과 대비 유지.</line>
    <line n="63">| Category | Token | Value |</line>
    <line n="64">|---|---|---:|</line>
    <line n="65">| 마트 | `color.cat.market` | `#2563EB` |</line>
    <line n="66">| 프랜차이즈 | `color.cat.franchise` | `#7C3AED` |</line>
    <line n="67">| 카페 | `color.cat.cafe` | `#B45309` |</line>
    <line n="68">| 병원 | `color.cat.hospital` | `#0EA5E9` |</line>
    <line n="69">| 기타 | `color.cat.etc` | `#64748B` |</line>
    <line n="70"></line>
    <line n="71">## 3.2 타이포그래피(모바일)</line>
    <line n="72">&gt; 기본 폰트 권장: Android `Roboto + Noto Sans KR`, iOS `SF Pro + Apple SD Gothic Neo`  </line>
    <line n="73">&gt; 줄간격(Line-height)은 가독성을 위해 고정 비율 사용(토큰화 권장).</line>
    <line n="74"></line>
    <line n="75">| Style | Size | Weight | Line-height | Usage |</line>
    <line n="76">|---|---:|---:|---:|---|</line>
    <line n="77">| `typo.h1` | 24 | 700 | 32 | 화면 타이틀(상단) |</line>
    <line n="78">| `typo.h2` | 20 | 700 | 28 | 섹션 제목 |</line>
    <line n="79">| `typo.h3` | 16 | 700 | 24 | 카드/리스트 제목 |</line>
    <line n="80">| `typo.body1` | 15 | 400 | 22 | 본문 |</line>
    <line n="81">| `typo.body2` | 13 | 400 | 20 | 보조 설명 |</line>
    <line n="82">| `typo.caption` | 12 | 400 | 18 | 라벨/힌트 |</line>
    <line n="83">| `typo.button` | 15 | 600 | 20 | 버튼 |</line>
    <line n="84"></line>
    <line n="85">## 3.3 그리드 / 여백 / 터치 규격</line>
    <line n="86">- **Spacing scale**(dp/pt 공통): 4, 8, 12, 16, 20, 24, 32, 40, 48</line>
    <line n="87">- **모바일 기본 패딩**: 화면 좌우 16, 상단 12, 섹션 간 16</line>
    <line n="88">- **최소 터치 영역**: 44pt(iOS) / 48dp(Android)</line>
    <line n="89">- **아이콘 크기**: 20/24 기본(탭바 24, 리스트 20~24)</line>
    <line n="90"></line>
    <line n="91">### 3.3.1 Spacing Tokens(권장)</line>
    <line n="92">| Token | Value | Notes |</line>
    <line n="93">|---|---:|---|</line>
    <line n="94">| `space.1` | 4 | 최소 단위 |</line>
    <line n="95">| `space.2` | 8 | 아이콘-텍스트 간격 |</line>
    <line n="96">| `space.3` | 12 | 카드 내부 보조 간격 |</line>
    <line n="97">| `space.4` | 16 | 화면 기본 패딩 |</line>
    <line n="98">| `space.5` | 20 | 섹션 상단 여백 |</line>
    <line n="99">| `space.6` | 24 | 섹션 간격 |</line>
    <line n="100">| `space.8` | 32 | 큰 구획 간격 |</line>
    <line n="101">| `space.10` | 40 | 빈 상태/대형 여백 |</line>
    <line n="102">| `space.12` | 48 | 최소 터치 영역 기준 |</line>
    <line n="103"></line>
    <line n="104">### 3.3.2 Breakpoints(권장)</line>
    <line n="105">- Mobile: `360`(base), `412`(large), `600+`(tablet/폴더블)</line>
    <line n="106">- Admin Web: `1024`(min), `1280`(base), `1440+`(wide)</line>
    <line n="107"></line>
    <line n="108">## 3.4 라운드/그림자/테두리</line>
    <line n="109">- Radius: `r8`=8, `r12`=12(버튼/칩), `r16`=16(카드/시트)</line>
    <line n="110">- Border: 1px, `color.border`</line>
    <line n="111">- Shadow(카드): blur 16, y 4, `color.shadow` (플랫폼별 elevation으로 매핑)</line>
    <line n="112"></line>
    <line n="113">### 3.4.1 Radius Tokens(권장)</line>
    <line n="114">| Token | Value |</line>
    <line n="115">|---|---:|</line>
    <line n="116">| `radius.sm` | 8 |</line>
    <line n="117">| `radius.md` | 12 |</line>
    <line n="118">| `radius.lg` | 16 |</line>
    <line n="119">| `radius.pill` | 999 |</line>
    <line n="120"></line>
    <line n="121">### 3.4.2 Elevation Tokens(권장)</line>
    <line n="122">| Token | Android(elevation) | iOS(shadow guide) | Usage |</line>
    <line n="123">|---|---:|---|---|</line>
    <line n="124">| `elev.0` | 0 | none | 배경/기본 |</line>
    <line n="125">| `elev.1` | 1 | y=1, blur=4, opacity=0.08 | 상단바/구분 |</line>
    <line n="126">| `elev.2` | 2 | y=2, blur=8, opacity=0.10 | 드롭다운/팝오버 |</line>
    <line n="127">| `elev.3` | 4 | y=4, blur=16, opacity=0.12 | 카드/바텀시트 |</line>
    <line n="128">| `elev.4` | 8 | y=8, blur=24, opacity=0.14 | 모달/중요 레이어 |</line>
    <line n="129"></line>
    <line n="130">## 3.5 상태 컬러/상태 규칙(공통)</line>
    <line n="131">- Disabled: 텍스트 `color.text.tertiary`, 배경 `color.surface.2`, border `color.border`</line>
    <line n="132">- Pressed: 색상 700 단계(예: primary.700), 불투명도 0.92</line>
    <line n="133">- Focus(웹): outline 2px `color.primary.600` + offset 2px</line>
    <line n="134">- Error: 입력 하단 메시지 `color.error.600`, 테두리 `color.error.600`</line>
    <line n="135"></line>
    <line n="136">## 3.6 아이콘/일러스트 가이드</line>
    <line n="137">- 아이콘 스타일: 라운드(둥근 모서리), 단색(기본 `color.text.secondary`), 2px 스트로크 계열 권장</line>
    <line n="138">- 플랫폼 매핑: Android(Material Symbols) / iOS(SF Symbols) 사용 가능하되, **동일 의미 아이콘**으로 통일</line>
    <line n="139">- 카테고리 아이콘(권장): 마트(카트), 프랜차이즈(매장), 카페(컵), 병원(십자/의료)</line>
    <line n="140"></line>
    <line n="141">## 3.7 표기(데이터 포맷) 규칙</line>
    <line n="142">- 거리:</line>
    <line n="143">  - `&lt; 1000m` → `###m` (예: `350m`)</line>
    <line n="144">  - `&gt;= 1km` → `#.#km` (예: `1.2km`, 소수 1자리)</line>
    <line n="145">- 날짜/요일: `YYYY.MM.DD (요일)` (예: `2026.01.21 (수)`)</line>
    <line n="146">- 기간: `YYYY.MM.DD ~ YYYY.MM.DD`</line>
    <line n="147">- 시간: 24시간제 `HH:mm`</line>
    <line n="148">- 금액: `₩` + 천 단위 구분(예: `₩12,900`)</line>
    <line n="149">- 혜택 요약: 리스트/알림 노출용 40자 이내(개행 금지)</line>
    <line n="150"></line>
    <line n="151">---</line>
    <line n="152"></line>
    <line n="153"># 4. 정보 구조(IA) / 내비게이션</line>
    <line n="154"></line>
    <line n="155">## 4.1 모바일 앱 탭 구조(MVP 권장)</line>
    <line n="156">하단 탭 4개(고정):</line>
    <line n="157">1) **지도**(주변 할인 탐색)  </line>
    <line n="158">2) **캘린더**(일자별 할인)  </line>
    <line n="159">3) **카테고리**(섹션별 탐색/검색 진입)  </line>
    <line n="160">4) **설정**(알림/권한/반경/고객지원)</line>
    <line n="161"></line>
    <line n="162">&gt; 알림함(수신 내역)이 필요하면 “설정” 상단에 “알림” 메뉴로 제공(탭 증설 지양).</line>
    <line n="163"></line>
    <line n="164">## 4.2 기본 화면 흐름(주요)</line>
    <line n="165">- 지도 탭 → 마커 탭 → 하단 시트(요약) → 상세(Deal Detail)</line>
    <line n="166">- 캘린더 탭 → 날짜 선택 → 해당 날짜 리스트 → 상세</line>
    <line n="167">- 카테고리 탭 → 카테고리 선택/검색 → 리스트 → 상세</line>
    <line n="168">- 설정 → 알림 설정(카테고리/반경/시간)</line>
    <line n="169"></line>
    <line n="170">## 4.3 최초 진입(온보딩) / 권한 플로우(MVP)</line>
    <line n="171">&gt; 로그인 없이 개인화(관심 카테고리/반경)는 **디바이스 로컬 저장**을 기본으로 한다.</line>
    <line n="172"></line>
    <line n="173">### 4.3.1 온보딩 스텝(권장: 3~4장)</line>
    <line n="174">1) 가치 제안: “내 주변 할인 · 캘린더로 한눈에 · 관심 알림”</line>
    <line n="175">2) 위치 권한 안내(사전 고지 화면)</line>
    <line n="176">   - 핵심 문구: “주변 할인 안내를 위해 위치 정보가 필요해요.”</line>
    <line n="177">   - CTA: `위치 권한 허용`(primary), `나중에`(secondary)</line>
    <line n="178">3) 알림 권한 안내(사전 고지 화면)</line>
    <line n="179">   - 핵심 문구: “관심 카테고리 할인 시작/임박 알림을 받을 수 있어요.”</line>
    <line n="180">   - CTA: `알림 허용`(primary), `건너뛰기`(secondary)</line>
    <line n="181">4) 관심 카테고리 선택(옵션)</line>
    <line n="182">   - 칩 멀티 선택 + `완료`(primary)</line>
    <line n="183"></line>
    <line n="184">### 4.3.2 권한 거부 시 UX 원칙</line>
    <line n="185">- 위치 거부: 지도 상단에 “주소로 검색” 경로를 항상 노출하고, 설정 화면에서 권한 상태/이동 버튼 제공</line>
    <line n="186">- 알림 거부: 설정에서 토글을 보여주되, OS 설정 이동 CTA 제공</line>
    <line n="187">- 권한 요청 타이밍: 온보딩에서 1회, 이후 기능을 사용하려는 순간(예: “주변 할인 보기”)에 재요청(무한 재요청 금지)</line>
    <line n="188"></line>
    <line n="189">---</line>
    <line n="190"></line>
    <line n="191"># 5. 모바일 화면 명세</line>
    <line n="192"></line>
    <line n="193">## 5.1 공통 상단(App Bar)</line>
    <line n="194">- 높이: 56</line>
    <line n="195">- 좌측: 뒤로가기(상세/서브 화면), 루트 탭에서는 미노출</line>
    <line n="196">- 중앙: 타이틀(`typo.h2`)</line>
    <line n="197">- 우측: 아이콘 버튼(검색/필터/현재위치 등), 터치 48</line>
    <line n="198">- 배경: `color.surface`, 하단 divider 1px `color.border`(스크롤 시작 시만 노출 권장)</line>
    <line n="199"></line>
    <line n="200">## 5.2 지도(주변 할인) 화면</line>
    <line n="201"></line>
    <line n="202">### 5.2.1 레이아웃</line>
    <line n="203">- 상단 고정 영역:</line>
    <line n="204">  - 검색바(장소/매장/할인명): 48h, radius 12, 좌측 돋보기 아이콘</line>
    <line n="205">  - 필터 칩 Row(가로 스크롤): 높이 40 영역</line>
    <line n="206">- 본문: Google Map 전체(상단 영역 아래부터)</line>
    <line n="207">- 우하단 플로팅 버튼(2개 스택):</line>
    <line n="208">  - “현재 위치”: 44(원형), 아이콘 24</line>
    <line n="209">  - “필터”: 44(원형) 또는 상단 필터칩으로 대체 가능(MVP는 1개만 권장)</line>
    <line n="210">- 하단 시트(Bottom Sheet):</line>
    <line n="211">  - 상태: Collapsed(요약 1~2개 카드) / Half / Full(리스트)</line>
    <line n="212"></line>
    <line n="213">### 5.2.2 지도 마커 규격</line>
    <line n="214">- 기본 마커: 36x36, 원형</line>
    <line n="215">  - 내부: 카테고리 아이콘 18(단색 흰색)</line>
    <line n="216">  - 배경: 카테고리 색상 토큰</line>
    <line n="217">  - 외곽 링: 2px `#FFFFFF`</line>
    <line n="218">- 선택 마커:</line>
    <line n="219">  - 크기 44x44</line>
    <line n="220">  - 외곽 링 3px `color.accent.600`</line>
    <line n="221">  - 선택 시 하단 시트가 해당 항목으로 스크롤/하이라이트</line>
    <line n="222">- 클러스터:</line>
    <line n="223">  - 44x44, 배경 `color.primary.600`, 텍스트 흰색(숫자)</line>
    <line n="224">  - 탭 시 줌인(단계: +2), 또는 클러스터 펼침</line>
    <line n="225"></line>
    <line n="226">### 5.2.3 필터 동작(지도/리스트 공통)</line>
    <line n="227">필터는 “빠른 칩 + 상세 필터 시트” 2단 구조 권장.</line>
    <line n="228">- 빠른 칩(최대 6개):</line>
    <line n="229">  - 카테고리(멀티), “오늘”, “이번주”, “무료/특가”(데이터 있을 때)</line>
    <line n="230">- 상세 필터(모달 바텀시트):</line>
    <line n="231">  - 반경: 0.5km / 1 / 3 / 5 / 10 (Segment) + “직접 입력”(선택)</line>
    <line n="232">  - 기간: 오늘/이번주/기간 선택(날짜 피커)</line>
    <line n="233">  - 정렬: 거리순(기본)/마감임박/최신등록</line>
    <line n="234">  - 버튼: `초기화`(secondary) / `적용`(primary)</line>
    <line n="235"></line>
    <line n="236">### 5.2.4 하단 시트(결과 리스트) 규격</line>
    <line n="237">- Collapsed: 높이 96~120, “가까운 할인 N개” + 카드 1개</line>
    <line n="238">- Half: 화면 50%</line>
    <line n="239">- Full: 90%(상단 핸들 + 검색/정렬 유지)</line>
    <line n="240">- 상단 핸들: 36 영역, 중앙 32x4 라운드 바</line>
    <line n="241">- 리스트 아이템은 **할인 카드(요약형)** 사용(§6.1)</line>
    <line n="242"></line>
    <line n="243">### 5.2.5 지도 권한/오류 상태</line>
    <line n="244">- 위치 권한 없음:</line>
    <line n="245">  - 빈상태 일러스트/아이콘 + 문구 + CTA 2개</line>
    <line n="246">  - CTA: `위치 권한 허용`(primary), `주소로 검색`(secondary)</line>
    <line n="247">- GPS 꺼짐:</line>
    <line n="248">  - 상단 배너(높이 44) “위치 서비스가 꺼져 있어요” + `켜기` 버튼</line>
    <line n="249">- 데이터 로딩 실패:</line>
    <line n="250">  - 하단 스낵바 “불러오지 못했어요” + `다시 시도`</line>
    <line n="251"></line>
    <line n="252">## 5.3 캘린더 화면</line>
    <line n="253"></line>
    <line n="254">### 5.3.1 상단 구성</line>
    <line n="255">- 월/주 토글(세그먼트): 높이 36, radius 10</line>
    <line n="256">  - 기본: 월(Month)</line>
    <line n="257">- 우측: 필터(카테고리) 아이콘 버튼 48</line>
    <line n="258"></line>
    <line n="259">### 5.3.2 월(Month) 뷰 규칙</line>
    <line n="260">- 그리드: 7열, 셀 높이 52~56</line>
    <line n="261">- 날짜 숫자: `typo.caption`, 기본 `color.text.primary`</line>
    <line n="262">- 오늘 표시:</line>
    <line n="263">  - 날짜 원형 배경 `color.primary.600`, 텍스트 흰색</line>
    <line n="264">- 선택 날짜:</line>
    <line n="265">  - 테두리 2px `color.accent.600`</line>
    <line n="266">- 이벤트 표시:</line>
    <line n="267">  - 셀 하단에 “도트” 최대 3개(카테고리 색상)</line>
    <line n="268">  - 4개 이상이면 `+N` 캡션 표시(회색)</line>
    <line n="269"></line>
    <line n="270">### 5.3.3 하단 “일자 리스트(Agenda)” 영역</line>
    <line n="271">- 날짜 선택 시 하단에 리스트 표시(스크롤)</line>
    <line n="272">- 리스트 카드(요약형) + “정렬: 시간/거리”</line>
    <line n="273">- 날짜 헤더: `2026.01.21 (수)` 형식(로케일 고정)</line>
    <line n="274"></line>
    <line n="275">### 5.3.4 캘린더 빈 상태</line>
    <line n="276">- 선택 날짜에 이벤트 없음:</line>
    <line n="277">  - 문구 “이 날에는 등록된 할인이 없어요”</line>
    <line n="278">  - 보조 CTA: `주변 할인 보기`(지도 탭 이동)</line>
    <line n="279"></line>
    <line n="280">## 5.4 카테고리/검색 화면</line>
    <line n="281"></line>
    <line n="282">### 5.4.1 카테고리 홈</line>
    <line n="283">- 상단 검색바(48h)</line>
    <line n="284">- 카테고리 그리드: 2열(모바일), 카드 높이 96, radius 16</line>
    <line n="285">  - 아이콘 28, 라벨 `typo.h3`</line>
    <line n="286">  - 색상: 카테고리 컬러를 12% 투명 배경으로 사용</line>
    <line n="287"></line>
    <line n="288">### 5.4.2 검색 결과 리스트</line>
    <line n="289">- 상단: 검색어 + 필터 칩(카테고리/반경/기간)</line>
    <line n="290">- 결과: 요약 카드 리스트(무한 스크롤)</line>
    <line n="291">- 빈 결과:</line>
    <line n="292">  - “검색 결과가 없어요” + 제안(필터 해제/반경 확대)</line>
    <line n="293"></line>
    <line n="294">## 5.5 할인 상세(Deal Detail) 화면</line>
    <line n="295"></line>
    <line n="296">### 5.5.1 레이아웃(스크롤)</line>
    <line n="297">1) 헤더</line>
    <line n="298">   - 매장명/할인명(2줄까지), 카테고리 배지</line>
    <line n="299">   - 거리/주소(보조)</line>
    <line n="300">2) 핵심 정보 카드(요약)</line>
    <line n="301">   - 기간(시작~종료), 영업/적용 시간(있다면)</line>
    <line n="302">   - 혜택 요약(예: “10% 할인”, “1+1”)</line>
    <line n="303">3) 지도 미니(고정 높이 160) + “길찾기” 버튼</line>
    <line n="304">4) 상세 설명(조건/제외 품목/유의사항)</line>
    <line n="305">5) 푸터 CTA(고정)</line>
    <line n="306">   - Primary: `알림 받기` (관심 추가)</line>
    <line n="307">   - Secondary: `캘린더에 저장`(로컬/OS 캘린더 연동은 옵션, MVP는 앱 내부 저장만 허용 가능)</line>
    <line n="308"></line>
    <line n="309">### 5.5.2 배지 규칙</line>
    <line n="310">- “오늘 종료”: `color.warning.600`</line>
    <line n="311">- “마감 임박(24h 이내)”: `color.warning.600`</line>
    <line n="312">- “신규(24h 이내 등록)”: `color.info.600`</line>
    <line n="313">- “인기”(데이터 있을 때): `color.accent.600`</line>
    <line n="314"></line>
    <line n="315">## 5.6 설정(알림/권한) 화면</line>
    <line n="316"></line>
    <line n="317">### 5.6.1 구성</line>
    <line n="318">- 알림 설정</line>
    <line n="319">  - 관심 카테고리(멀티 선택)</line>
    <line n="320">  - 알림 반경(0.5~10km)</line>
    <line n="321">  - 조용한 시간(Quiet hours): 22:00~08:00 기본 OFF</line>
    <line n="322">  - “주변 할인 발생 시 알림” 토글(ON/OFF)</line>
    <line n="323">- 권한 관리</line>
    <line n="324">  - 위치 권한 상태(허용/거부/앱 사용 중)</line>
    <line n="325">  - 알림 권한 상태</line>
    <line n="326">- 앱 정보</line>
    <line n="327">  - 버전/문의/개인정보(링크)</line>
    <line n="328"></line>
    <line n="329">### 5.6.2 토글/슬라이더 규격</line>
    <line n="330">- 토글: 트랙 44x28, 썸 24</line>
    <line n="331">- 슬라이더: 트랙 높이 4, 썸 20, 값 라벨 `typo.caption`</line>
    <line n="332"></line>
    <line n="333">---</line>
    <line n="334"></line>
    <line n="335"># 6. 모바일 컴포넌트 상세 규격</line>
    <line n="336"></line>
    <line n="337">## 6.1 할인 카드(Deal Card)</line>
    <line n="338">&gt; 지도 하단 시트/리스트/캘린더 아젠다 공통 사용</line>
    <line n="339"></line>
    <line n="340">### 6.1.1 요약형(Summary)</line>
    <line n="341">- 높이: 92~104(콘텐츠에 따라)</line>
    <line n="342">- 패딩: 12~16</line>
    <line n="343">- Radius: 16, 배경 `color.surface`, border 1px `color.border`(또는 shadow)</line>
    <line n="344">- 좌측: 카테고리 아이콘 배지(36x36, 원형)</line>
    <line n="345">- 본문:</line>
    <line n="346">  - 제목(할인명/매장명): `typo.h3`, 1~2줄 ellipsis</line>
    <line n="347">  - 보조(거리·주소): `typo.body2`, 1줄</line>
    <line n="348">  - 기간: `typo.caption`, `color.text.tertiary`</line>
    <line n="349">- 우측: 상태 배지(선택) + 화살표(옵션)</line>
    <line n="350"></line>
    <line n="351">### 6.1.2 상세형(Detail Preview)</line>
    <line n="352">- 이미지(옵션) 상단 160(없으면 생략)</line>
    <line n="353">- 섹션 구분선 `color.border`</line>
    <line n="354">- CTA 버튼 1~2개 포함 가능</line>
    <line n="355"></line>
    <line n="356">## 6.2 버튼(Button)</line>
    <line n="357">- 높이: 48(기본), 40(보조/칩형)</line>
    <line n="358">- Radius: 12</line>
    <line n="359">- 패딩: 좌우 16</line>
    <line n="360">- 타입:</line>
    <line n="361">  - Primary: 배경 `color.primary.600`, 텍스트 흰색</line>
    <line n="362">  - Secondary: 배경 `color.surface`, border 1px `color.border`, 텍스트 `color.text.primary`</line>
    <line n="363">  - Destructive: 배경 `color.error.600`, 텍스트 흰색</line>
    <line n="364">  - Ghost: 배경 투명, 텍스트 `color.primary.600`</line>
    <line n="365">- 로딩 상태:</line>
    <line n="366">  - 텍스트 대신 스피너(중앙), 버튼 폭 유지</line>
    <line n="367"></line>
    <line n="368">## 6.3 입력창(Input)</line>
    <line n="369">- 높이: 48</line>
    <line n="370">- Radius: 12</line>
    <line n="371">- 배경: `color.surface.2`</line>
    <line n="372">- 텍스트: `typo.body1`</line>
    <line n="373">- 라벨(옵션): 상단 `typo.caption`</line>
    <line n="374">- 헬퍼/에러: 하단 `typo.caption` (에러 시 `color.error.600`)</line>
    <line n="375">- 상태:</line>
    <line n="376">  - Default: border 1px `color.border`</line>
    <line n="377">  - Focus: border 2px `color.primary.600`</line>
    <line n="378">  - Error: border 2px `color.error.600`</line>
    <line n="379"></line>
    <line n="380">## 6.4 칩(Chip)</line>
    <line n="381">- 높이: 32</line>
    <line n="382">- Radius: 999(필)</line>
    <line n="383">- 패딩: 좌우 12</line>
    <line n="384">- 상태:</line>
    <line n="385">  - Default: 배경 `color.surface.2`, 텍스트 `color.text.secondary`</line>
    <line n="386">  - Selected: 배경 `color.primary.600`, 텍스트 흰색</line>
    <line n="387"></line>
    <line n="388">## 6.5 탭/바텀 내비게이션</line>
    <line n="389">- 탭바 높이: 56~60</line>
    <line n="390">- 아이콘 24, 라벨 `typo.caption`</line>
    <line n="391">- 활성: `color.primary.600`, 비활성: `color.text.tertiary`</line>
    <line n="392"></line>
    <line n="393">## 6.6 모달 / 바텀시트</line>
    <line n="394">- Modal(센터): 폭 320~360, radius 16, padding 16</line>
    <line n="395">- Bottom Sheet:</line>
    <line n="396">  - radius 상단 20</line>
    <line n="397">  - 배경 `color.surface`</line>
    <line n="398">  - 스크롤 컨텐츠 상단에 핸들 영역 36 고정</line>
    <line n="399">  - 닫기: 스와이프 다운 + 우측 상단 X(옵션)</line>
    <line n="400"></line>
    <line n="401">## 6.7 스낵바/토스트</line>
    <line n="402">- 높이: 48~56</line>
    <line n="403">- 배경: `#0F172A`, 텍스트 흰색</line>
    <line n="404">- 액션 버튼: 텍스트 `color.info.600`</line>
    <line n="405">- 노출: 3초(기본), 오류는 5초</line>
    <line n="406"></line>
    <line n="407">## 6.8 로딩/스켈레톤</line>
    <line n="408">- 카드 스켈레톤: 제목/보조/배지 영역을 회색 블록으로 표시</line>
    <line n="409">- 색상: `#E2E8F0` base, `#F1F5F9` highlight</line>
    <line n="410">- 애니메이션: 1.2s shimmer(과도한 번쩍임 금지)</line>
    <line n="411"></line>
    <line n="412">## 6.9 빈 상태(Empty State)</line>
    <line n="413">- 아이콘 48~64 + 제목 1줄 + 설명 1~2줄 + CTA(최대 2개)</line>
    <line n="414">- 예시 CTA:</line>
    <line n="415">  - 위치 권한: `권한 허용`</line>
    <line n="416">  - 결과 없음: `필터 초기화`, `반경 확대`</line>
    <line n="417"></line>
    <line n="418">## 6.10 배지(Badge)</line>
    <line n="419">- 높이: 24</line>
    <line n="420">- Radius: 999(필)</line>
    <line n="421">- 패딩: 좌우 8, 상하 4</line>
    <line n="422">- 타이포: `typo.caption` (권장 weight 600)</line>
    <line n="423">- 타입:</line>
    <line n="424">  - Neutral: 배경 `color.surface.2`, 텍스트 `color.text.secondary`</line>
    <line n="425">  - Accent(할인): 배경 `rgba(249,115,22,0.12)`, 텍스트 `color.accent.600`</line>
    <line n="426">  - Warning(임박): 배경 `rgba(217,119,6,0.12)`, 텍스트 `color.warning.600`</line>
    <line n="427">  - Error: 배경 `rgba(220,38,38,0.12)`, 텍스트 `color.error.600`</line>
    <line n="428">  - Info: 배경 `rgba(14,165,233,0.12)`, 텍스트 `color.info.600`</line>
    <line n="429"></line>
    <line n="430">## 6.11 아이콘 버튼(Icon Button)</line>
    <line n="431">- 터치 영역: 48x48(기본)</line>
    <line n="432">- 아이콘: 24</line>
    <line n="433">- 스타일:</line>
    <line n="434">  - 기본: 배경 `color.surface`, border 1px `color.border`</line>
    <line n="435">  - 강조: 배경 `color.primary.600`, 아이콘 흰색</line>
    <line n="436">- 상태: Disabled 시 아이콘 `color.text.tertiary`, 배경 `color.surface.2`</line>
    <line n="437"></line>
    <line n="438">## 6.12 검색바(Search Bar)</line>
    <line n="439">- 높이: 48</line>
    <line n="440">- Radius: 12</line>
    <line n="441">- 패딩: 좌 12 / 우 12</line>
    <line n="442">- 좌측 아이콘: 돋보기 20~24</line>
    <line n="443">- 플레이스홀더: `color.text.tertiary`</line>
    <line n="444">- 우측:</line>
    <line n="445">  - 입력 중일 때만 `Clear(X)` 아이콘 24 노출</line>
    <line n="446">  - 옵션: “필터” 아이콘 버튼(48)과 분리 배치 가능</line>
    <line n="447"></line>
    <line n="448">---</line>
    <line n="449"></line>
    <line n="450"># 7. Admin Web UI/UX 명세</line>
    <line n="451"></line>
    <line n="452">## 7.1 레이아웃 / 그리드</line>
    <line n="453">- 화면 최소 폭: 1280 기준(반응형은 1024까지 지원)</line>
    <line n="454">- (범위) Admin 인증/권한은 별도 과업으로 가정(사내 IP 제한/기본 인증 등). 본 문서는 로그인 화면을 포함하지 않음.</line>
    <line n="455">- 좌측 사이드바: 240 고정</line>
    <line n="456">- 상단 헤더: 56</line>
    <line n="457">- 컨텐츠 영역 패딩: 24</line>
    <line n="458">- 테이블 기본 행 높이: 48, 헤더 44</line>
    <line n="459">- 폰트: `Pretendard` 또는 `Noto Sans KR`(웹)</line>
    <line n="460"></line>
    <line n="461">## 7.2 정보 구조(메뉴)</line>
    <line n="462">- 할인 관리(Discounts)</line>
    <line n="463">  - 목록/검색/필터</line>
    <line n="464">  - 등록/수정/삭제</line>
    <line n="465">- 카테고리 관리(Categories) (필수 최소 기능)</line>
    <line n="466">- (옵션) 매장 관리(Stores) (반복 입력 감소 목적)</line>
    <line n="467"></line>
    <line n="468">## 7.3 할인 목록 화면(관리자)</line>
    <line n="469"></line>
    <line n="470">### 7.3.1 상단 툴바</line>
    <line n="471">- 검색 입력(할인명/매장명/주소)</line>
    <line n="472">- 필터:</line>
    <line n="473">  - 기간(시작~종료)</line>
    <line n="474">  - 카테고리</line>
    <line n="475">  - 상태(예정/진행/종료/비활성)</line>
    <line n="476">- 우측 CTA: `할인 등록`(primary)</line>
    <line n="477"></line>
    <line n="478">### 7.3.2 테이블 컬럼(권장)</line>
    <line n="479">- 상태 배지</line>
    <line n="480">- 할인명</line>
    <line n="481">- 매장명</line>
    <line n="482">- 카테고리</line>
    <line n="483">- 기간(시작~종료)</line>
    <line n="484">- 주소(축약)</line>
    <line n="485">- 수정일</line>
    <line n="486">- 액션(수정/삭제)</line>
    <line n="487"></line>
    <line n="488">### 7.3.3 삭제 UX</line>
    <line n="489">- 테이블 내 `삭제` 클릭 → 확인 모달</line>
    <line n="490">- 모달 문구: “삭제하면 사용자에게 노출되지 않습니다.”</line>
    <line n="491">- 버튼: `취소` / `삭제`(destructive)</line>
    <line n="492"></line>
    <line n="493">## 7.4 할인 등록/수정 폼</line>
    <line n="494"></line>
    <line n="495">### 7.4.1 섹션 구성</line>
    <line n="496">1) 기본 정보</line>
    <line n="497">   - 할인명(필수)</line>
    <line n="498">   - 매장명(필수)</line>
    <line n="499">   - 카테고리(필수, 드롭다운)</line>
    <line n="500">2) 기간/시간</line>
    <line n="501">   - 시작일시(필수), 종료일시(필수)</line>
    <line n="502">   - 반복/요일(옵션: MVP는 미지원 가능)</line>
    <line n="503">3) 위치</line>
    <line n="504">   - 주소 검색(Places Autocomplete)</line>
    <line n="505">   - 지도 핀 드래그로 미세 조정</line>
    <line n="506">   - 위도/경도 자동 채움(읽기 전용)</line>
    <line n="507">4) 혜택 내용</line>
    <line n="508">   - 혜택 타입(퍼센트/금액/1+1/기타)</line>
    <line n="509">   - 혜택 요약(리스트 카드에 노출, 40자 이내 권장)</line>
    <line n="510">   - 상세 설명(마크다운/텍스트)</line>
    <line n="511">5) 노출/알림(옵션)</line>
    <line n="512">   - “푸시 발송” 체크(기본 OFF)</line>
    <line n="513">   - 발송 조건: 시작 1시간 전/등록 즉시(선택)</line>
    <line n="514"></line>
    <line n="515">### 7.4.2 폼 검증 규칙</line>
    <line n="516">- 시작일시 &lt; 종료일시(필수)</line>
    <line n="517">- 제목/요약 길이 제한(제목 60자, 요약 40자 권장)</line>
    <line n="518">- 위치 정보 필수(주소 + 위경도)</line>
    <line n="519">- 에러는 필드 하단 + 상단 요약(“3개 항목을 확인하세요”) 병행</line>
    <line n="520"></line>
    <line n="521">## 7.5 Admin 컴포넌트 규격(웹)</line>
    <line n="522">- 버튼 높이: 40(기본), 32(테이블 액션)</line>
    <line n="523">- 입력 높이: 40</line>
    <line n="524">- 모달 폭: 520(기본), radius 16</line>
    <line n="525">- 테이블:</line>
    <line n="526">  - 헤더 배경 `color.surface.2`</line>
    <line n="527">  - 행 hover 배경 `#F8FAFC`</line>
    <line n="528">  - 정렬 가능한 컬럼은 아이콘 표시</line>
    <line n="529"></line>
    <line n="530">---</line>
    <line n="531"></line>
    <line n="532"># 8. 푸시 알림 UX(사용자 관점)</line>
    <line n="533"></line>
    <line n="534">## 8.1 알림 유형(최소)</line>
    <line n="535">- 관심 카테고리 신규 할인</line>
    <line n="536">- 내 주변(반경 내) 신규/시작 임박 할인</line>
    <line n="537"></line>
    <line n="538">## 8.2 알림 문구 템플릿(가이드)</line>
    <line n="539">- 제목: `[카테고리] {매장명} 할인 시작`</line>
    <line n="540">- 본문: `{혜택요약} · {거리} · {종료까지 남은 시간}`</line>
    <line n="541">- 딥링크: 해당 할인 상세(Deal Detail)</line>
    <line n="542"></line>
    <line n="543">## 8.3 알림 피로도 방지(규칙)</line>
    <line n="544">- 동일 할인 이벤트는 24시간 내 중복 발송 금지</line>
    <line n="545">- 반경 알림은 1시간 내 최대 1회(기본값)</line>
    <line n="546">- 조용한 시간(ON)에는 즉시 발송 대신 다음 허용 시간에 묶음(옵션)</line>
    <line n="547"></line>
    <line n="548">---</line>
    <line n="549"></line>
    <line n="550"># 9. 접근성 / 품질 기준</line>
    <line n="551"></line>
    <line n="552">## 9.1 접근성</line>
    <line n="553">- 텍스트 대비: WCAG AA 수준(일반 텍스트 4.5:1 목표)</line>
    <line n="554">- Dynamic Type/폰트 확대 시 줄바꿈 허용(카드 제목 2줄)</line>
    <line n="555">- 스크린리더:</line>
    <line n="556">  - 마커: “카페, 스타벅스, 300m, 오늘 종료” 형태로 읽기</line>
    <line n="557">  - 버튼/토글: 상태(켜짐/꺼짐) 포함</line>
    <line n="558"></line>
    <line n="559">## 9.2 성능/안정성(UX 관점)</line>
    <line n="560">- 지도: 마커는 viewport 기반 페이징/클러스터링 필수</line>
    <line n="561">- 리스트: 이미지(옵션)는 lazy-load + 캐시</line>
    <line n="562">- 위치 업데이트: 배터리 고려하여 기본 “앱 사용 중” 권한 권장, 백그라운드 추적은 MVP에서 최소화</line>
    <line n="563"></line>
    <line n="564">---</line>
    <line n="565"></line>
    <line n="566"># 10. 구현 체크리스트(디자인/개발 공통)</line>
    <line n="567">- [ ] 모든 색상/타이포/여백은 토큰 기반 적용</line>
    <line n="568">- [ ] 버튼/입력/칩/카드 상태(기본/포커스/비활성/에러) 구현</line>
    <line n="569">- [ ] 지도 마커 선택 ↔ 리스트/시트 동기화</line>
    <line n="570">- [ ] 캘린더 날짜 선택 ↔ 아젠다 리스트 동기화</line>
    <line n="571">- [ ] 위치/알림 권한 거부 시 대체 경로 제공(주소 검색/설정 이동)</line>
    <line n="572">- [ ] 빈 상태/로딩/오류 상태 화면 제공</line>
  </rawLines>
  <rawMarkdown><![CDATA[---
title: 위치 기반 통합 할인 정보 플랫폼 MVP - UI/UX 구현 상세서
version: 1.0
last_updated: 2026-01-21
scope: Mobile App (Android/iOS), Admin Web
---

# 1. 문서 목적 / 범위

본 문서는 **위치 기반 통합 할인 정보 제공 플랫폼(MVP)**의 UI/UX를 **디자인·개발이 그대로 참고하여 구현**할 수 있도록, 화면 구조/컴포넌트 규격/상태 규칙/색상·타이포·그리드 등의 **기준(Design System)**을 명세한다.  
※ 로그인/회원가입/결제 기능은 범위 제외(단, “설정/알림 수신”은 비회원 기준으로 제공).

---

# 2. UX 원칙(구현 규칙)

## 2.1 핵심 UX 목표
- **내 주변 할인 발견**: 지도에서 3초 안에 “가까운 할인”을 인지(마커/리스트/필터의 즉시성).
- **일정 파악**: 캘린더에서 5초 안에 “오늘/이번주 할인”을 파악(요약 표시 + 상세 진입).
- **맞춤 알림**: 관심 카테고리 + 반경 기반 알림(과도한 알림 방지: 빈도/조용한 시간).
- **관리 효율**(Admin): 입력·수정 2분 이내(검증/자동완성/지도 선택).

## 2.2 일반 규칙
- **1차 정보는 한 화면**에(“할인명/매장/기간/거리/카테고리”는 카드 상단에서 노출).
- **필터는 상단, 결과는 하단**: 지도/목록 화면 공통.
- **빈 상태는 행동을 제안**: “필터 해제”, “반경 확대”, “위치 권한 켜기” 등 CTA 제공.
- **실시간성 표기**: “방금 업데이트”, “오늘 종료” 등 시간을 텍스트/배지로 표시.
- **데이터 로딩 시 Skeleton 우선**(리스트/카드), 지도는 마커 점진 로딩.

---

# 3. 디자인 시스템(Design Tokens)

## 3.1 색상 팔레트(라이트 모드 기준)
> 구현 시 색상은 반드시 토큰으로 관리(하드코딩 금지).  
> 표기: `토큰명 = HEX`

### Brand / Semantic
| Token | Value | Usage |
|---|---:|---|
| `color.primary.600` | `#2563EB` | 주요 CTA, 선택 상태, 링크 |
| `color.primary.700` | `#1D4ED8` | Pressed/강조 |
| `color.accent.600` | `#F97316` | “할인/핫딜” 강조 배지, 포인트 |
| `color.success.600` | `#16A34A` | 적용/정상/저장 완료 |
| `color.warning.600` | `#D97706` | 유의/기간 임박 |
| `color.error.600` | `#DC2626` | 오류/삭제/필수 누락 |
| `color.info.600` | `#0EA5E9` | 안내/권한 요청 |

### Neutral / Surface
| Token | Value | Usage |
|---|---:|---|
| `color.bg` | `#F8FAFC` | 앱 기본 배경 |
| `color.surface` | `#FFFFFF` | 카드/시트/모달 |
| `color.surface.2` | `#F1F5F9` | 입력 필드 배경/선택 영역 |
| `color.text.primary` | `#0F172A` | 본문/제목 |
| `color.text.secondary` | `#475569` | 보조 텍스트 |
| `color.text.tertiary` | `#64748B` | 캡션/힌트 |
| `color.border` | `#E2E8F0` | 구분선/테두리 |
| `color.shadow` | `rgba(15,23,42,0.12)` | 그림자 |

### Category Color (지도/캘린더 공통)
> 카테고리별 고정 색상(아이콘/마커 링/캘린더 바). 추가 카테고리 발생 시 기존 톤과 대비 유지.
| Category | Token | Value |
|---|---|---:|
| 마트 | `color.cat.market` | `#2563EB` |
| 프랜차이즈 | `color.cat.franchise` | `#7C3AED` |
| 카페 | `color.cat.cafe` | `#B45309` |
| 병원 | `color.cat.hospital` | `#0EA5E9` |
| 기타 | `color.cat.etc` | `#64748B` |

## 3.2 타이포그래피(모바일)
> 기본 폰트 권장: Android `Roboto + Noto Sans KR`, iOS `SF Pro + Apple SD Gothic Neo`  
> 줄간격(Line-height)은 가독성을 위해 고정 비율 사용(토큰화 권장).

| Style | Size | Weight | Line-height | Usage |
|---|---:|---:|---:|---|
| `typo.h1` | 24 | 700 | 32 | 화면 타이틀(상단) |
| `typo.h2` | 20 | 700 | 28 | 섹션 제목 |
| `typo.h3` | 16 | 700 | 24 | 카드/리스트 제목 |
| `typo.body1` | 15 | 400 | 22 | 본문 |
| `typo.body2` | 13 | 400 | 20 | 보조 설명 |
| `typo.caption` | 12 | 400 | 18 | 라벨/힌트 |
| `typo.button` | 15 | 600 | 20 | 버튼 |

## 3.3 그리드 / 여백 / 터치 규격
- **Spacing scale**(dp/pt 공통): 4, 8, 12, 16, 20, 24, 32, 40, 48
- **모바일 기본 패딩**: 화면 좌우 16, 상단 12, 섹션 간 16
- **최소 터치 영역**: 44pt(iOS) / 48dp(Android)
- **아이콘 크기**: 20/24 기본(탭바 24, 리스트 20~24)

### 3.3.1 Spacing Tokens(권장)
| Token | Value | Notes |
|---|---:|---|
| `space.1` | 4 | 최소 단위 |
| `space.2` | 8 | 아이콘-텍스트 간격 |
| `space.3` | 12 | 카드 내부 보조 간격 |
| `space.4` | 16 | 화면 기본 패딩 |
| `space.5` | 20 | 섹션 상단 여백 |
| `space.6` | 24 | 섹션 간격 |
| `space.8` | 32 | 큰 구획 간격 |
| `space.10` | 40 | 빈 상태/대형 여백 |
| `space.12` | 48 | 최소 터치 영역 기준 |

### 3.3.2 Breakpoints(권장)
- Mobile: `360`(base), `412`(large), `600+`(tablet/폴더블)
- Admin Web: `1024`(min), `1280`(base), `1440+`(wide)

## 3.4 라운드/그림자/테두리
- Radius: `r8`=8, `r12`=12(버튼/칩), `r16`=16(카드/시트)
- Border: 1px, `color.border`
- Shadow(카드): blur 16, y 4, `color.shadow` (플랫폼별 elevation으로 매핑)

### 3.4.1 Radius Tokens(권장)
| Token | Value |
|---|---:|
| `radius.sm` | 8 |
| `radius.md` | 12 |
| `radius.lg` | 16 |
| `radius.pill` | 999 |

### 3.4.2 Elevation Tokens(권장)
| Token | Android(elevation) | iOS(shadow guide) | Usage |
|---|---:|---|---|
| `elev.0` | 0 | none | 배경/기본 |
| `elev.1` | 1 | y=1, blur=4, opacity=0.08 | 상단바/구분 |
| `elev.2` | 2 | y=2, blur=8, opacity=0.10 | 드롭다운/팝오버 |
| `elev.3` | 4 | y=4, blur=16, opacity=0.12 | 카드/바텀시트 |
| `elev.4` | 8 | y=8, blur=24, opacity=0.14 | 모달/중요 레이어 |

## 3.5 상태 컬러/상태 규칙(공통)
- Disabled: 텍스트 `color.text.tertiary`, 배경 `color.surface.2`, border `color.border`
- Pressed: 색상 700 단계(예: primary.700), 불투명도 0.92
- Focus(웹): outline 2px `color.primary.600` + offset 2px
- Error: 입력 하단 메시지 `color.error.600`, 테두리 `color.error.600`

## 3.6 아이콘/일러스트 가이드
- 아이콘 스타일: 라운드(둥근 모서리), 단색(기본 `color.text.secondary`), 2px 스트로크 계열 권장
- 플랫폼 매핑: Android(Material Symbols) / iOS(SF Symbols) 사용 가능하되, **동일 의미 아이콘**으로 통일
- 카테고리 아이콘(권장): 마트(카트), 프랜차이즈(매장), 카페(컵), 병원(십자/의료)

## 3.7 표기(데이터 포맷) 규칙
- 거리:
  - `< 1000m` → `###m` (예: `350m`)
  - `>= 1km` → `#.#km` (예: `1.2km`, 소수 1자리)
- 날짜/요일: `YYYY.MM.DD (요일)` (예: `2026.01.21 (수)`)
- 기간: `YYYY.MM.DD ~ YYYY.MM.DD`
- 시간: 24시간제 `HH:mm`
- 금액: `₩` + 천 단위 구분(예: `₩12,900`)
- 혜택 요약: 리스트/알림 노출용 40자 이내(개행 금지)

---

# 4. 정보 구조(IA) / 내비게이션

## 4.1 모바일 앱 탭 구조(MVP 권장)
하단 탭 4개(고정):
1) **지도**(주변 할인 탐색)  
2) **캘린더**(일자별 할인)  
3) **카테고리**(섹션별 탐색/검색 진입)  
4) **설정**(알림/권한/반경/고객지원)

> 알림함(수신 내역)이 필요하면 “설정” 상단에 “알림” 메뉴로 제공(탭 증설 지양).

## 4.2 기본 화면 흐름(주요)
- 지도 탭 → 마커 탭 → 하단 시트(요약) → 상세(Deal Detail)
- 캘린더 탭 → 날짜 선택 → 해당 날짜 리스트 → 상세
- 카테고리 탭 → 카테고리 선택/검색 → 리스트 → 상세
- 설정 → 알림 설정(카테고리/반경/시간)

## 4.3 최초 진입(온보딩) / 권한 플로우(MVP)
> 로그인 없이 개인화(관심 카테고리/반경)는 **디바이스 로컬 저장**을 기본으로 한다.

### 4.3.1 온보딩 스텝(권장: 3~4장)
1) 가치 제안: “내 주변 할인 · 캘린더로 한눈에 · 관심 알림”
2) 위치 권한 안내(사전 고지 화면)
   - 핵심 문구: “주변 할인 안내를 위해 위치 정보가 필요해요.”
   - CTA: `위치 권한 허용`(primary), `나중에`(secondary)
3) 알림 권한 안내(사전 고지 화면)
   - 핵심 문구: “관심 카테고리 할인 시작/임박 알림을 받을 수 있어요.”
   - CTA: `알림 허용`(primary), `건너뛰기`(secondary)
4) 관심 카테고리 선택(옵션)
   - 칩 멀티 선택 + `완료`(primary)

### 4.3.2 권한 거부 시 UX 원칙
- 위치 거부: 지도 상단에 “주소로 검색” 경로를 항상 노출하고, 설정 화면에서 권한 상태/이동 버튼 제공
- 알림 거부: 설정에서 토글을 보여주되, OS 설정 이동 CTA 제공
- 권한 요청 타이밍: 온보딩에서 1회, 이후 기능을 사용하려는 순간(예: “주변 할인 보기”)에 재요청(무한 재요청 금지)

---

# 5. 모바일 화면 명세

## 5.1 공통 상단(App Bar)
- 높이: 56
- 좌측: 뒤로가기(상세/서브 화면), 루트 탭에서는 미노출
- 중앙: 타이틀(`typo.h2`)
- 우측: 아이콘 버튼(검색/필터/현재위치 등), 터치 48
- 배경: `color.surface`, 하단 divider 1px `color.border`(스크롤 시작 시만 노출 권장)

## 5.2 지도(주변 할인) 화면

### 5.2.1 레이아웃
- 상단 고정 영역:
  - 검색바(장소/매장/할인명): 48h, radius 12, 좌측 돋보기 아이콘
  - 필터 칩 Row(가로 스크롤): 높이 40 영역
- 본문: Google Map 전체(상단 영역 아래부터)
- 우하단 플로팅 버튼(2개 스택):
  - “현재 위치”: 44(원형), 아이콘 24
  - “필터”: 44(원형) 또는 상단 필터칩으로 대체 가능(MVP는 1개만 권장)
- 하단 시트(Bottom Sheet):
  - 상태: Collapsed(요약 1~2개 카드) / Half / Full(리스트)

### 5.2.2 지도 마커 규격
- 기본 마커: 36x36, 원형
  - 내부: 카테고리 아이콘 18(단색 흰색)
  - 배경: 카테고리 색상 토큰
  - 외곽 링: 2px `#FFFFFF`
- 선택 마커:
  - 크기 44x44
  - 외곽 링 3px `color.accent.600`
  - 선택 시 하단 시트가 해당 항목으로 스크롤/하이라이트
- 클러스터:
  - 44x44, 배경 `color.primary.600`, 텍스트 흰색(숫자)
  - 탭 시 줌인(단계: +2), 또는 클러스터 펼침

### 5.2.3 필터 동작(지도/리스트 공통)
필터는 “빠른 칩 + 상세 필터 시트” 2단 구조 권장.
- 빠른 칩(최대 6개):
  - 카테고리(멀티), “오늘”, “이번주”, “무료/특가”(데이터 있을 때)
- 상세 필터(모달 바텀시트):
  - 반경: 0.5km / 1 / 3 / 5 / 10 (Segment) + “직접 입력”(선택)
  - 기간: 오늘/이번주/기간 선택(날짜 피커)
  - 정렬: 거리순(기본)/마감임박/최신등록
  - 버튼: `초기화`(secondary) / `적용`(primary)

### 5.2.4 하단 시트(결과 리스트) 규격
- Collapsed: 높이 96~120, “가까운 할인 N개” + 카드 1개
- Half: 화면 50%
- Full: 90%(상단 핸들 + 검색/정렬 유지)
- 상단 핸들: 36 영역, 중앙 32x4 라운드 바
- 리스트 아이템은 **할인 카드(요약형)** 사용(§6.1)

### 5.2.5 지도 권한/오류 상태
- 위치 권한 없음:
  - 빈상태 일러스트/아이콘 + 문구 + CTA 2개
  - CTA: `위치 권한 허용`(primary), `주소로 검색`(secondary)
- GPS 꺼짐:
  - 상단 배너(높이 44) “위치 서비스가 꺼져 있어요” + `켜기` 버튼
- 데이터 로딩 실패:
  - 하단 스낵바 “불러오지 못했어요” + `다시 시도`

## 5.3 캘린더 화면

### 5.3.1 상단 구성
- 월/주 토글(세그먼트): 높이 36, radius 10
  - 기본: 월(Month)
- 우측: 필터(카테고리) 아이콘 버튼 48

### 5.3.2 월(Month) 뷰 규칙
- 그리드: 7열, 셀 높이 52~56
- 날짜 숫자: `typo.caption`, 기본 `color.text.primary`
- 오늘 표시:
  - 날짜 원형 배경 `color.primary.600`, 텍스트 흰색
- 선택 날짜:
  - 테두리 2px `color.accent.600`
- 이벤트 표시:
  - 셀 하단에 “도트” 최대 3개(카테고리 색상)
  - 4개 이상이면 `+N` 캡션 표시(회색)

### 5.3.3 하단 “일자 리스트(Agenda)” 영역
- 날짜 선택 시 하단에 리스트 표시(스크롤)
- 리스트 카드(요약형) + “정렬: 시간/거리”
- 날짜 헤더: `2026.01.21 (수)` 형식(로케일 고정)

### 5.3.4 캘린더 빈 상태
- 선택 날짜에 이벤트 없음:
  - 문구 “이 날에는 등록된 할인이 없어요”
  - 보조 CTA: `주변 할인 보기`(지도 탭 이동)

## 5.4 카테고리/검색 화면

### 5.4.1 카테고리 홈
- 상단 검색바(48h)
- 카테고리 그리드: 2열(모바일), 카드 높이 96, radius 16
  - 아이콘 28, 라벨 `typo.h3`
  - 색상: 카테고리 컬러를 12% 투명 배경으로 사용

### 5.4.2 검색 결과 리스트
- 상단: 검색어 + 필터 칩(카테고리/반경/기간)
- 결과: 요약 카드 리스트(무한 스크롤)
- 빈 결과:
  - “검색 결과가 없어요” + 제안(필터 해제/반경 확대)

## 5.5 할인 상세(Deal Detail) 화면

### 5.5.1 레이아웃(스크롤)
1) 헤더
   - 매장명/할인명(2줄까지), 카테고리 배지
   - 거리/주소(보조)
2) 핵심 정보 카드(요약)
   - 기간(시작~종료), 영업/적용 시간(있다면)
   - 혜택 요약(예: “10% 할인”, “1+1”)
3) 지도 미니(고정 높이 160) + “길찾기” 버튼
4) 상세 설명(조건/제외 품목/유의사항)
5) 푸터 CTA(고정)
   - Primary: `알림 받기` (관심 추가)
   - Secondary: `캘린더에 저장`(로컬/OS 캘린더 연동은 옵션, MVP는 앱 내부 저장만 허용 가능)

### 5.5.2 배지 규칙
- “오늘 종료”: `color.warning.600`
- “마감 임박(24h 이내)”: `color.warning.600`
- “신규(24h 이내 등록)”: `color.info.600`
- “인기”(데이터 있을 때): `color.accent.600`

## 5.6 설정(알림/권한) 화면

### 5.6.1 구성
- 알림 설정
  - 관심 카테고리(멀티 선택)
  - 알림 반경(0.5~10km)
  - 조용한 시간(Quiet hours): 22:00~08:00 기본 OFF
  - “주변 할인 발생 시 알림” 토글(ON/OFF)
- 권한 관리
  - 위치 권한 상태(허용/거부/앱 사용 중)
  - 알림 권한 상태
- 앱 정보
  - 버전/문의/개인정보(링크)

### 5.6.2 토글/슬라이더 규격
- 토글: 트랙 44x28, 썸 24
- 슬라이더: 트랙 높이 4, 썸 20, 값 라벨 `typo.caption`

---

# 6. 모바일 컴포넌트 상세 규격

## 6.1 할인 카드(Deal Card)
> 지도 하단 시트/리스트/캘린더 아젠다 공통 사용

### 6.1.1 요약형(Summary)
- 높이: 92~104(콘텐츠에 따라)
- 패딩: 12~16
- Radius: 16, 배경 `color.surface`, border 1px `color.border`(또는 shadow)
- 좌측: 카테고리 아이콘 배지(36x36, 원형)
- 본문:
  - 제목(할인명/매장명): `typo.h3`, 1~2줄 ellipsis
  - 보조(거리·주소): `typo.body2`, 1줄
  - 기간: `typo.caption`, `color.text.tertiary`
- 우측: 상태 배지(선택) + 화살표(옵션)

### 6.1.2 상세형(Detail Preview)
- 이미지(옵션) 상단 160(없으면 생략)
- 섹션 구분선 `color.border`
- CTA 버튼 1~2개 포함 가능

## 6.2 버튼(Button)
- 높이: 48(기본), 40(보조/칩형)
- Radius: 12
- 패딩: 좌우 16
- 타입:
  - Primary: 배경 `color.primary.600`, 텍스트 흰색
  - Secondary: 배경 `color.surface`, border 1px `color.border`, 텍스트 `color.text.primary`
  - Destructive: 배경 `color.error.600`, 텍스트 흰색
  - Ghost: 배경 투명, 텍스트 `color.primary.600`
- 로딩 상태:
  - 텍스트 대신 스피너(중앙), 버튼 폭 유지

## 6.3 입력창(Input)
- 높이: 48
- Radius: 12
- 배경: `color.surface.2`
- 텍스트: `typo.body1`
- 라벨(옵션): 상단 `typo.caption`
- 헬퍼/에러: 하단 `typo.caption` (에러 시 `color.error.600`)
- 상태:
  - Default: border 1px `color.border`
  - Focus: border 2px `color.primary.600`
  - Error: border 2px `color.error.600`

## 6.4 칩(Chip)
- 높이: 32
- Radius: 999(필)
- 패딩: 좌우 12
- 상태:
  - Default: 배경 `color.surface.2`, 텍스트 `color.text.secondary`
  - Selected: 배경 `color.primary.600`, 텍스트 흰색

## 6.5 탭/바텀 내비게이션
- 탭바 높이: 56~60
- 아이콘 24, 라벨 `typo.caption`
- 활성: `color.primary.600`, 비활성: `color.text.tertiary`

## 6.6 모달 / 바텀시트
- Modal(센터): 폭 320~360, radius 16, padding 16
- Bottom Sheet:
  - radius 상단 20
  - 배경 `color.surface`
  - 스크롤 컨텐츠 상단에 핸들 영역 36 고정
  - 닫기: 스와이프 다운 + 우측 상단 X(옵션)

## 6.7 스낵바/토스트
- 높이: 48~56
- 배경: `#0F172A`, 텍스트 흰색
- 액션 버튼: 텍스트 `color.info.600`
- 노출: 3초(기본), 오류는 5초

## 6.8 로딩/스켈레톤
- 카드 스켈레톤: 제목/보조/배지 영역을 회색 블록으로 표시
- 색상: `#E2E8F0` base, `#F1F5F9` highlight
- 애니메이션: 1.2s shimmer(과도한 번쩍임 금지)

## 6.9 빈 상태(Empty State)
- 아이콘 48~64 + 제목 1줄 + 설명 1~2줄 + CTA(최대 2개)
- 예시 CTA:
  - 위치 권한: `권한 허용`
  - 결과 없음: `필터 초기화`, `반경 확대`

## 6.10 배지(Badge)
- 높이: 24
- Radius: 999(필)
- 패딩: 좌우 8, 상하 4
- 타이포: `typo.caption` (권장 weight 600)
- 타입:
  - Neutral: 배경 `color.surface.2`, 텍스트 `color.text.secondary`
  - Accent(할인): 배경 `rgba(249,115,22,0.12)`, 텍스트 `color.accent.600`
  - Warning(임박): 배경 `rgba(217,119,6,0.12)`, 텍스트 `color.warning.600`
  - Error: 배경 `rgba(220,38,38,0.12)`, 텍스트 `color.error.600`
  - Info: 배경 `rgba(14,165,233,0.12)`, 텍스트 `color.info.600`

## 6.11 아이콘 버튼(Icon Button)
- 터치 영역: 48x48(기본)
- 아이콘: 24
- 스타일:
  - 기본: 배경 `color.surface`, border 1px `color.border`
  - 강조: 배경 `color.primary.600`, 아이콘 흰색
- 상태: Disabled 시 아이콘 `color.text.tertiary`, 배경 `color.surface.2`

## 6.12 검색바(Search Bar)
- 높이: 48
- Radius: 12
- 패딩: 좌 12 / 우 12
- 좌측 아이콘: 돋보기 20~24
- 플레이스홀더: `color.text.tertiary`
- 우측:
  - 입력 중일 때만 `Clear(X)` 아이콘 24 노출
  - 옵션: “필터” 아이콘 버튼(48)과 분리 배치 가능

---

# 7. Admin Web UI/UX 명세

## 7.1 레이아웃 / 그리드
- 화면 최소 폭: 1280 기준(반응형은 1024까지 지원)
- (범위) Admin 인증/권한은 별도 과업으로 가정(사내 IP 제한/기본 인증 등). 본 문서는 로그인 화면을 포함하지 않음.
- 좌측 사이드바: 240 고정
- 상단 헤더: 56
- 컨텐츠 영역 패딩: 24
- 테이블 기본 행 높이: 48, 헤더 44
- 폰트: `Pretendard` 또는 `Noto Sans KR`(웹)

## 7.2 정보 구조(메뉴)
- 할인 관리(Discounts)
  - 목록/검색/필터
  - 등록/수정/삭제
- 카테고리 관리(Categories) (필수 최소 기능)
- (옵션) 매장 관리(Stores) (반복 입력 감소 목적)

## 7.3 할인 목록 화면(관리자)

### 7.3.1 상단 툴바
- 검색 입력(할인명/매장명/주소)
- 필터:
  - 기간(시작~종료)
  - 카테고리
  - 상태(예정/진행/종료/비활성)
- 우측 CTA: `할인 등록`(primary)

### 7.3.2 테이블 컬럼(권장)
- 상태 배지
- 할인명
- 매장명
- 카테고리
- 기간(시작~종료)
- 주소(축약)
- 수정일
- 액션(수정/삭제)

### 7.3.3 삭제 UX
- 테이블 내 `삭제` 클릭 → 확인 모달
- 모달 문구: “삭제하면 사용자에게 노출되지 않습니다.”
- 버튼: `취소` / `삭제`(destructive)

## 7.4 할인 등록/수정 폼

### 7.4.1 섹션 구성
1) 기본 정보
   - 할인명(필수)
   - 매장명(필수)
   - 카테고리(필수, 드롭다운)
2) 기간/시간
   - 시작일시(필수), 종료일시(필수)
   - 반복/요일(옵션: MVP는 미지원 가능)
3) 위치
   - 주소 검색(Places Autocomplete)
   - 지도 핀 드래그로 미세 조정
   - 위도/경도 자동 채움(읽기 전용)
4) 혜택 내용
   - 혜택 타입(퍼센트/금액/1+1/기타)
   - 혜택 요약(리스트 카드에 노출, 40자 이내 권장)
   - 상세 설명(마크다운/텍스트)
5) 노출/알림(옵션)
   - “푸시 발송” 체크(기본 OFF)
   - 발송 조건: 시작 1시간 전/등록 즉시(선택)

### 7.4.2 폼 검증 규칙
- 시작일시 < 종료일시(필수)
- 제목/요약 길이 제한(제목 60자, 요약 40자 권장)
- 위치 정보 필수(주소 + 위경도)
- 에러는 필드 하단 + 상단 요약(“3개 항목을 확인하세요”) 병행

## 7.5 Admin 컴포넌트 규격(웹)
- 버튼 높이: 40(기본), 32(테이블 액션)
- 입력 높이: 40
- 모달 폭: 520(기본), radius 16
- 테이블:
  - 헤더 배경 `color.surface.2`
  - 행 hover 배경 `#F8FAFC`
  - 정렬 가능한 컬럼은 아이콘 표시

---

# 8. 푸시 알림 UX(사용자 관점)

## 8.1 알림 유형(최소)
- 관심 카테고리 신규 할인
- 내 주변(반경 내) 신규/시작 임박 할인

## 8.2 알림 문구 템플릿(가이드)
- 제목: `[카테고리] {매장명} 할인 시작`
- 본문: `{혜택요약} · {거리} · {종료까지 남은 시간}`
- 딥링크: 해당 할인 상세(Deal Detail)

## 8.3 알림 피로도 방지(규칙)
- 동일 할인 이벤트는 24시간 내 중복 발송 금지
- 반경 알림은 1시간 내 최대 1회(기본값)
- 조용한 시간(ON)에는 즉시 발송 대신 다음 허용 시간에 묶음(옵션)

---

# 9. 접근성 / 품질 기준

## 9.1 접근성
- 텍스트 대비: WCAG AA 수준(일반 텍스트 4.5:1 목표)
- Dynamic Type/폰트 확대 시 줄바꿈 허용(카드 제목 2줄)
- 스크린리더:
  - 마커: “카페, 스타벅스, 300m, 오늘 종료” 형태로 읽기
  - 버튼/토글: 상태(켜짐/꺼짐) 포함

## 9.2 성능/안정성(UX 관점)
- 지도: 마커는 viewport 기반 페이징/클러스터링 필수
- 리스트: 이미지(옵션)는 lazy-load + 캐시
- 위치 업데이트: 배터리 고려하여 기본 “앱 사용 중” 권한 권장, 백그라운드 추적은 MVP에서 최소화

---

# 10. 구현 체크리스트(디자인/개발 공통)
- [ ] 모든 색상/타이포/여백은 토큰 기반 적용
- [ ] 버튼/입력/칩/카드 상태(기본/포커스/비활성/에러) 구현
- [ ] 지도 마커 선택 ↔ 리스트/시트 동기화
- [ ] 캘린더 날짜 선택 ↔ 아젠다 리스트 동기화
- [ ] 위치/알림 권한 거부 시 대체 경로 제공(주소 검색/설정 이동)
- [ ] 빈 상태/로딩/오류 상태 화면 제공
]]></rawMarkdown>
</uiuxSpec>
