import {getDataInfo, handleData} from "./main.js";
import {Options, ResultObj} from "./types/options.js";
import {revertColor} from "./utils/utils";


const rgbPicker = async (src: string, options?: Options): Promise<ResultObj> => {
    let res = await getDataInfo(src, options)
    let resultObj: ResultObj = {}
    const handledData = handleData(res)
    resultObj.allData = handledData
    resultObj.mainColor = handledData[0].color
    // 去反色
    let arr = handledData[0].color.split(',')
    let revertColorResult = revertColor(Number(arr[0]), Number(arr[1]), Number(arr[2]))
    revertColorResult += ',' + arr[3]
    resultObj.revertMainColor = revertColorResult

    return resultObj

}


export default rgbPicker