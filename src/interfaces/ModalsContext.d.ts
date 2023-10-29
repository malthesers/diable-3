export interface ModalsContext {
  toggleShowInstructions: (value?: boolean) => void,
  toggleShowQualities: (value?: boolean) => void,
  toggleShowVictory: (value?: boolean) => void,
  toggleShowDefeat: (value?: boolean) => void,
  showInstructions: boolean,
  showQualities: boolean,
  showVictory: boolean,
  showDefeat: boolean,
}