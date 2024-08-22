
// export default function BackToTop({ scroll }) {
//     return (
//         <>
//             {scroll && (
//                 <a id="scroll-top" className="show" />
//             )}
//         </>
//     )
// }


export default function BackToTop({ scroll }) {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {scroll && (
                <a 
                    id="scroll-top" 
                    className="show" 
                    onClick={handleScrollToTop} 
                    style={{ cursor: 'pointer' }}
                >
                    ↑
                </a>
            )}
        </>
    );
}
