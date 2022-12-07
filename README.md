

<h1>
animatrix <a href="https://npmjs.org/package/animatrix"><img src="https://img.shields.io/badge/npm-v1.1.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-342-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/animatrix@1.1.0/dist/animatrix.min.js"><img src="https://img.shields.io/badge/brotli-2.5K-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Create DOM Animations.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i animatrix </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add animatrix </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add animatrix</code>
</td></tr></table>
</h4>


## API

<p>  <details id="AnimSettings$1" title="Interface" ><summary><span><a href="#AnimSettings$1">#</a></span>  <code><strong>AnimSettings</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="duration$2" title="Property" ><summary><span><a href="#duration$2">#</a></span>  <code><strong>duration</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="easing$3" title="Property" ><summary><span><a href="#easing$3">#</a></span>  <code><strong>easing</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#Easing$4">Easing</a></p>        </ul></details></p></ul></details><details id="Easing$8" title="TypeAlias" ><summary><span><a href="#Easing$8">#</a></span>  <code><strong>Easing</strong></code>    </summary>  <a href=""></a>  <ul><p>[  number, number, number, number  ]</p>        </ul></details><details id="KeyframeAnimation$15" title="TypeAlias" ><summary><span><a href="#KeyframeAnimation$15">#</a></span>  <code><strong>KeyframeAnimation</strong></code>    </summary>  <a href=""></a>  <ul><p>{<p>  <details id="animation$18" title="Property" ><summary><span><a href="#animation$18">#</a></span>  <code><strong>animation</strong></code>    </summary>  <a href=""></a>  <ul><p><span>Animation</span> | <code>null</code></p>        </ul></details><details id="breakTime$19" title="Property" ><summary><span><a href="#breakTime$19">#</a></span>  <code><strong>breakTime</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="keyframes$17" title="Property" ><summary><span><a href="#keyframes$17">#</a></span>  <code><strong>keyframes</strong></code>    </summary>  <a href=""></a>  <ul><p><span>Keyframe</span>  []</p>        </ul></details><details id="next$20" title="Property" ><summary><span><a href="#next$20">#</a></span>  <code><strong>next</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#KeyframeAnimationDetails$9">KeyframeAnimationDetails</a> | <code>null</code></p>        </ul></details><details id="onfinish$21" title="Property" ><summary><span><a href="#onfinish$21">#</a></span>  <code><strong>onfinish</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$22" title="Function" ><summary><span><a href="#__type$22">#</a></span>  <em>()</em>    </summary>    <ul>    <p>      <p><strong></strong><em>()</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p>        </ul></details></p>}</p>        </ul></details><details id="KeyframeAnimationDetails$9" title="TypeAlias" ><summary><span><a href="#KeyframeAnimationDetails$9">#</a></span>  <code><strong>KeyframeAnimationDetails</strong></code>    </summary>  <a href=""></a>  <ul><p>{<p>  <details id="animSettings$11" title="Property" ><summary><span><a href="#animSettings$11">#</a></span>  <code><strong>animSettings</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#AnimSettings$1">AnimSettings</a></p>        </ul></details><details id="getKeyframes$12" title="Property" ><summary><span><a href="#getKeyframes$12">#</a></span>  <code><strong>getKeyframes</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$13" title="Function" ><summary><span><a href="#__type$13">#</a></span>  <em>()</em>    </summary>    <ul>    <p>      <p><strong></strong><em>()</em>  &nbsp;=&gt;  <ul><span>Keyframe</span>  []</ul></p></p>    </ul></details></p>        </ul></details></p>}</p>        </ul></details><details id="ManualAnimation$33" title="TypeAlias" ><summary><span><a href="#ManualAnimation$33">#</a></span>  <code><strong>ManualAnimation</strong></code>    </summary>  <a href=""></a>  <ul><p>{<p>  <details id="current$37" title="Property" ><summary><span><a href="#current$37">#</a></span>  <code><strong>current</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#T$52">T</a></p>        </ul></details><details id="from$35" title="Property" ><summary><span><a href="#from$35">#</a></span>  <code><strong>from</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#T$52">T</a></p>        </ul></details><details id="last$38" title="Property" ><summary><span><a href="#last$38">#</a></span>  <code><strong>last</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#T$52">T</a></p>        </ul></details><details id="set$44" title="Property" ><summary><span><a href="#set$44">#</a></span>  <code><strong>set</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$45" title="Function" ><summary><span><a href="#__type$45">#</a></span>  <em>(values)</em>    </summary>    <ul>    <p>    <details id="values$47" title="Parameter" ><summary><span><a href="#values$47">#</a></span>  <code><strong>values</strong></code>    </summary>    <ul><p><a href="#T$52">T</a></p>        </ul></details>  <p><strong></strong><em>(values)</em>  &nbsp;=&gt;  <ul><a href="#T$52">T</a></ul></p></p>    </ul></details></p>        </ul></details><details id="state$39" title="Property" ><summary><span><a href="#state$39">#</a></span>  <code><strong>state</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#ManualAnimationState$32">ManualAnimationState</a></p>        </ul></details><details id="stop$40" title="Property" ><summary><span><a href="#stop$40">#</a></span>  <code><strong>stop</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$41" title="Function" ><summary><span><a href="#__type$41">#</a></span>  <em>(values)</em>    </summary>    <ul>    <p>    <details id="values$43" title="Parameter" ><summary><span><a href="#values$43">#</a></span>  <code><strong>values</strong></code>    </summary>    <ul><p><a href="#T$52">T</a></p>        </ul></details>  <p><strong></strong><em>(values)</em>  &nbsp;=&gt;  <ul><a href="#T$52">T</a></ul></p></p>    </ul></details></p>        </ul></details><details id="to$36" title="Property" ><summary><span><a href="#to$36">#</a></span>  <code><strong>to</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#T$52">T</a></p>        </ul></details><details id="update$48" title="Property" ><summary><span><a href="#update$48">#</a></span>  <code><strong>update</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$49" title="Function" ><summary><span><a href="#__type$49">#</a></span>  <em>(values)</em>    </summary>    <ul>    <p>    <details id="values$51" title="Parameter" ><summary><span><a href="#values$51">#</a></span>  <code><strong>values</strong></code>    </summary>    <ul><p><a href="#T$52">T</a></p>        </ul></details>  <p><strong></strong><em>(values)</em>  &nbsp;=&gt;  <ul><a href="#T$52">T</a></ul></p></p>    </ul></details></p>        </ul></details></p>}</p>        </ul></details><details id="ManualAnimationState$32" title="TypeAlias" ><summary><span><a href="#ManualAnimationState$32">#</a></span>  <code><strong>ManualAnimationState</strong></code>    </summary>  <a href=""></a>  <ul><p><code>"preparing"</code> | <code>"running"</code> | <code>"finished"</code></p>        </ul></details><details id="StepAnimation$67" title="TypeAlias" ><summary><span><a href="#StepAnimation$67">#</a></span>  <code><strong>StepAnimation</strong></code>    </summary>  <a href=""></a>  <ul><p>{<p>  <details id="current$72" title="Property" ><summary><span><a href="#current$72">#</a></span>  <code><strong>current</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#T$82">T</a></p>        </ul></details><details id="from$70" title="Property" ><summary><span><a href="#from$70">#</a></span>  <code><strong>from</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#T$82">T</a></p>        </ul></details><details id="set$74" title="Property" ><summary><span><a href="#set$74">#</a></span>  <code><strong>set</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$75" title="Function" ><summary><span><a href="#__type$75">#</a></span>  <em>(values)</em>    </summary>    <ul>    <p>    <details id="values$77" title="Parameter" ><summary><span><a href="#values$77">#</a></span>  <code><strong>values</strong></code>    </summary>    <ul><p><a href="#T$82">T</a></p>        </ul></details>  <p><strong></strong><em>(values)</em>  &nbsp;=&gt;  <ul><a href="#T$82">T</a></ul></p></p>    </ul></details></p>        </ul></details><details id="state$73" title="Property" ><summary><span><a href="#state$73">#</a></span>  <code><strong>state</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#StepAnimationState$66">StepAnimationState</a></p>        </ul></details><details id="t$69" title="Property" ><summary><span><a href="#t$69">#</a></span>  <code><strong>t</strong></code>    </summary>  <a href=""></a>  <ul><p>number</p>        </ul></details><details id="to$71" title="Property" ><summary><span><a href="#to$71">#</a></span>  <code><strong>to</strong></code>    </summary>  <a href=""></a>  <ul><p><a href="#T$82">T</a></p>        </ul></details><details id="update$78" title="Property" ><summary><span><a href="#update$78">#</a></span>  <code><strong>update</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$79" title="Function" ><summary><span><a href="#__type$79">#</a></span>  <em>(values)</em>    </summary>    <ul>    <p>    <details id="values$81" title="Parameter" ><summary><span><a href="#values$81">#</a></span>  <code><strong>values</strong></code>    </summary>    <ul><p><a href="#T$82">T</a></p>        </ul></details>  <p><strong></strong><em>(values)</em>  &nbsp;=&gt;  <ul><a href="#T$82">T</a></ul></p></p>    </ul></details></p>        </ul></details></p>}</p>        </ul></details><details id="StepAnimationState$66" title="TypeAlias" ><summary><span><a href="#StepAnimationState$66">#</a></span>  <code><strong>StepAnimationState</strong></code>    </summary>  <a href=""></a>  <ul><p><code>"preparing"</code> | <code>"running"</code> | <code>"finished"</code></p>        </ul></details><details id="Easing$4" title="Variable" ><summary><span><a href="#Easing$4">#</a></span>  <code><strong>Easing</strong></code>    </summary>  <a href=""></a>  <ul><p>{<p>  <details id="Flat$6" title="Property" ><summary><span><a href="#Flat$6">#</a></span>  <code><strong>Flat</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href=""></a>  <ul><p><a href="#Easing$4">Easing</a></p>        </ul></details><details id="Linear$7" title="Property" ><summary><span><a href="#Linear$7">#</a></span>  <code><strong>Linear</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href=""></a>  <ul><p><a href="#Easing$4">Easing</a></p>        </ul></details></p>}</p>        </ul></details><details id="BezierEasing$57" title="Function" ><summary><span><a href="#BezierEasing$57">#</a></span>  <code><strong>BezierEasing</strong></code><em>(mX1, mY1, mX2, mY2)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="mX1$59" title="Parameter" ><summary><span><a href="#mX1$59">#</a></span>  <code><strong>mX1</strong></code>    </summary>    <ul><p>any</p>        </ul></details><details id="mY1$60" title="Parameter" ><summary><span><a href="#mY1$60">#</a></span>  <code><strong>mY1</strong></code>    </summary>    <ul><p>any</p>        </ul></details><details id="mX2$61" title="Parameter" ><summary><span><a href="#mX2$61">#</a></span>  <code><strong>mX2</strong></code>    </summary>    <ul><p>any</p>        </ul></details><details id="mY2$62" title="Parameter" ><summary><span><a href="#mY2$62">#</a></span>  <code><strong>mY2</strong></code>    </summary>    <ul><p>any</p>        </ul></details>  <p><strong>BezierEasing</strong><em>(mX1, mY1, mX2, mY2)</em>  &nbsp;=&gt;  <ul><details id="__type$63" title="Function" ><summary><span><a href="#__type$63">#</a></span>  <em>(x)</em>    </summary>    <ul>    <p>    <details id="x$65" title="Parameter" ><summary><span><a href="#x$65">#</a></span>  <code><strong>x</strong></code>    </summary>    <ul><p>any</p>        </ul></details>  <p><strong></strong><em>(x)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details></ul></p></p>    </ul></details><details id="createKeyframeAnimation$24" title="Function" ><summary><span><a href="#createKeyframeAnimation$24">#</a></span>  <code><strong>createKeyframeAnimation</strong></code><em>(animSettings, target, getKeyframes, current)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="animSettings$26" title="Parameter" ><summary><span><a href="#animSettings$26">#</a></span>  <code><strong>animSettings</strong></code>    </summary>    <ul><p><a href="#AnimSettings$1">AnimSettings</a></p>        </ul></details><details id="target$27" title="Parameter" ><summary><span><a href="#target$27">#</a></span>  <code><strong>target</strong></code>    </summary>    <ul><p><span>HTMLElement</span> | <span>SVGElement</span></p>        </ul></details><details id="getKeyframes$28" title="Function" ><summary><span><a href="#getKeyframes$28">#</a></span>  <code><strong>getKeyframes</strong></code><em>()</em>    </summary>    <ul>    <p>      <p><strong>getKeyframes</strong><em>()</em>  &nbsp;=&gt;  <ul><span>Keyframe</span>  []</ul></p></p>    </ul></details><details id="current$31" title="Parameter" ><summary><span><a href="#current$31">#</a></span>  <code><strong>current</strong></code>    </summary>    <ul><p><a href="#KeyframeAnimation$15">KeyframeAnimation</a></p>        </ul></details>  <p><strong>createKeyframeAnimation</strong><em>(animSettings, target, getKeyframes, current)</em>  &nbsp;=&gt;  <ul><a href="#KeyframeAnimation$15">KeyframeAnimation</a></ul></p></p>    </ul></details><details id="createManualAnimation$53" title="Function" ><summary><span><a href="#createManualAnimation$53">#</a></span>  <code><strong>createManualAnimation</strong></code><em>(anim)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="anim$56" title="Parameter" ><summary><span><a href="#anim$56">#</a></span>  <code><strong>anim</strong></code>    </summary>    <ul><p><a href="#ManualAnimation$33">ManualAnimation</a>&lt;<a href="#T$55">T</a>&gt;</p>        </ul></details>  <p><strong>createManualAnimation</strong>&lt;<span>T</span>&gt;<em>(anim)</em>  &nbsp;=&gt;  <ul><a href="#ManualAnimation$33">ManualAnimation</a>&lt;<a href="#T$55">T</a>&gt;</ul></p></p>    </ul></details><details id="createStepAnimation$83" title="Function" ><summary><span><a href="#createStepAnimation$83">#</a></span>  <code><strong>createStepAnimation</strong></code><em>(<a href="#AnimSettings$1">AnimSettings</a>, anim)</em>    </summary>  <a href=""></a>  <ul>    <p>    <a href="#AnimSettings$1">AnimSettings</a><details id="anim$87" title="Parameter" ><summary><span><a href="#anim$87">#</a></span>  <code><strong>anim</strong></code>    </summary>    <ul><p><a href="#StepAnimation$67">StepAnimation</a>&lt;<a href="#T$85">T</a>&gt;</p>        </ul></details>  <p><strong>createStepAnimation</strong>&lt;<span>T</span>&gt;<em>(<a href="#AnimSettings$1">AnimSettings</a>, anim)</em>  &nbsp;=&gt;  <ul><a href="#StepAnimation$67">StepAnimation</a>&lt;<a href="#T$85">T</a>&gt;</ul></p></p>    </ul></details></p>

## Credits
- [event-toolkit](https://npmjs.org/package/event-toolkit) by [stagas](https://github.com/stagas) &ndash; Toolkit for DOM events.
- [is-mobile-agent](https://npmjs.org/package/is-mobile-agent) by [stagas](https://github.com/stagas) &ndash; Singleton boolean that is true when user agent is mobile or tablet.

## Contributing

[Fork](https://github.com/stagas/animatrix/fork) or [edit](https://github.dev/stagas/animatrix) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
