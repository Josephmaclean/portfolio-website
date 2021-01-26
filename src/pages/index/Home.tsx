import React, {useEffect, createRef} from 'react';
import { TweenMax, Power2 } from 'gsap';
import Typist from 'react-typing-animation';
import styles from './Home.module.scss';

import logo from '../../assets/images/svg/maclean_logo.svg'
import python from '../../assets/images/svg/python_logo.svg'
import typescript from '../../assets/images/svg/typescript_logo.svg'
import swift from '../../assets/images/svg/swift_logo.svg'
import chevron_right from '../../assets/images/svg/chevron_right.svg'



export default function Home() {
    const twitterIconRef = createRef<HTMLDivElement>();
    const githubIconRef = createRef<HTMLDivElement>();
    const linkedinIconRef = createRef<HTMLDivElement>();
    useEffect(() => {
        const twitterIcon = twitterIconRef.current
        const linkedinIcon = linkedinIconRef.current
        const githubIcon = githubIconRef.current
        const socialIconsArray = [
            linkedinIcon, githubIcon, twitterIcon,
        ]

        TweenMax.from(socialIconsArray, 0.7, {
            stagger: 0.1,
            x: 100,
            autoAlpha: 0,
            ease: Power2.easeOut
        })

    })
    return (
        <>
        <main className={styles.main}>
                <section className="table-cell align-middle">
                    <div className="flex justify-center relative">
                        <div className={styles.content}>
                            <img src={logo} alt="maclean logo" className=" h-5 mb-8"/>
                            <div className={styles.typewriter}>
                                <Typist speed={100} cursorClassName={styles.cursor}>
                                    <h1 className="text-white">hi, i'm <span className="text-green inline-block"><a href="http://"> Maclean</a></span>, a software engineer.</h1>
                                </Typist>
                            </div>
                            <div className={styles.icons}>
                                <div className="languages mt-10 flex w-80 rounded-full bg-stone py-5 px-10 justify-between cursor-pointer">
                                    <ul className="flex w-44 justify-between ">
                                        <li>
                                            <a href="/" className="language-logo">
                                                <img src={python} alt="python logo" className="cursor-pointer"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="language-logo">
                                                <img src={typescript} alt="typescript logo" className="cursor-pointer"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" className="language-logo">
                                                <img src={swift} alt="swift logo" className="cursor-pointer"/>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className=" h-8 flex">
                                        <img className={styles.chevron_image} src={chevron_right} alt="chevron right"/>
                                    </div>
                                    
                                </div>
                            </div>
                            <hr className=" mt-14"/>
                            <div className="flex mt-12">
                                <button className="btn-outline bg-black-pearl border-white border-2 text-body-bold text-white px-6 py-4">
                                    download my resume
                                </button>
                                <button className="bg-black-pearl text-body-bold text-white px-6 py-4 btn-regular">
                                    go to blog
                                </button>
                                
                            </div>
                        </div>
                        <aside className="absolute top-0 bottom-0 flex justify-center flex-col right-14">
                            <div className="social-media h-30 flex flex-col justify-between">
                                {/* <img src={linkedin} alt="linkedin logo" ref={linkedinIconRef}/> */}
                                <div ref={linkedinIconRef} className="socialMediaIcon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.03911 21.0723C9.03911 20.9862 9.03911 20.9037 9.03911 20.8212C9.03911 16.9588 9.03911 13.1 9.03911 9.23755C9.03911 9.12996 9.03194 9.04389 9.18974 9.04389C10.3302 9.05106 11.4742 9.04748 12.6146 9.04748C12.6433 9.04748 12.672 9.05465 12.7186 9.06182C12.7186 9.5639 12.7186 10.0588 12.7186 10.5573C12.733 10.5609 12.7437 10.5681 12.7581 10.5716C12.9015 10.3852 13.0378 10.1915 13.1884 10.0086C13.626 9.47066 14.1747 9.07617 14.8202 8.83947C15.1717 8.71037 15.5554 8.63147 15.9248 8.61354C16.434 8.59202 16.954 8.59919 17.4561 8.68526C18.281 8.82513 19.009 9.19093 19.6115 9.78984C20.1817 10.3529 20.5582 11.0307 20.7627 11.7946C20.8703 12.1998 20.9384 12.6158 21.0029 13.0282C21.046 13.3151 21.0675 13.6092 21.0675 13.8961C21.0711 16.2272 21.0711 18.5583 21.0711 20.8894C21.0711 20.9468 21.0675 21.0041 21.0639 21.0794C20.9958 21.0794 20.9384 21.0794 20.881 21.0794C19.78 21.0794 18.6826 21.0759 17.5816 21.083C17.3987 21.083 17.3665 21.0221 17.3665 20.8571C17.37 18.7125 17.3772 16.5643 17.3629 14.4197C17.3593 14.0432 17.3234 13.6523 17.2266 13.29C17.0509 12.6553 16.6492 12.1962 16.0108 11.9631C15.4729 11.7659 14.9278 11.73 14.3755 11.8699C13.7658 12.0241 13.3462 12.4293 13.0306 12.9637C12.7868 13.3761 12.7402 13.8316 12.7366 14.287C12.7222 16.4639 12.7294 18.6372 12.7294 20.8141C12.7294 20.8965 12.7294 20.979 12.7294 21.0687C11.4921 21.0723 10.2764 21.0723 9.03911 21.0723Z" fill="#7A7A7A"/>
                                        <path d="M6.72958 15.1155C6.72958 17.027 6.72599 18.9385 6.73316 20.8499C6.73316 21.0221 6.6973 21.0866 6.50723 21.083C5.41341 21.0723 4.3196 21.0723 3.22578 21.083C3.04647 21.083 3.00702 21.0221 3.00702 20.8571C3.01061 17.0162 3.01061 13.1717 3.00702 9.33081C3.00702 9.1766 3.05005 9.1228 3.20785 9.1228C4.31242 9.12998 5.417 9.12998 6.52516 9.1228C6.6973 9.1228 6.72958 9.18736 6.72958 9.34157C6.72958 11.2674 6.72958 13.1932 6.72958 15.1155Z" fill="#7A7A7A"/>
                                        <path d="M4.82877 3.0011C6.00865 2.97241 6.71515 3.82953 6.71874 4.88031C6.72232 5.9562 5.9692 6.75953 4.78573 6.75594C3.68474 6.75594 2.90652 5.96696 2.91011 4.85162C2.91369 3.80802 3.6704 2.96524 4.82877 3.0011Z" fill="#7A7A7A"/>
                                    </svg>
                                </div>
                                <div ref={githubIconRef} className="socialMediaIcon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2516 20.8829C9.94221 20.9157 9.67971 20.9485 9.41721 20.9766C8.05315 21.1126 6.86252 20.7422 5.96252 19.6782C5.68127 19.3454 5.5219 18.9141 5.28284 18.5438C4.91252 17.9626 4.53284 17.386 4.12502 16.8282C3.9844 16.636 3.74065 16.5235 3.55315 16.3594C3.49221 16.3079 3.47346 16.2094 3.43127 16.1297C3.51565 16.0969 3.59534 16.0407 3.67971 16.0313C4.75784 15.9329 5.51721 16.4297 6.0469 17.3251C6.70784 18.4407 7.66409 19.0501 8.96252 19.0501C9.33752 19.0501 9.71252 18.9235 10.0828 18.8391C10.1531 18.8204 10.2375 18.7126 10.2469 18.6329C10.3125 18.1454 10.3735 17.6579 10.5985 17.2126C10.6828 17.0485 10.7813 16.8938 10.8797 16.725C10.5 16.65 10.1344 16.5938 9.77346 16.5047C8.1094 16.0829 6.73596 15.2485 5.93909 13.6641C5.62971 13.0454 5.45627 12.3797 5.43284 11.686C5.39534 10.6172 5.4094 9.5438 5.62502 8.48911C5.77971 7.74849 6.06096 7.05942 6.62346 6.52505C6.74534 6.40786 6.76877 6.30474 6.70315 6.12661C6.38909 5.25005 6.35627 4.35942 6.62346 3.46411C6.67971 3.27192 6.73127 3.07974 6.78752 2.87817C8.0719 3.12192 8.83596 3.98911 9.55315 4.95005C10.2938 4.40161 11.1703 4.35474 12.0235 4.29849C13.036 4.23286 14.0531 4.24692 15.061 4.41099C15.586 4.49536 15.9094 4.60317 16.4203 4.90786C16.861 4.45317 17.2735 3.9938 17.7281 3.57661C18.0891 3.2438 18.5391 3.03286 19.0266 2.92036C19.1625 2.88755 19.2328 2.90161 19.2891 3.05161C19.6688 4.08755 19.725 5.1188 19.3078 6.15474C19.2516 6.29536 19.2563 6.3938 19.3735 6.5063C20.0485 7.14849 20.3578 7.97817 20.461 8.87349C20.5547 9.70317 20.6063 10.5375 20.6063 11.3719C20.6063 12.5579 20.2547 13.6454 19.5094 14.5782C18.9844 15.2391 18.3047 15.7125 17.536 16.0688C16.7907 16.411 16.0125 16.6079 15.2063 16.711C15.1875 16.7157 15.1688 16.7297 15.136 16.7438C15.6891 17.536 15.7781 18.4266 15.7688 19.35C15.7547 20.6954 15.7594 22.036 15.7688 23.3813C15.7688 23.5922 15.7078 23.6438 15.5016 23.6438C13.8375 23.6344 12.1735 23.6344 10.5094 23.6438C10.3031 23.6438 10.2375 23.5782 10.2375 23.3766C10.2469 22.6501 10.2422 21.9235 10.2422 21.1969C10.2516 21.0891 10.2516 20.9954 10.2516 20.8829Z" fill="#7A7A7A"/>
                                    </svg>
                                </div>
                                <div ref={twitterIconRef} className="socialMediaIcon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.08193 19.4435C4.27016 19.6403 6.24193 19.0893 8.0366 17.7433C6.15928 17.578 4.90381 16.6413 4.20326 14.886C4.81722 14.9608 5.39183 14.9805 6.00186 14.8152C3.97892 14.1855 2.90055 12.8631 2.75493 10.7299C3.36102 11.0133 3.9317 11.218 4.60469 11.2258C3.40432 10.3246 2.79035 9.15568 2.81397 7.68374C2.82577 7.00681 3.00681 6.36923 3.36496 5.76707C5.58861 8.36855 8.379 9.809 11.8148 10.0491C11.7952 9.89952 11.7834 9.78145 11.7676 9.65945C11.4842 7.47909 12.9011 5.49551 15.0657 5.08227C16.4235 4.82251 17.6239 5.18066 18.6393 6.11735C18.7967 6.25903 18.9305 6.29052 19.1273 6.23935C19.9184 6.03863 20.6701 5.74739 21.3982 5.35383C21.1188 6.27477 20.5441 6.96745 19.7649 7.54993C19.942 7.51844 20.123 7.49483 20.3001 7.45941C20.4851 7.42005 20.6701 7.37676 20.8551 7.3256C21.0322 7.27837 21.2053 7.22327 21.3785 7.16423C21.5556 7.1052 21.7327 7.03829 21.9413 7.00287C21.839 7.14456 21.7406 7.29411 21.6304 7.43186C21.1739 8.0104 20.6465 8.5181 20.0679 8.9707C20.0089 9.01793 19.9577 9.12026 19.9617 9.1911C19.9932 10.5883 19.7964 11.95 19.3438 13.2724C18.4543 15.8778 16.9037 17.9873 14.5777 19.4947C13.4285 20.2385 12.173 20.7265 10.8309 21.0099C9.50066 21.2893 8.16254 21.3405 6.82047 21.1831C5.47448 21.0257 4.19539 20.6281 2.99107 20.0063C2.67228 19.845 2.3653 19.6639 2.05438 19.4907C2.06619 19.475 2.07406 19.4593 2.08193 19.4435Z" fill="#7A7A7A"/>
                                    </svg>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
        </main>
        </>
    )
}