export interface ModalsContext {
  toggleShowInstructions: (value?: boolean) => void,
  toggleShowVictory: (value?: boolean) => void,
  toggleShowDefeat: (value?: boolean) => void,
  showInstructions: boolean,
  showVictory: boolean,
  showDefeat: boolean,
}