/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Edit3, CheckCircle, Info, RefreshCw, X } from "lucide-react";

interface CopySuiteProps {
  originalText: string;
  currentText: string;
  onChange: (newVal: string) => void;
  label: string;
  isOpen: boolean;
  onClose: () => void;
}

export const CopySuite: React.FC<CopySuiteProps> = ({
  originalText,
  currentText,
  onChange,
  label,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const originalLen = originalText.length;
  const currentLen = currentText.length;
  const diff = currentLen - originalLen;
  const isMatch = diff === 0;

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 max-w-sm w-full shadow-2xl z-50 pointer-events-auto flex flex-col gap-4 font-sans text-xs">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <h4 className="font-semibold text-neutral-200 uppercase tracking-wider text-[10px]">
            {label}
          </h4>
        </div>
        <button 
          onClick={onClose}
          className="text-neutral-500 hover:text-neutral-200 transition-colors p-1 rounded-md hover:bg-neutral-900"
        >
          <X size={14} />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-neutral-400 font-medium font-mono text-[10px]">
          LIVE COPY EDITOR
        </label>
        <textarea
          rows={3}
          value={currentText}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-neutral-150 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans text-xs resize-none"
          placeholder="Enter new agency copy..."
        />
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-2 border-t border-neutral-900 pt-3">
        <div className="bg-neutral-900/50 p-2.5 rounded-lg border border-neutral-900 flex flex-col gap-0.5">
          <span className="text-[10px] text-neutral-500 font-mono">ORIGINAL</span>
          <span className="text-sm font-semibold text-neutral-300 font-mono">{originalLen} <span className="text-[10px] font-normal text-neutral-500">chars</span></span>
        </div>
        <div className="bg-neutral-900/50 p-2.5 rounded-lg border border-neutral-900 flex flex-col gap-0.5">
          <span className="text-[10px] text-neutral-500 font-mono">CURRENT</span>
          <span className={`text-sm font-semibold font-mono ${isMatch ? 'text-emerald-400' : 'text-orange-400'}`}>
            {currentLen} <span className="text-[10px] font-normal text-neutral-500">chars</span>
          </span>
        </div>
      </div>

      {/* Status Alert */}
      <div className={`p-3 rounded-xl flex items-start gap-2.5 border ${
        isMatch 
          ? "bg-emerald-950/20 border-emerald-900/30 text-emerald-400" 
          : "bg-orange-950/20 border-orange-900/30 text-orange-400"
      }`}>
        <div className="mt-0.5 shrink-0">
          {isMatch ? <CheckCircle size={14} /> : <Info size={14} />}
        </div>
        <p className="leading-normal text-[11px]">
          {isMatch ? (
            <span>
              <strong>Perfect Character Match!</strong> Fits smoothly inside the premium Swiss grid layout.
            </span>
          ) : (
            <span>
              <strong>Count mismatch:</strong> currently {Math.abs(diff)} character{Math.abs(diff) === 1 ? "" : "s"} {diff > 0 ? "over" : "under"} the original layout density ({originalLen} chars).
            </span>
          )}
        </p>
      </div>

      <button
        onClick={() => onChange(originalText)}
        disabled={isMatch}
        className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 disabled:opacity-40 disabled:hover:bg-neutral-900 text-neutral-300 border border-neutral-800 py-2 rounded-lg font-medium transition-colors cursor-pointer"
      >
        <RefreshCw size={12} />
        Reset to Original Copy
      </button>
    </div>
  );
};
