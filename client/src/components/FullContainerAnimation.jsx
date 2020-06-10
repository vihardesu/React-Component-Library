import React from 'react'
import styled from 'styled-components';
import { useLottie, Lottie } from "react-lottie-hook";
import * as animationData from "../assets/intro_animation.json";

/**
 * Sources
 * https://github.com/chenqingspring/vue-lottie/issues/20
 * https://codesandbox.io/s/lottie-with-hooks-ft8dl?file=/src/index.tsx
 * https://medium.com/@noamgjacobsonknzi/react-lottie-hook-b43c30227f00
 * 
 */

export default function FullContainerAnimation() {

    const [lottieRef, { isPaused, isStopped }, controls] = useLottie({
        renderer: "svg",
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: false,
        },
        animationData: animationData.default
      })

    return (
        <Lottie lottieRef={lottieRef} width={500} height={500} />
    )
}
