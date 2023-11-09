export interface ModalsContext {
  toggleShowInstructions: (value?: boolean) => void,
  toggleShowQualities: (value?: boolean) => void,
  toggleShowRecords: (value?: boolean) => void,
  toggleShowVictory: (value?: boolean) => void,
  toggleShowDefeat: (value?: boolean) => void,
  showInstructions: boolean,
  showQualities: boolean,
  showRecords: boolean,
  showVictory: boolean,
  showDefeat: boolean,
}