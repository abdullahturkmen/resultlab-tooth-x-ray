import React, {useRef, useEffect} from 'react'

const CropTooth = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        const image = new Image();
        image.src = props.img;

        image.onload = function () {
            context.drawImage(image, props.elementLeft -(props.elementWidth / 2), props.elementTop -(props.elementWidth * 3 / 2), props.elementWidth * 2, props.elementWidth * 4, 0, 0, 50, 100);
        }


    }, [])

    return <canvas ref={canvasRef}
        width="50px"
        height="100px"/>
}

export default CropTooth
