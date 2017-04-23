/**
 * Created by zuoan on 2017/4/5.
 * 提供游戏的操作支持
 */
var matrix = [];//存储数据

// 禁止方向键默认功能
document.onkeydown = function (event) {
    if (event.keyCode >= 37 && event.keyCode <= 40) {
        event.preventDefault();
    }
};

window.onload = function () {
    //绑定事件
    document.querySelector(".new-game").addEventListener("click", newGame);

};

function newGame() {
    init();
    generateNum();
    generateNum();

    updateView();
}

/**
 * 初始化布局
 * */
function init() {
    // 初始化matrix
    for (var i = 0; i < 4; i++) {
        matrix[i] = [0, 0, 0, 0];
    }

    // 分数清0
    // 判断是否最高分数分数
    // 重置body部分
}
/**
 * 在一个随机位置产生数字2或者4
 * */
function generateNum() {
    var x = Math.floor(Math.random() * 4);
    var y = Math.floor(Math.random() * 4);
    if (isEmptyCell(x, y)) {
        matrix[x][y] = Math.random() > 0.6 ? 4 : 2;
    } else {
        generateNum();
    }

}

/**
 * 根据matrix 更新view cell
 * */
function updateView() {
    var body = document.querySelector(".body");
    //清空已有的view cell
    while (document.querySelectorAll(".view-cell").length > 0) {
        body.removeChild(body.querySelector(".view-cell"));
    }

    //生成新的view cell
    matrix.forEach(function (currRow, indexRow) {
        currRow.forEach(function (matrixData, indexCol) {
            var viewCell = createViewCell(matrixData);
            var styleStr = "left:" + (15 + indexCol * 115) + "px;" +
                "top:" + (15 + indexRow * 115) + "px;" +
                "background-color:" + getViewCellBackgroundColor(matrixData) + ";" +
                "color:" + getViewCellColor(matrixData);


            viewCell.setAttribute("style", styleStr);

            body.appendChild(viewCell);

        });
    });
}

/**
 * 根据数字返回一个view cell
 * */
function createViewCell(data) {
    var viewCell = document.createElement("div");
    viewCell.innerHTML = data;
    viewCell.className = "view-cell";

    return viewCell;
}
/**
 * 判断游戏是否应该结束
 * */
function isGameEnd() {

}
/**
 * 判断坐标为(x,y)的位置是否为空
 * */
function isEmptyCell(x, y) {
    return matrix[x][y] == 0;
}

function log(str) {
    console.log(str);
}


function getViewCellBackgroundColor(number) {
    //根据数字返回背景色
    switch (number) {
        case 2:
            return "#EEE4DA";
            break;
        case 4:
            return "#EDE0C8";
            break;
        case 8:
            return "#F2B179";
            break;
        case 16 :
            return "#F59563";
            break;
        case 32:
            return "#F67C5F";
            break;
        case 64:
            return "#F65E3B";
            break;
        case 128:
            return "#EDCF72";
            break;
        case 256:
            return "#6BADF6";
            break;
        case 512:
            return "#EBC400";
            break;
        case 1024:
            return "#EBC400";
            break;
        case 2048:
            return "#EBC400";
            break;


    }
    return "#FC6";
}

function getViewCellColor(number) {
    //根据数字返回前景色
    if (number <= 4) {
        return "#776E65";
    }
    return "#F9F6F2";
}