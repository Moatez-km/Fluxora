/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export const SilhouetteHero: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center pointer-events-none select-none">
      {/* Spacer container to respect page layout and let the ambient high-fidelity background shine through cleanly */}
    </div>
  );
};

