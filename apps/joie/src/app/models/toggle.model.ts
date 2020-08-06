export interface ToggleBlock {
  title: string;
  allChecked: boolean;
  toggles: Toggle[];
}

export interface Toggle {
  name: string;
  isChecked: boolean;
}
