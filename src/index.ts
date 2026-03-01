/**
 * CmdCoord — Tissue Layer
 * Composes cells per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: tissue → depends on → cell
 */

import { CmdProcessComposition } from "@webwaka/cell-cmd-process";
import { EventDispatchComposition } from "@webwaka/cell-event-dispatch";
import { StateStoreComposition } from "@webwaka/cell-state-store";

export { CmdProcessComposition } from '@webwaka/cell-cmd-process';
export { EventDispatchComposition } from '@webwaka/cell-event-dispatch';
export { StateStoreComposition } from '@webwaka/cell-state-store';

/**
 * CmdCoord Composition
 * Assembles cell-layer components into a cohesive tissue-layer capability.
 */
export class CmdCoordComposition {
  private cmdProcessComposition: CmdProcessComposition;
  private eventDispatchComposition: EventDispatchComposition;
  private stateStoreComposition: StateStoreComposition;

  constructor() {
    this.cmdProcessComposition = new CmdProcessComposition();
    this.eventDispatchComposition = new EventDispatchComposition();
    this.stateStoreComposition = new StateStoreComposition();
  }
}

export * from "./types";
