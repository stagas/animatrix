export interface AnimSettings {
  duration: number
  easing: Easing
}

export type Easing = [number, number, number, number]

export const Easing = {
  Flat: [1, 1, 1, 1] as Easing,
  Linear: [0, 0, 1, 1] as Easing,
}
