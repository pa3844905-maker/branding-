import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

export default function AnimatedLottie({ src, loop = true, className = '', style = {} }){
  const [data, setData] = useState(null)
  const [reduced, setReduced] = useState(false)

  useEffect(()=>{
    // prefers-reduced-motion fallback
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    if (mq.addEventListener) mq.addEventListener('change', handler)
    else mq.addListener(handler)

    let cancelled = false
    fetch(src).then(r=>r.json()).then(j=>{ if(!cancelled) setData(j) }).catch(()=>{})
    return ()=>{ cancelled = true; if (mq.removeEventListener) mq.removeEventListener('change', handler) else mq.removeListener(handler) }
  },[src])

  if(reduced) return <div className={className} style={{...style, display:'flex',alignItems:'center',justifyContent:'center'}} aria-hidden>Animated preview</div>
  if(!data) return <div className={className} style={{...style, display:'flex',alignItems:'center',justifyContent:'center'}} aria-hidden>Loading animation…</div>

  return <Lottie animationData={data} loop={loop} className={className} style={style} />
}
