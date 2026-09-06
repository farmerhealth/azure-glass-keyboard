import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { Delete, Globe, Space, ChevronLeft } from "lucide-react";
import {
  getSuggestions,
  applySuggestion,
  type Suggestion,
} from "@/lib/translations";

const ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

interface GlassKeyboardProps {
  initialText?: string;
}

export function GlassKeyboard({ initialText = "" }: GlassKeyboardProps) {
  const [text, setText] = useState(initialText);
  const [isShift, setIsShift] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const textAreaRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => getSuggestions(text), [text]);


  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
    }
  }, [text]);

  const handleChar = useCallback(
    (char: string) => {
      const insert = isShift ? char.toUpperCase() : char;
      setText((prev) => prev + insert);
      setIsShift(false);
    },
    [isShift],
  );

  const handleBackspace = useCallback(() => {
    setText((prev) => prev.slice(0, -1));
  }, []);

  const handleSpace = useCallback(() => {
    setText((prev) => prev + " ");
  }, []);

  const handleEnter = useCallback(() => {
    setText((prev) => prev + "\n");
  }, []);

  const handleSuggestionClick = useCallback((suggestion: Suggestion) => {
    setText((prev) => applySuggestion(prev, suggestion));
  }, []);


  const pressKey = useCallback((key: string, action: () => void) => {
    setActiveKey(key);
    action();
    window.setTimeout(() => setActiveKey(null), 120);
  }, []);

  const symbolRows = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["@", "#", "$", "%", "&", "*", "-", "+", "(", ")"],
    ["!", '"', "'", ":", ";", "/", "?"],
  ];

  const activeRows = isSymbols ? symbolRows : ROWS;

  return (
    <div className="mx-auto flex w-full max-w-[420px] flex-col overflow-hidden rounded-[2.5rem] border border-glass-border bg-gradient-to-b from-[oklch(0.22_0.04_258)] to-[oklch(0.14_0.03_260)] p-4 shadow-2xl shadow-black/60">
      {/* Status bar */}
      <div className="mb-3 flex items-center justify-between px-2 text-[10px] font-medium tracking-wide text-muted-foreground">
        <span>Teclado Glass</span>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-primary/80" />
          <span>PT → EN</span>
        </div>
      </div>

      {/* Text area */}
      <div
        ref={textAreaRef}
        className="glass-surface mb-3 min-h-[120px] w-full overflow-y-auto rounded-2xl p-4 text-base leading-relaxed tracking-wide text-foreground"
      >
        {text ? (
          <span className="whitespace-pre-wrap">{text}</span>
        ) : (
          <span className="text-muted-foreground/60">Digite algo...</span>
        )}
      </div>

      {/* Suggestion bar */}
      <div className="mb-4 flex min-h-[44px] items-center gap-2 overflow-x-auto rounded-xl px-1 py-2 no-scrollbar">
        {suggestions.length > 0 ? (
          suggestions.map((s) => (
            <button
              key={`${s.words}-${s.text}`}
              type="button"
              onClick={() => handleSuggestionClick(s)}
              className="suggestion-pill shrink-0 rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all active:scale-95"
            >
              {s.text}
            </button>
          ))
        ) : (
          <span className="px-2 text-xs tracking-wide text-muted-foreground/50">
            A tradução em inglês aparecerá aqui
          </span>
        )}
      </div>

          <span className="px-2 text-xs tracking-wide text-muted-foreground/50">
            A tradução em inglês aparecerá aqui
          </span>
        )}
      </div>

      {/* Keyboard */}
      <div className="flex flex-col gap-2.5">
        {/* Row 1 */}
        <div className="flex justify-center gap-1.5">
          {activeRows[0]?.map((char) => (
            <KeyButton
              key={char}
              char={char}
              active={activeKey === char}
              onClick={() => pressKey(char, () => handleChar(char))}
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex justify-center gap-1.5 px-4">
          {activeRows[1]?.map((char) => (
            <KeyButton
              key={char}
              char={char}
              active={activeKey === char}
              onClick={() => pressKey(char, () => handleChar(char))}
            />
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex justify-center gap-1.5">
          {!isSymbols && (
            <ActionKey
              label={<ChevronLeft className="h-4 w-4" />}
              active={activeKey === "shift"}
              onClick={() => pressKey("shift", () => setIsShift((s) => !s))}
              className={isShift ? "bg-primary/30 text-primary-foreground" : ""}
            />
          )}
          {activeRows[2]?.map((char) => (
            <KeyButton
              key={char}
              char={char}
              active={activeKey === char}
              onClick={() => pressKey(char, () => handleChar(char))}
            />
          ))}

          <ActionKey
            label={<Delete className="h-4 w-4" />}
            active={activeKey === "backspace"}
            onClick={() => pressKey("backspace", handleBackspace)}
          />
        </div>

        {/* Row 4 */}
        <div className="flex justify-center gap-1.5">
          <ActionKey
            label={isSymbols ? "ABC" : "?123"}
            active={activeKey === "symbols"}
            onClick={() => pressKey("symbols", () => setIsSymbols((s) => !s))}
            className="text-xs font-semibold tracking-wide"
          />
          <ActionKey
            label={<Globe className="h-4 w-4" />}
            active={activeKey === "globe"}
            onClick={() => pressKey("globe", () => {})}
          />
          <button
            type="button"
            onClick={() => pressKey("space", handleSpace)}
            className="glass-key flex h-[46px] flex-1 items-center justify-center rounded-xl text-muted-foreground active:glass-key-active"
          >
            <Space className="h-4 w-4" />
          </button>
          <ActionKey
            label="return"
            active={activeKey === "return"}
            onClick={() => pressKey("return", handleEnter)}
            className="text-xs font-semibold tracking-wide"
          />
        </div>
      </div>

      {/* Home indicator */}
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-28 rounded-full bg-foreground/20" />
      </div>
    </div>
  );
}

interface KeyButtonProps {
  char: string;
  active: boolean;
  onClick: () => void;
}

function KeyButton({ char, active, onClick }: KeyButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`glass-key no-tap-highlight flex h-[46px] w-[32px] items-center justify-center rounded-xl text-[17px] font-medium tracking-wide ${
        active ? "glass-key-active" : ""
      }`}
      aria-label={`Tecla ${char}`}
    >
      {char}
    </button>
  );
}

interface ActionKeyProps {
  label: React.ReactNode;
  active: boolean;
  onClick: () => void;
  className?: string;
}

function ActionKey({ label, active, onClick, className = "" }: ActionKeyProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`glass-key no-tap-highlight flex h-[46px] min-w-[42px] items-center justify-center rounded-xl px-3 text-sm font-medium text-muted-foreground ${
        active ? "glass-key-active" : ""
      } ${className}`}
    >
      {label}
    </button>
  );
}
