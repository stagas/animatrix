export type ManualAnimationState = 'preparing' | 'running' | 'finished'

export type ManualAnimation<T = any> = {
  from: T
  to: T
  current: T
  last: T
  state: ManualAnimationState
  stop: (values: T) => T
  set: (values: T) => T
  update: (values: T) => T
}

export const createManualAnimation = <T>(
  anim?: ManualAnimation<T>,
): ManualAnimation<T> => {
  let from: T
  let to: T
  let last: T
  let current: T

  let state: ManualAnimationState = 'finished'

  if (anim) {
    current = from = anim.current
    state = 'preparing'
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

  const stop = (values: T) => {
    state = 'finished'
    current = last = from = values
    return values
  }

  return {
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
    get last() {
      return last
    },
    stop,
    set,
    update,
  }
}
