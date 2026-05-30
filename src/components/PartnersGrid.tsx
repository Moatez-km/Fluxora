/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { PARTNERS_LIST } from "../data";

export const PartnersGrid: React.FC = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-3 select-none text-left">
      <div className="flex items-center justify-between border-b border-neutral-900/60 pb-2 mb-1">
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#a3a3a3] font-semibold">
          Our Partners
        </span>
        <span className="text-[9px] font-mono text-neutral-500">
          GLOBAL NETWORK
        </span>
      </div>

      {/* Grid of clean partners */}
      <div className="grid grid-cols-3 gap-2">
        {PARTNERS_LIST.map((partner) => {
          // Dynamic Lucide Icon loading
          const IconComponent = (Icons as any)[partner.iconName] || Icons.Share2;

          return (
            <div
              key={partner.id}
              className="group flex items-center gap-1.5 p-2 rounded-xl bg-neutral-950/40 border border-neutral-900/50 hover:border-neutral-800 hover:bg-neutral-900/35 transition-all duration-300"
            >
              <IconComponent className="w-3.5 h-3.5 text-neutral-500 group-hover:text-orange-500 transition-colors duration-300" />
              <span className="text-[11px] font-medium text-neutral-400 group-hover:text-neutral-100 transition-colors duration-300 truncate">
                {partner.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
