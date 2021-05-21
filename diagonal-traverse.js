/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    // initialize variables
    let pathInfo = [], xCord = 0, yCord = 0, up = 1;
    let pathLength = mat.length * mat[0].length;

    // begin the walking simulator
    for (; pathLength > 0; pathLength--) {

        // add your current coordinates to the path information
        pathInfo.push(mat[yCord][xCord])

        // if you are moving up
        // then check the following
        if (up === 1) {

            // if you can move right and up 
            // then move right and up
            if (xCord + 1 < mat[0].length && yCord - 1 >= 0) {
                xCord += 1;
                yCord -= 1;
            }

            // else if you can move right 
            // then move right
            else if (xCord + 1 < mat[0].length) {
                xCord += 1;
                up = 0;
            }

            // else if you can move down 
            // then move down 
            else if (yCord + 1 < mat.length) {
                yCord += 1;
                up = 0;
            }

            // else the trail ended
            // then return your path information
            else {
                return pathInfo;
            }
        }

        // else you are moving down
        // then check the following
        else {

            // if you can move left and down
            // then move left and down
            if (xCord - 1 >= 0 && yCord + 1 < mat.length) {
                xCord -= 1;
                yCord += 1;
            }

            // else if you can move down
            // then move down
            else if (yCord + 1 < mat.length) {
                yCord += 1;
                up = 1;
            }

            // else if you can move right
            // then move right
            else if (xCord + 1 < mat[0].length) {
                xCord += 1;
                up = 1;
            }

            // else the trail ended
            // then return your path information
            else {
                return pathInfo;
            }
        }
    }
};


console.log(findDiagonalOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));