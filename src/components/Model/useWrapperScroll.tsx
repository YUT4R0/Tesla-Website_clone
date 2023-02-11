import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

const useWrapperScroll = () => {

    const { wrapperRef } = useContext(ModelsContext)

    const scrollY = useMotionValue(0)
    const scrollY_progress = useMotionValue(0)
    
    useEffect(() => {
        const mutableWrapper = wrapperRef.current

        if(mutableWrapper) {
            const updateScrollValue = () => {
                if (mutableWrapper) {
                    const { scrollTop, scrollHeight, offsetHeight } = mutableWrapper

                    const fullScroll = scrollHeight - offsetHeight

                    scrollY.set(scrollTop)                          //px: number
                    scrollY_progress.set(scrollTop / fullScroll)    //[0 - 1] %
                }
            }
        
            mutableWrapper?.addEventListener("scroll", updateScrollValue)
            
            return () => {
                mutableWrapper?.removeEventListener("scroll", updateScrollValue)
            }
        }
    },
    [scrollY, scrollY_progress, wrapperRef]
    )

    return { scrollY, scrollY_progress }
}

export default useWrapperScroll;