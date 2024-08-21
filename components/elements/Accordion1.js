'use client'
import { useState } from 'react'
export default function Accordion1() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <div className="flat-accordion aos-init aos-animate" data-aos="fade-up" data-aos-duration={800}>
                <div className={isActive === 1 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 1 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(1)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What is SpunkySDX</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>SpunkySDX is an AI-powered meme token engineered to track stolen assets on the EVM chain. It is built on the principles of transparency, community engagement, and real-world use cases.</p>
                </div>
                
                <div className={isActive === 2 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 2 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(2)}>
                        <span className="icon-Icon">
                        </span>
                        <span>How does SpunkySDX Work?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>SpunkySDX leverages advanced AI technology to actively track and monitor stolen asset on the EVM chain. Our system tracks stolen funds from their decentralized wallet to the CEX wallet of the fraudster and then informs the user.</p>
                </div>
                <div className={isActive === 3 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 3 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(3)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What is EVM Chain?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>The EVM, or Ethereum Virtual Machine, is a decentralized, Turing-complete virtual machine that executes smart contracts on the Ethereum blockchain. It allows developers to write and deploy code that can automate various operations and create decentralized applications (DAPPs).</p>
                </div>
                <div className={isActive === 4 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 4 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(4)}>
                        <span className="icon-Icon">
                        </span>
                        <span>How can I get involved with SpunkySDX?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 4 ? "block" : "none"}` }}>You can get involved with SpunkySDX by becoming a part of our vibrant community. Join our social media channels, participate in discussions and tasks, and stay updated on the latest developments.</p>
                </div>
                <div className={isActive === 5 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 5 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(5)}>
                        <span className="icon-Icon">
                        </span>
                        <span>How can I purchase SpunkySDX</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 5 ? "block" : "none"}` }}>To purchase SSDX Token, you can visit supported cryptocurrency exchanges and follow their registration process. Once registered, you can deposit funds and use them to buy SSDX at the prevailing market rate.</p>
                </div>
                <div className={isActive === 6 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 6 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(6)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What set spunkySDX apart from other meme tokens</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 6 ? "block" : "none"}` }}>SpunkySDX stands out by combining advanced asset tracking capabilities with a focus on real-world use cases. We aim to create a secure and transparent ecosystem for our community, bridging the gap between meme tokens and practical applications.</p>
                </div>
                <div className={isActive === 7 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 7 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(6)}>
                        <span className="icon-Icon">
                        </span>
                        <span>Where can I get information about SpunkySDX</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 7 ? "block" : "none"}` }}>For more information about SpunkySDX, visit our official website, follow us on social media, and join our community channels. Stay updated on our latest news, announcements, and project developments.</p>
                </div>
            </div>
        </>
    )
}
