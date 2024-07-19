import * as React from "react"
const BackdropStars: React.FC<{}> = (props) => {
    const stars = Array.from({ length: 100 }, (_, index) => ({
        id: index,
        top: Math.random() * 99,
        left: Math.random() * 99,
        animationDelay: `${Math.random() * 1}s`,
    }));

    return (
        <>
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        animationDelay: star.animationDelay,
                    }}
                ></div>
            ))}
        </>
    );
}
export default BackdropStars