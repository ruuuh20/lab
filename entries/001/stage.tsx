"use client";

import { useState } from "react";

// ─── YOUR CSS GOES HERE ───────────────────────────────────────────────────────
// Add word-break, line-break, overflow-wrap, etc. to each variant below.
// For lang attributes, find the TODO comments on the <p> elements in this file.

const textCSS = {
  koreanDefault: {
    // TODO: e.g. wordBreak: 'normal'
  } as React.CSSProperties,

  koreanKeepAll: {
    // TODO: e.g. wordBreak: 'keep-all'
    wordBreak: "keep-all",
  } as React.CSSProperties,

  japaneseDefault: {
    // TODO: e.g. lineBreak: 'auto'
  } as React.CSSProperties,

  japaneseAutoPhrase: {
    // TODO: e.g. wordBreak: 'auto-phrase'
    wordBreak: "auto-phrase",
  } as React.CSSProperties,
};
// ─────────────────────────────────────────────────────────────────────────────

export default function Stage() {
  const [width, setWidth] = useState(320);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={160}
          max={600}
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="w-40 accent-accent"
        />
        <span className="text-sm tabular-nums text-muted">{width}px</span>
      </div>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
          Korean
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto pb-1">
          <TextBox
            label="default"
            width={width}
            textStyle={textCSS.koreanDefault}
            lang="ko"
          >
            한글은 1443년 세종대왕이 백성을 위해 만든 문자입니다. 자음과 모음을
            모아 한 글자를 이루는 구조 덕분에, 처음 배우는 사람도 금방 읽을 수
            있습니다. 국립한글박물관에 가면 한글이 걸어온 길을 직접 볼 수
            있습니다.
          </TextBox>
          <TextBox
            label="keep-all"
            width={width}
            textStyle={textCSS.koreanKeepAll}
            lang="ko"
          >
            한글은 1443년 세종대왕이 백성을 위해 만든 문자입니다. 자음과 모음을
            모아 한 글자를 이루는 구조 덕분에, 처음 배우는 사람도 금방 읽을 수
            있습니다. 국립한글박물관에 가면 한글이 걸어온 길을 직접 볼 수
            있습니다.
          </TextBox>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
          Japanese
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto pb-1">
          <TextBox
            label="default"
            width={width}
            textStyle={textCSS.japaneseDefault}
            lang="ja"
          >
            日本語はひらがな、カタカナ、漢字を組み合わせて書く言語です。単語の間にスペースがないので、ブラウザは言葉の途中で改行してしまうことがあります。ユーザーインターフェースデザインでは、こうした細かい部分が読みやすさに大きく影響します
          </TextBox>
          <TextBox
            label="auto-phrase"
            width={width}
            textStyle={textCSS.japaneseAutoPhrase}
            lang="ja"
          >
            日本語はひらがな、カタカナ、漢字を組み合わせて書く言語です。単語の間にスペースがないので、ブラウザは言葉の途中で改行してしまうことがあります。ユーザーインターフェースデザインでは、こうした細かい部分が読みやすさに大きく影響します
          </TextBox>
        </div>
      </section>
    </div>
  );
}

function TextBox({
  label,
  width,
  textStyle,
  lang,
  children,
}: {
  label: string;
  width: number;
  textStyle: React.CSSProperties;
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 shrink-0" style={{ width }}>
      <span className="text-xs text-muted">{label}</span>
      <p
        lang={lang}
        className="p-3 border border-border text-sm leading-relaxed"
        style={textStyle}
      >
        {children}
      </p>
    </div>
  );
}
