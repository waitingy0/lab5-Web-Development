window.onload = function() {

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    // var ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the smiley face
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();

    // Draw the eyes
    ctx.beginPath();
    ctx.arc(170, 180, 10, 0, Math.PI * 2);
    ctx.arc(230, 180, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();

    // Draw the nose
    // 开始一个新的路径
    ctx.beginPath();
    // 移动到起点
    ctx.moveTo(200, 200);
    // 从起点绘制到终点
    ctx.lineTo(200, 230);
    // 设置线条宽度
    ctx.lineWidth = 5;
    // 设置线条颜色
    ctx.strokeStyle = 'black';
    // 绘制路径轮廓
    ctx.stroke();

    // Draw the mouth
    ctx.beginPath();
    ctx.arc(200, 210, 50, 1, Math.PI - 1, false);
    // ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Draw the text
    ctx.font = '30px Arial';
    ctx.fillText('Smiley Face', 130, 350);
};

// 颜色名称     ctx.fillStyle = 'skyblue';
//     ctx.fillRect(10, 110, 90, 90);

//     ctx.fillStyle = 'salmon';
//     ctx.fillRect(110, 110, 90, 90);

//     ctx.fillStyle = 'palegoldenrod';
//     ctx.fillRect(210, 110, 90, 90);

//     ctx.fillStyle = 'plum';
//     ctx.fillRect(310, 110, 90, 90);