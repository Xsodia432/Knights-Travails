async function knightMoves([startX, startY], [targetX, targetY]) {
  let showMoves = 0;
  let visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  let parent = Array.from({ length: 8 }, () => Array(8).fill(null));
  let queue = [[startX, startY, 0]];
  visited[startX][startY] = true;

  const knightMoves = [
    [1, 2],
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
    [-1, -2],
    [-1, 2],
    [1, -2],
  ];
  while (queue.length > 0) {
    const [x, y, moves] = queue.shift();

    if (x === targetX && y === targetY) break;
    for (let [kx, ky] of knightMoves) {
      const cx = kx + x;
      const cy = ky + y;
      if (cx >= 0 && cx < 8 && cy >= 0 && cy < 8 && !visited[cx][cy]) {
        parent[cx][cy] = [x, y];
        visited[cx][cy] = true;
        queue.push([cx, cy, moves + 1]);
        showMoves = moves;
      }
    }
  }

  let paths = [];
  let current = [targetX, targetY];
  while (current) {
    paths.push(current);
    current = parent[current[0]][current[1]];
  }
  paths.reverse();
  console.log(`You made it in ${showMoves + 1} moves`);
  console.log("Here's your path \n", paths);
}

knightMoves([0, 0], [7, 7]);
