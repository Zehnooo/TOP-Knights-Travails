

const knightMoves = ([startX, startY], [endX, endY]) => {
    if (startX === endX && startY === endY) { return [[startX, startY], [endX, endY]]; }
    const queue = [
        {
            position: [startX, startY],
            path: [[startX, startY]]
        }
    ];

    const tilesVisited = new Set([`${startX},${startY}`]);

    while (queue.length > 0) {
        const { position, path } = queue.shift();
        const [x, y] = position;

        if (x === endX && y === endY) return path;

        for (const move of possibleMoves(position)) {

            const key = `${move[0]},${move[1]}`;
            if (tilesVisited.has(key)) continue;
            tilesVisited.add(key);

            queue.push({
                position: move,
                path: [...path, move]
            });
        }
    }
    return null;
}


const possibleMoves = ([x, y]) => {
    return [
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y - 1],
        [x - 2, y + 1],
        [x + 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y - 2],
        [x - 1, y + 2]
    ] .filter(coords => ((coords[0] >= 0 && coords[0] < 8) && (coords[1] >= 0 && coords[1] < 8)));
}



const res = knightMoves([3, 3], [4, 3]);
console.log(`=> You made it in ${res.length - 1} moves! Here's your path: `, JSON.stringify(res, null, 0));