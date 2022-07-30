import { on } from 'event-toolkit'
import { AnimSettings } from './animatrix-core'

export type KeyframeAnimationDetails = {
  animSettings: AnimSettings
  getKeyframes: () => Keyframe[]
}

export type KeyframeAnimation = {
  keyframes: Keyframe[]
  animation: Animation | null
  breakTime: number
  next?: KeyframeAnimationDetails | null
  onfinish?: () => void
}

export const createKeyframeAnimation = (
  animSettings: AnimSettings,
  target: HTMLElement | SVGElement,
  getKeyframes: () => Keyframe[],
  current?: KeyframeAnimation,
) => {
  if (current?.animation) {
    if (performance.now() < current.breakTime) {
      current.next = {
        animSettings,
        getKeyframes,
      }
      return current
    }

    current.next = null

    if (current.animation.playState === 'running') {
      current.animation.pause()
      current.animation.commitStyles()
      current.animation.cancel()
    }
  }

  const anim = current ?? {} as KeyframeAnimation

  const create = ({ animSettings, getKeyframes }: KeyframeAnimationDetails) => {
    const breakTime = performance.now() + animSettings.duration * 0.65
    const keyframes = getKeyframes()

    const animation = target.animate(keyframes, {
      duration: animSettings.duration,
      easing: `cubic-bezier(${animSettings.easing})`,
      fill: 'forwards',
      iterations: 1,
    })

    on(animation).finish(() => {
      animation.commitStyles()
      animation.cancel()

      if (anim.next) {
        const next = anim.next
        anim.next = null
        Object.assign(anim, create(next))
      } else {
        anim.onfinish?.()
      }
    })

    return { keyframes, animation, breakTime }
  }

  return Object.assign(anim, create({ animSettings, getKeyframes }))
}
