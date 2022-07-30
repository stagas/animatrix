import BezierEasing from 'bezier-easing'
import { AnimSettings } from './animatrix-core'

export type StepAnimationState = 'preparing' | 'running' | 'finished'

export type StepAnimation<T = any> = {
  t: number
  from: T
  to: T
  current: T
  state: StepAnimationState
  set: (values: T) => T
  update: (values: T) => T
}

export const createStepAnimation = <T>(
  { duration, easing }: AnimSettings,
  anim?: StepAnimation<T>,
): StepAnimation<T> => {
  let from: T
  let to: T
  let last: T
  let current: T

  let state: StepAnimationState = 'finished'
  const easingFn = BezierEasing(...easing)

  if (anim) {
    current = from = anim.current
    state = 'preparing'
  }

  let startTime = 0

  let now: number

  const timeElapsed = () => {
    now = performance.now()
    return now - startTime
  }

  const set = (values: T) => {
    switch (state) {
      case 'finished':
        if (from) {
          current = from
        } else {
          current = from = values

          last = to = values

          state = 'preparing'

          return current
        }

      // eslint-disable-next-line no-fallthrough

      case 'preparing':
        startTime = performance.now()

        from = current

        last = to = values

        state = 'running'

        return { ...current }

      case 'running':
        last = values

        return current
    }
  }

  const update = (values: T) => {
    switch (state) {
      case 'running':
        current = values
        break

      case 'finished':
        current = from = last
        break
    }

    return current
  }

  return {
    get t() {
      if (state === 'running') {
        const elapsed = timeElapsed()
        let t = elapsed / duration
        if (t < 1) return easingFn(t)

        // schedule next
        if (last !== to) {
          // startTime = performance.now()
          startTime += duration
          t = (elapsed - duration) / duration
          from = current
          to = last
          if (t < 1) return easingFn(t)
        }

        state = 'finished'
      }
      return 1
    },
    get from() {
      return from as T
    },
    get to() {
      return to
    },
    get state() {
      return state
    },
    get current() {
      return current
    },
    set,
    update,
  }
}
