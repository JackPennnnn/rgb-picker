/**
 * 返回一个canvas对象
 * @param width 图片的宽度
 * @param height 图片的高度
 */
export function createCanvasElement(width: number, height: number): CanvasRenderingContext2D {
    const canvas: HTMLCanvasElement = document.createElement('canvas')
    canvas.setAttribute('width', width + 'px')
    canvas.setAttribute('height', height + 'px')
    return <CanvasRenderingContext2D>canvas.getContext('2d')
}

/**
 * 判断是否为base64
 * @param str
 */
export function isBase64(str: string): boolean {
    if (str === '' || str.trim() === '') {
        return false;
    }
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}

/**
 * 返回rgb的对比色
 * @param r
 * @param g
 * @param b
 */
export function revertColor(r: number, g: number, b: number):string {
    return [255 - r,255 - g, 255 - b].join(',')
}