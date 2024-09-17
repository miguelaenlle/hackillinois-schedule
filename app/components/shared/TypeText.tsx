import { TypeAnimation } from "react-type-animation"

const TypeText: React.FC<{ key?: number, className?: string, delay?: number, speed: number, text: string }> = (props) => {
    return (
        <TypeAnimation
            key={props.key}
            sequence={[
                props.delay ?? 300,
                props.text
            ]}
            wrapper="div"
            speed={props.speed as any}
            className={props.className}
            repeat={0}
            cursor={false}
        />
    )
}

export default TypeText;