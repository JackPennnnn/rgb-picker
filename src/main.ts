import {createCanvasElement, isBase64} from "./utils/utils.js";
import {Options} from "./types/options.js";

const getDataInfo = function (src: string, options?: Options): Promise<Uint8ClampedArray> {
    const img = new Image()
    img.src = src
    if (!isBase64(src)) img.crossOrigin = 'Anonymous'

    return new Promise((resolve, reject) => {
        img.onload = function () {

            const width: number = img.width
            const height: number = img.height

            const context = createCanvasElement(width, height)
            context.drawImage(img, 0, 0, width, height)
            const {data} = context.getImageData(options?.x || 0, options?.y || 0, (options?.width || width) * (options?.wPercent || 1), (options?.height || height) * (options?.hPercent || 1))

            resolve(data)
        }
    })

}


const handleData = (data: Uint8ClampedArray): Array<any> => {
    let list = []
    let map = {}
    for (let i = 0; i < data.length; i += 4) {
        let colorGroup: number[] = [data[i], data[i + 1], data[i + 2], data[i + 3]]
        if (colorGroup.indexOf(undefined) !== -1 || colorGroup[3] === 0) continue

        let str = colorGroup.join(',')
        map[str] = map[str] ? map[str] + 1 : 1
    }

    Object.keys(map).map(item => {
        let obj = {
            color: item,
            count: map[item]
        }
        list.push(obj)
    })

    list.sort((a, b) => b.count - a.count)

    return list
}
export {
    getDataInfo, handleData
}


